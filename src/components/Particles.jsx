// React hooks for mutable refs, memoization, and side effects
import { useRef, useMemo, useEffect } from 'react';
// Hook from React Three Fiber that lets you run code every frame (~60fps)
import { useFrame } from '@react-three/fiber';
// THREE.js core library (for math, vectors, etc.)
import * as THREE from 'three';

// How many particles to create
const particleCount = 1000;

// ------ link settings (tweak these) ------
const LINK_DIST = 1.7;           // max distance to draw a line between two particles
const LINE_OPACITY = 0.1;       // line transparency
const MAX_SEGMENTS = 4000;       // safety cap (higher = more lines but more work)
const CELL_SIZE = LINK_DIST;     // spatial hash cell size
// ----------------------------------------

export default function Particles({ fade = 1 }) {
  // Rotates the whole system (spheres + lines)
  const rootRef = useRef();
  // Only the sphere meshes live under this group (so indexing is stable)
  const spheresRef = useRef();

  // 1) particles data
  const particles = useMemo(() => {
    return new Array(particleCount).fill().map(() => ({
      original: new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 15
      ),
      position: new THREE.Vector3(),
      velocity: new THREE.Vector3(),
      noiseSeed: Math.random() * 1000
    }));
  }, []);

  // 2) lines geometry/material
  const lineGeomRef = useRef();
  const lineMatRef = useRef();
  const linePositions = useRef(new Float32Array(MAX_SEGMENTS * 2 * 3));

  useEffect(() => {
    if (!lineGeomRef.current) return;
    const attr = new THREE.BufferAttribute(linePositions.current, 3);
    lineGeomRef.current.setAttribute('position', attr);
    lineGeomRef.current.setDrawRange(0, 0);
  }, []);

  // 3) gentle screen-based tilt (your original behavior)
  const mouse = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // helpers: spatial hash for neighbors
  const cellKey = (x, y, z) =>
    `${Math.floor(x / CELL_SIZE)},${Math.floor(y / CELL_SIZE)},${Math.floor(z / CELL_SIZE)}`;

  const neighborOffsets = useMemo(() => {
    const offs = [];
    for (let dx = -1; dx <= 1; dx++)
      for (let dy = -1; dy <= 1; dy++)
        for (let dz = -1; dz <= 1; dz++)
          offs.push([dx, dy, dz]);
    return offs;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // physics update
    particles.forEach((p) => {
      const toOriginal = new THREE.Vector3()
        .subVectors(p.original, p.position)
        .multiplyScalar(0.002);

      const noise = new THREE.Vector3(
        Math.sin(t * 0.2 + p.noiseSeed) * 0.0005,
        Math.sin(t * 0.25 + p.noiseSeed * 1.5) * 0.0005,
        Math.sin(t * 0.15 + p.noiseSeed * 2.2) * 0.0005
      );

      p.velocity.add(toOriginal).add(noise);
      p.velocity.multiplyScalar(0.92);
      p.position.add(p.velocity);
    });

    // smooth tilt
    targetRotation.current.x += ((mouse.current.y * -0.2) - targetRotation.current.x) * 0.05;
    targetRotation.current.y += ((mouse.current.x *  0.2) - targetRotation.current.y) * 0.05;

    if (rootRef.current) {
      rootRef.current.rotation.x = targetRotation.current.x;
      rootRef.current.rotation.y = targetRotation.current.y;
    }

    // sync sphere mesh positions (index strictly matches particles array)
    if (spheresRef.current) {
      const children = spheresRef.current.children;
      for (let i = 0; i < particles.length && i < children.length; i++) {
        const child = children[i];
        child.position.copy(particles[i].position);
        if (child.material) {
          child.material.opacity = fade;
          child.material.transparent = true;
        }
      }
    }

    // rebuild link segments
    const dist2 = LINK_DIST * LINK_DIST;
    const grid = new Map();

    for (let i = 0; i < particleCount; i++) {
      const p = particles[i].position;
      const key = cellKey(p.x, p.y, p.z);
      let arr = grid.get(key);
      if (!arr) grid.set(key, (arr = []));
      arr.push(i);
    }

    let segs = 0;
    const posArray = linePositions.current;

    for (let i = 0; i < particleCount; i++) {
      const a = particles[i].position;
      const [cx, cy, cz] = cellKey(a.x, a.y, a.z).split(',').map(Number);

      for (const [dx, dy, dz] of neighborOffsets) {
        const k = `${cx + dx},${cy + dy},${cz + dz}`;
        const bucket = grid.get(k);
        if (!bucket) continue;

        for (let bi = 0; bi < bucket.length; bi++) {
          const j = bucket[bi];
          if (j <= i) continue;
          const b = particles[j].position;

          const dxp = a.x - b.x, dyp = a.y - b.y, dzp = a.z - b.z;
          const d2 = dxp*dxp + dyp*dyp + dzp*dzp;

          if (d2 <= dist2) {
            const v = segs * 2 * 3;
            posArray[v + 0] = a.x; posArray[v + 1] = a.y; posArray[v + 2] = a.z;
            posArray[v + 3] = b.x; posArray[v + 4] = b.y; posArray[v + 5] = b.z;
            segs++;
            if (segs >= MAX_SEGMENTS) break;
          }
        }
        if (segs >= MAX_SEGMENTS) break;
      }
      if (segs >= MAX_SEGMENTS) break;
    }

    if (lineGeomRef.current) {
      lineGeomRef.current.setDrawRange(0, segs * 2); // vertices = segments * 2
      lineGeomRef.current.getAttribute('position').needsUpdate = true;
    }

    if (lineMatRef.current) {
      lineMatRef.current.opacity = Math.max(0, Math.min(1, LINE_OPACITY * fade));
      lineMatRef.current.transparent = true;
      lineMatRef.current.depthWrite = false;
    }
  });

  return (
    <group ref={rootRef}>
      {/* Spheres in their own group so indexing is stable */}
      <group ref={spheresRef}>
        {particles.map((p, i) => (
          <mesh key={i} position={p.position}>
            <sphereGeometry args={[0.007, 10, 10]} />
            <meshStandardMaterial
              color="white"
              emissive="white"
              emissiveIntensity={1}
              transparent
              opacity={fade}
            />
          </mesh>
        ))}
      </group>

      {/* Lines rendered as a sibling, not counted in sphere loop */}
      <lineSegments>
        <bufferGeometry ref={lineGeomRef} />
        <lineBasicMaterial ref={lineMatRef} color="#ffffff" opacity={LINE_OPACITY} transparent />
      </lineSegments>
    </group>
  );
}
