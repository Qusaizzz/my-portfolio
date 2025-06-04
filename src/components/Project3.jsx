import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Project3() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const updateProgress = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (event) => {
    if (videoRef.current) {
      videoRef.current.volume = event.target.value;
      setVolume(event.target.value);
    }
  };

  const handleProgressClick = (event) => {
    if (videoRef.current) {
      const rect = event.target.getBoundingClientRect();
      const clickPosition = (event.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = clickPosition * videoRef.current.duration;
    }
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    const interval = setInterval(updateProgress, 500);
    return () => clearInterval(interval);
  }, []);

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
      {/* Title & Description Section - aligned at the top */}
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
          flexDirection: 'row', // Row layout for side-by-side content
          justifyContent: 'space-between', // Space between elements
          alignItems: 'flex-start', // Align items to the top
        }}
      >
        <div style={{ maxWidth: '500px', marginTop: 0 }}>
          <h1 style={{ fontSize: '2.9rem', marginBottom: '0.5rem' }}>A Journey of Life’s Evolution - Interactive Installation</h1>
          <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Role: Master's Student - Design and Interaction</p>
          <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Tools: Touchdesigner, 3ds Max</p>
          <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Sensors: Kinect, LeapMotion</p>
        </div>

        {/* Paragraph next to Title */}
        <div style={{ maxWidth: '600px', color: 'white', lineHeight: '2', marginTop: 0 }}>
          <p style={{ fontSize: '0.8rem', marginTop: '2.5rem' }}>
            Designed for the Museum für Naturkunde - Leibniz Institute for Evolution and Biodiversity Science (MfN), this interactive installation invites visitors to experience the evolution of life in a deeply personal way. As users move through a straight path, their reflection transforms to resemble creatures from various eras in the history of life, starting with ancient life forms from the Paleozoic Era, progressing through the Mesozoic Era and the age of dinosaurs, and evolving into mammals during the Cenozoic Era, moving to the Quaternary Period, the rise of modern humans. In the final stage of the experience (The Future), users encounter their reflection in an undefined shape, which they can interact with and reshape through hand gestures. This immersive experience allows users to feel the passage of time and illustrates the concept that the future is in our hands, emphasizing the profound responsibility we, as humans, have in shaping what comes next for the planet and its creatures.
          </p>
        </div>
      </section>

    {/* Video Section - video1 */}
<section
  style={{
    width: '100%',
    maxWidth: '1200px',
    position: 'relative',
    backgroundColor: '#fff',
    flexShrink: 0,
    marginTop: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1rem', // ✅ Add this line!
    overflow: 'hidden',
    aspectRatio: '16 / 5',
  }}
>
  {/* Video1 */}
  <video
    ref={videoRef}
    src="/era.mp4"
    muted={false}
    loop={false}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      backgroundColor: 'white',
      cursor: 'pointer',
    }}
    onClick={togglePlayPause}
  />

  {/* Play Button Overlay (center) */}
  {!isPlaying && (
    <div
      onClick={togglePlayPause}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        cursor: 'pointer',
        zIndex: 2,
      }}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="40" fill="rgba(0,0,0,0.5)" />
        <polygon points="40,30 70,50 40,70" fill="white" />
      </svg>
    </div>
  )}

  {/* Modern Progress Bar */}
  <input
    type="range"
    min="0"
    max="100"
    value={progress}
    onChange={(e) => {
      if (videoRef.current) {
        const seekTime = (e.target.value / 100) * videoRef.current.duration;
        videoRef.current.currentTime = seekTime;
      }
    }}
    style={{
      position: 'absolute',
      bottom: '10px',
      left: 0,
      width: '100%',
      appearance: 'none',
      height: '4px',
      background: '#666',
      outline: 'none',
      cursor: 'pointer',
      zIndex: 3,
      accentColor: '#ff6f00',
    }}
  />
</section>

{/* Title & Description Section - aligned at the top */}
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
          flexDirection: 'row', // Row layout for side-by-side content
          justifyContent: 'space-between', // Space between elements
          alignItems: 'flex-start', // Align items to the top
        }}
      >
        <div style={{ maxWidth: '500px', marginTop: 0 }}>
          <h1 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: '300' }}>Process</h1>
        </div>

        {/* Paragraph next to Title */}
        <div style={{ maxWidth: '900px', color: 'white', lineHeight: '2', marginTop: 0 }}>
          <p style={{ fontSize: '0.8rem', marginTop: '1.5rem' }}>
            In this project, I created an interactive particle system experience, I used TouchDesigner to create and test the experience. I integrated Kinect to track the user’s position and enable the dynamic transformation of their reflection as they moved through the installation. I used Leap Motion to capture hand gestures in the last stage of the experience, allowing users to interact with the undefined future form.
          </p>
        </div>
      </section>

            {/* Video Section - Two Videos next to each other */}
<section
  style={{
    backgroundColor: '#0a0a0a',
    padding: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1200px', // Align with other sections
  }}
>
  {/* Video 1 */}
  <div
    style={{
      flex: '1 1 46%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '1.1rem', // Add side margin
      marginRight: '0.4rem', // Add side margin
    }}
  >
    <video
      src="erafixed1.mp4" // Replace with the actual path to the first video
      autoPlay
      loop
      muted
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  </div>

  {/* Video 2 */}
  <div
    style={{
      flex: '1 1 46%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '0.4rem', // Add side margin
      marginRight: '1.1rem', // Add side margin
    }}
  >
    <video
      src="erafixed2.mp4" // Replace with the actual path to the second video
      autoPlay
      loop
      muted
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  </div>
</section>

      {/* White Section with One Image and Paragraph */}
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
          maxWidth: '1200px', // Align with video section
        }}
      >
        {/* Image */}
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
            src="/eraimg.jpg"
            alt="3D process"
            style={{
              maxWidth: '1200px',
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </section>




        {/* New Video Section - Automatic Play */}
      <section
        style={{
          width: '100%',
          maxWidth: '1200px',
          position: 'relative',
          backgroundColor: '#fff',
          flexShrink: 0,
          marginTop: '4rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '1rem',
          overflow: 'hidden',
          aspectRatio: '16 / 9',
        }}
      >
        {/* New Video (AutoPlay) */}
        <video
          src="/eraprojector.mp4" // Update with your new video source
          autoPlay
          muted
          loop
          poster="exi1.jpg" // Update with new poster image
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            backgroundColor: 'white',
          }}
        />
      </section>


      {/* Footer Section */}
      <section
        style={{
          backgroundColor: '#0a0a0a',
          padding: '2rem 4vw',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>
          ⬅ Back to Home
        </Link>
      </section>
    </div>
  );
}
