import React, { useState } from 'react';

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
      {/* Title and Description Section */}
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
          <h1
            style={{
              fontSize: '2.6rem',
              marginBottom: '0.5rem',
            }}
          >
            Beach House – Web-Based Immersive Walkthrough (WebGL)
          </h1>

          <p
            style={{
              fontSize: '0.8rem',
              color: '#aaa',
            }}
          >
            Tools: Unity, 3ds Max, WebGL
          </p>
        </div>

        <div
          style={{
            maxWidth: '600px',
            color: 'white',
            lineHeight: '2',
            marginTop: 0,
          }}
        >
          <p
            style={{
              fontSize: '1rem',
              marginTop: '2rem',
            }}
          >
            This project presents a two-level beach house aligned with the
            natural terrain of a cliffside, where the mountain meets the sea.
            It was developed as an interactive web-based walkthrough that
            allows users to explore the space in real time directly through
            their web browser.
          </p>
        </div>
      </section>

      {/* Unity WebGL Embed Section */}
      <section
        style={{
          width: '100%',
          maxWidth: '1200px',
          aspectRatio: '1280 / 740',
          marginTop: '2rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '1rem',
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)',
          position: 'relative',
          backgroundColor: '#000',
        }}
      >
        {/* Start Overlay */}
        {!iframeStarted && (
          <button
            type="button"
            onClick={handleStartClick}
            aria-label="Start the Beach House interactive walkthrough"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              padding: 0,
              border: 'none',
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
              alt="Start the Beach House interactive walkthrough"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </button>
        )}

        {/* Load the official itch.io embed only after clicking */}
        {iframeStarted && (
          <iframe
            src="https://itch.io/embed-upload/18924324?color=000000"
            title="Beach House WebGL Walkthrough"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            allow="autoplay; fullscreen; gamepad; gyroscope; accelerometer; pointer-lock"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        )}
      </section>

      {/* Direct Link Fallback */}
      <p
        style={{
          margin: '0.5rem auto 2rem',
          padding: '0 1rem',
          color: '#aaa',
          textAlign: 'center',
          fontSize: '0.9rem',
        }}
      >
        If the walkthrough does not load,{' '}
        <a
          href="https://qussaikh.itch.io/beach-house"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#fff',
            textDecoration: 'underline',
          }}
        >
          open it directly on itch.io
        </a>
        .
      </p>

      {/* Concept and Process Section */}
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
          <h2
            style={{
              fontSize: '1.6rem',
              marginBottom: '0.5rem',
              fontWeight: 300,
            }}
          >
            Concept &amp; Process
          </h2>
        </div>

        <div
          style={{
            maxWidth: '900px',
            color: 'white',
            lineHeight: '2',
          }}
        >
          <p
            style={{
              fontSize: '1rem',
              marginTop: '1.5rem',
            }}
          >
            I designed the building in Revit using a full BIM workflow, then
            brought the model into 3ds Max, where I handled the texturing and
            V-Ray rendering to create realistic, high-quality visuals. To make
            the concept fully interactive, I developed a real-time walkthrough
            in Unity and exported it as a WebGL build, allowing users to explore
            the space directly in their browser with no installation required.
          </p>
        </div>
      </section>

      {/* First Image Section */}
      <section
        style={{
          backgroundColor: '#0a0a0a',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1200px',
        }}
      >
        <img
          src="/in2.jpg"
          alt="Beach House interior visualization"
          loading="lazy"
          style={{
            display: 'block',
            maxWidth: '1200px',
            width: '100%',
            height: 'auto',
          }}
        />
      </section>

      {/* Second Image Section */}
      <section
        style={{
          backgroundColor: '#0a0a0a',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1200px',
        }}
      >
        <img
          src="/in1.jpg"
          alt="Beach House exterior visualization"
          loading="lazy"
          style={{
            display: 'block',
            maxWidth: '1200px',
            width: '100%',
            height: 'auto',
          }}
        />
      </section>

      {/* Footer Spacing */}
      <footer
        style={{
          backgroundColor: '#0a0a0a',
          padding: '2rem 4vw',
          textAlign: 'center',
          color: 'white',
        }}
      />
    </div>
  );
}