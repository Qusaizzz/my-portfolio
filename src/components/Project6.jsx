import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Project2() {
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
        <div style={{ maxWidth: '450px', marginTop: 0 }}>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '0.5rem' }}>Inner Nature - A Bio Driven Experience</h1>
          <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Role: Master's Student - Design and Interaction</p>
          <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Touchdesigner, StreamDiffuaion, Muse 2, Brain Waves</p>
        </div>

        {/* Paragraph next to Title */}
        <div style={{ maxWidth: '600px', color: 'white', lineHeight: '2', marginTop: 0 }}>
          <p style={{ fontSize: '1rem', marginTop: '2rem' }}>
            Inner Nature is an interactive visual experience that translates real-time biometric data—brainwaves, heart pulse, and breath into a growing generative plant. The experience transforms the body’s internal signals into a living and evolving visual organism, revealing our physical and physiological state.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section
        style={{
          backgroundColor: '#0a0a0a',
          padding: '1rem',
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
            src="/Project6_img.jpg"
            alt="Beach House"
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
          flexShrink: 0,
          marginTop: '2rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '1rem',
          overflow: 'hidden',
        }}
      >
        {/* New Video (AutoPlay) */}
        <video
          src="/BioDriven.mp4" // Update with your new video source
          autoPlay
          muted
          loop
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            backgroundColor: 'white',
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
          <h1 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: '300' }}>Concept & Process</h1>
        </div>

        {/* Paragraph next to Title */}
        <div style={{ maxWidth: '900px', color: 'white', lineHeight: '2', marginTop: 0 }}>
            <p style={{ fontSize: '1rem', marginTop: '1.5rem' }}>
            The concept is rooted in the idea that our emotional and physiological states are not separate from our environment but constantly influencing it. By visualizing these signals as a responsive, evolving organism, the experience invites the user to witness their inner state taking shape before their eyes.
          </p>
          <p style={{ fontSize: '1rem', marginTop: '1.5rem' }}>
            I created the experience in Touchdesigner, and integrated the user’s brain activity, heart rate, and breath to as inputs to control the behavior and shape of the generated visual plant. Using the Muse 2 headband, brainwave data is streamed into TouchDesigner via OSC, where different channels are mapped to parameters that define the plant’s structure and growth. A calmer mental state results in smoother, more flourishing forms. Heart rate and breath signals add another layer of responsiveness. Breathing influences the plant’s motion, allowing it to expand in rhythm with the user. I also integrated StreamDiffusion to generate adaptive visual textures that evolve in rea-time based on the generated bio-reactive tree.
          </p>
          
        </div>
      </section>

      



    {/* Video Section - video1 */}
<section
  style={{
    width: '100%',
    maxWidth: '1200px',
    position: 'relative',
    // backgroundColor: '#fff',
    flexShrink: 0,
    marginTop: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1rem', // ✅ Add this line!
    overflow: 'hidden',
    aspectRatio: '16 / 9',
  }}
>
  {/* Video1 */}
  <video
    ref={videoRef}
    src="/Interface.mp4"
    muted={false}
    loop={false}
    // poster="project2_thumbnail.jpg"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      // backgroundColor: 'white',
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



{/* New Video Section - Automatic Play */}
      <section
        style={{
          width: '100%',
          maxWidth: '1200px',
          position: 'relative',
          flexShrink: 0,
          marginTop: '2rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '1rem',
          overflow: 'hidden',
        }}
      >
        {/* New Video (AutoPlay) */}
        <video
          src="/intro.mp4" // Update with your new video source
          autoPlay
          muted
          loop
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            backgroundColor: 'white',
          }}
        />
      </section>



      {/* New Video Section - Automatic Play */}
      <section
        style={{
          width: '100%',
          maxWidth: '1200px',
          position: 'relative',
          flexShrink: 0,
          marginTop: '2rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '1rem',
          overflow: 'hidden',
        }}
      >
        {/* New Video (AutoPlay) */}
        <video
          src="/intro_1.mp4" // Update with your new video source
          autoPlay
          muted
          loop
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            backgroundColor: 'white',
          }}
        />
      </section>


      {/* Image Section */}
      <section
        style={{
          backgroundColor: '#0a0a0a',
          padding: '1rem',
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
            src="/project6teaser.jpg"
            alt="Beach House"
            style={{
              maxWidth: '1200px',
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
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
        
      </section>
    </div>
  );
}
