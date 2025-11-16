// import the React Three Fiber <Canvas> component
import { Canvas } from '@react-three/fiber';

// import OrbitControls (a helper that lets the camera orbit/rotate/zoom with the mouse)
import { OrbitControls } from '@react-three/drei';

// import React hooks
import { useEffect, useState } from 'react';

// import the custom 3D particle component
import Particles from './Particles';

// ------------------------------------------------------------------
// main functional React component for the hero section of your site
export default function Hero() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fade = Math.max(0, 1 - scrollY / (window.innerHeight * 0.6));

  // ------------------------------------------------------------------
  return (
    // ⭐ HERE: section with id="home"
    <section
      id="home"
      style={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* 3D canvas */}
      <Canvas
        camera={{ position: [0, 0, 5] }}
        style={{ background: '#0a0a0a' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 2, 2]} intensity={0.8} />
        <Particles fade={fade} />

        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Text Overlay */}
      <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',   // ⭐ full centering
        color: 'white',
        textAlign: 'center',
        zIndex: 10,
        opacity: fade,
        transition: 'opacity 0.3s ease-out'
      }}
      >
        <h1 style={{ fontSize: '4rem', fontWeight: 'normal', margin: 0 }}>
          QUSSAI KHADDOUR
        </h1>

        <p style={{ fontSize: '1.5rem', marginTop: '0.9rem' }}>
          DIGITAL MEDIA DESIGNER
        </p>
      </div>

      {/* bottom gradient */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100px',
          background:
            'linear-gradient(to bottom, rgba(10,10,10,0) 0%, #0a0a0a 100%)',
          zIndex: 5
        }}
      />
    </section>
  );
}
