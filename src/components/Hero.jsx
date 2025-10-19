// import the React Three Fiber <Canvas> component
//   it creates a WebGL canvas and manages the three.js renderer for us
import { Canvas } from '@react-three/fiber';

// import OrbitControls (a helper that lets the camera orbit/rotate/zoom with the mouse)
//   from drei (a utilities library for react-three-fiber)
import { OrbitControls } from '@react-three/drei';

// import React hooks
//   useEffect → run side effects such as adding event listeners
//   useState   → store component state (here: current scroll position)
import { useEffect, useState } from 'react';

// import the custom 3D particle component that renders the particle system
import Particles from './Particles';

// ------------------------------------------------------------------
// main functional React component for the hero section of your site
export default function Hero() {

  // create a state variable to store the current vertical scroll offset
  //   default value = 0
  const [scrollY, setScrollY] = useState(0);

  // useEffect runs once when the component mounts
  // here it attaches a scroll listener that updates "scrollY" every time the
  // user scrolls the page, then cleans up when the component unmounts
  useEffect(() => {
    // callback: when window scrolls, store the new scroll position
    const handleScroll = () => setScrollY(window.scrollY);

    // add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // cleanup function (remove the listener to avoid memory leaks)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // empty dependency array → run only once at mount/unmount

  // compute a "fade" value between 1 and 0 based on how far the page is scrolled
  //   as scroll increases, fade gradually decreases (used for opacity)
  const fade = Math.max(0, 1 - scrollY / (window.innerHeight * 0.6));

  // ------------------------------------------------------------------
  // component render (JSX returned to React)
  return (
    // wrapper <div> around the entire hero section
    <div
      style={{
        height: '100vh',             // full viewport height
        width: '100vw',              // full viewport width
        position: 'relative',        // allows absolutely positioned children
        overflow: 'hidden'           // hide anything overflowing the section
      }}
    >
      {/* ----------------------------------------------------------------
           the 3D canvas area
           <Canvas> is the React-Three-Fiber component that sets up
           the three.js renderer, camera, and scene
         ---------------------------------------------------------------- */}
      <Canvas
        // initial camera position in 3D space (x, y, z)
        camera={{ position: [0, 0, 5] }}
        // canvas background color
        style={{ background: '#0a0a0a' }}
      >
        {/* soft ambient light (lights everything evenly) */}
        <ambientLight intensity={0.5} />

        {/* point light acts like a small bulb at position (2, 2, 2) */}
        <pointLight position={[2, 2, 2]} intensity={0.8} />

        {/* render the custom Particles component
            "fade" is passed as a prop to control opacity based on scroll */}
        <Particles fade={fade} />

        {/* OrbitControls lets the user rotate and zoom the camera with mouse
            here zoom is disabled so only rotation works */}
        <OrbitControls enableZoom={false}
        
        />
      </Canvas>

      {/* ----------------------------------------------------------------
           overlay HTML content (text)
           this sits visually "on top" of the 3D canvas
         ---------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',          // positioned relative to parent <div>
          top: '35%',                    // vertical offset
          left: '50%',                   // horizontal center
          transform: 'translateX(-50%)', // shift left by 50% to perfectly center
          color: 'white',                // text color
          textAlign: 'center',           // center the text lines
          zIndex: 10,                    // ensure it sits above the canvas
          opacity: fade,                 // fade out as you scroll
          transition: 'opacity 0.3s ease-out' // smooth fade transition
        }}
      >
        {/* large name heading */}
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', margin: 0 }}>
          QUSSAI KHADDOUR
        </h1>

        {/* subtitle line below */}
        <p style={{ fontSize: '1.5rem', marginTop: '0.9rem' }}>
          DIGITAL MEDIA DESIGNER
        </p>
      </div>

      {/* ----------------------------------------------------------------
           gradient overlay at the bottom of the hero
           creates a smooth fade into the next section
         ---------------------------------------------------------------- */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100px',
          // gradient from transparent → dark
          background:
            'linear-gradient(to bottom, rgba(10,10,10,0) 0%, #0a0a0a 100%)',
          zIndex: 5 // sits above the 3D scene but below the text
        }}
      />
    </div>
  );
}
