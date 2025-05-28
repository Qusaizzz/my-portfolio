import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const particleCount = 1200;

export default function Particles({ fade = 1 }) {
  const meshRef = useRef();

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

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    particles.forEach((p) => {
      const toOriginal = new THREE.Vector3()
        .subVectors(p.original, p.position)
        .multiplyScalar(0.004);

      const noise = new THREE.Vector3(
        Math.sin(t * 0.2 + p.noiseSeed) * 0.0005,
        Math.sin(t * 0.25 + p.noiseSeed * 1.5) * 0.0005,
        Math.sin(t * 0.15 + p.noiseSeed * 2.2) * 0.0005
      );

      p.velocity.add(toOriginal).add(noise);
      p.velocity.multiplyScalar(0.92);
      p.position.add(p.velocity);
    });

    meshRef.current.children.forEach((child, i) => {
      child.position.copy(particles[i].position);
      if (child.material) {
        child.material.opacity = fade;
        child.material.transparent = true;
        child.material.needsUpdate = true;
      }
    });

    meshRef.current.rotation.y += 0.00025;
  });

  return (
    <group ref={meshRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[0.005, 10, 10]} />
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
  );
}
