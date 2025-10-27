import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Project4() {
  const [iframeStarted, setIframeStarted] = useState(false);

  const handleStartClick = () => {
    setIframeStarted(true);
  };

  return (
    <div
      style={{
        backgroundColor: '#0a0a0a',
        color: 'white',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        margin: 0,
      }}
    >
      {/* Title & Description Section */}
      <section
        style={{
          padding: '2rem 4vw',
          backgroundColor: '#0a0a0a',
          width: '100%',
          textAlign: 'left',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1200px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ maxWidth: '500px' }}>
          <h1 style={{ fontSize: '2.9rem', marginBottom: '0.5rem' }}>Beach House – WebBased Immersive Walkthrough (WebGL)</h1>

          <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Tools: Unity, 3ds Max, WebGL</p>
        </div>

        <div style={{ maxWidth: '600px', color: 'white', lineHeight: '2' }}>
          <p style={{ fontSize: '1rem', marginTop: '3.6rem' }}>
            This project presents a two-level beach house aligned with the natural terrain of a cliffside, where the mountain meets the sea. Developed with an interactive web-based walkthrough experience that allows users to explore the space in real time directly through their web browser.
          </p>
        </div>
      </section>

      {/* Unity WebGL iframe Section */}
      <section
        style={{
          width: '100%',
          maxWidth: '1200px',
          aspectRatio: '16 / 9',
          marginTop: '2rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '1rem',
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: '0 0 20px rgba(0,0,0,0.4)',
          position: 'relative',
          backgroundColor: '#000',
        }}
      >
        {/* Start Overlay */}
        {!iframeStarted && (
          <div
            onClick={handleStartClick}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              zIndex: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <img
              src="/info.png"
              alt="Click to start the experience"
              style={{
                width: '1400px',
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        )}

        {/* Show iframe only after click */}
        {iframeStarted && (
          <iframe
            src="https://html-classic.itch.zone/html/14086787/index.html"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            scrolling="no"
            allow="autoplay; fullscreen; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated; web-share; pointer-lock"
            sandbox="allow-scripts allow-same-origin allow-popups allow-pointer-lock"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          ></iframe>
        )}
      </section>

      {/* Concept & Process Section */}
      <section
        style={{
          padding: '2rem 4vw',
          backgroundColor: '#0a0a0a',
          width: '100%',
          textAlign: 'left',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1200px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ maxWidth: '500px' }}>
          <h1 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: '300' }}>
            Concept & Process
          </h1>
        </div>

        <div style={{ maxWidth: '900px', color: 'white', lineHeight: '2' }}>
          <p style={{ fontSize: '1rem', marginTop: '1.5rem' }}>
            The building was designed in Revit (BIM). The model was then textured and rendered in 3ds Max using V-Ray, creating realistic and detailed results. To bring the concept to life, I developed a real-time interactive walkthrough in Unity as a WebGL, allowing easy access through any web browser without the need for any installation.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section
        style={{
          backgroundColor: '#0a0a0a',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1200px',
        }}
      >
        <div
          style={{
            flex: '1 1 60%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <img
            src="/in2.jpg"
            alt="Beach House"
            style={{
              maxWidth: '1200px',
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </section>

      {/* Image Section */}
      <section
        style={{
          backgroundColor: '#0a0a0a',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1200px',
        }}
      >
        <div
          style={{
            flex: '1 1 60%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <img
            src="/in1.jpg"
            alt="Beach House"
            style={{
              maxWidth: '1200px',
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </section>

      {/* Footer */}
      <section
        style={{
          backgroundColor: '#0a0a0a',
          padding: '2rem 4vw',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>
          ⬅ Home
        </Link>
      </section>
    </div>
  );
}
