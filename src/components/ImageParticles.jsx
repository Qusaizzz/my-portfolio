// src/components/ImageParticles.jsx
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function ImageParticles() {
  const pointsRef = useRef();

  const count = 700; // More particles
  const radius = 1.5;

  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      const r = radius * Math.sqrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const x = r * Math.cos(theta);
      const y = r * Math.sin(theta);
      const z = (Math.random() - 0.5) * 2;
      pos.push(x * 100, y * 100, z * 100);
    }
    return new Float32Array(pos);
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Canvas style={{ width: 400, height: 320 }}>
      <Points ref={pointsRef}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <PointMaterial
          color="#ffffff"
          size={1.4}
          sizeAttenuation
          depthWrite={false}
          transparent
        />
      </Points>
    </Canvas>
  );
}
