import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const particleCount = 1500;

export default function Particles({ fade = 1 }) {
  const meshRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

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

  // Update mouse position normalized [-1, 1]
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

    // Smooth rotation based on mouse
    targetRotation.current.x += ((mouse.current.y * -0.2) - targetRotation.current.x) * 0.05;
    targetRotation.current.y += ((mouse.current.x * 0.2) - targetRotation.current.y) * 0.05;

    if (meshRef.current) {
      meshRef.current.rotation.x = targetRotation.current.x;
      meshRef.current.rotation.y = targetRotation.current.y;
    }

    meshRef.current.children.forEach((child, i) => {
      child.position.copy(particles[i].position);
      if (child.material) {
        child.material.opacity = fade;
        child.material.transparent = true;
        child.material.needsUpdate = true;
      }
    });
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
