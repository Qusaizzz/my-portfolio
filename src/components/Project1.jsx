import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Project1() {
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
          <h1 style={{ fontSize: '3.6rem', marginBottom: '0.5rem' }}>Web-Based AR Experience</h1>
          <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Role: Working Student at GROHE | Digital Content & Experience</p>
          <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Tools: WebXR, Three.js, 3ds Max</p>
        </div>

        {/* Paragraph next to Title */}
        <div style={{ maxWidth: '600px', color: 'white', lineHeight: '2', marginTop: 0 }}>
          <p style={{ fontSize: '0.8rem', marginTop: '3.6rem' }}>
            This project proposal is an interactive AR experience I developed as a working student at GROHE. The goal was to introduce a "scan and place" feature within GROHE's 360 showrooms, enabling users to visualize products in their own space using augmented reality. Built with WebXR and Three.js, the experience is available instantly through a simple web page, eliminating the need for users to download any apps. While it offers accessibility across different platforms, it's important to note that WebXR is not yet fully supported by iOS, meaning the experience works best on Android devices. This project reflects GROHE's innovative approach to providing immersive experiences to customers.
          </p>
        </div>
      </section>

    {/* Video Section */}
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
    aspectRatio: '16 / 9',
  }}
>
  {/* Video */}
  <video
    ref={videoRef}
    src="/project2.mp4"
    muted={false}
    loop={false}
    poster="project1.jpg"
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
          <h1 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: '300' }}>Concept & Process</h1>
        </div>

        {/* Paragraph next to Title */}
        <div style={{ maxWidth: '900px', color: 'white', lineHeight: '2', marginTop: 0 }}>
          <p style={{ fontSize: '0.8rem', marginTop: '1.5rem' }}>
            Ouchhh created approximately 52 Washington Washington DC, Montreal, São Paulo, Seoul, Roma, Moscow, Prague, Brussels, Hong Kong, Jakarta, Scotland, Singapore, Las Vegas, London, Barcelona, Berlin, etc... for too many festivals and institutes such as Ars Electronica, Cern, Nasa, Google, Signal, iMapp, Mutek, Melbourne Light Festival, Singapore Art and Science Museum, Frost Miami Science Museum, SAT Société des arts technologiques Montreal, Canada National Space Center UK, American Indian Arts, Atelier Des Lumiere, LLUM Light Festival Barcelona and much more DC, Montreal, São Paulo, Seoul, Roma, Moscow, Prague, Brussels, Hong Kong, Jakarta, Scotland, Singapore, Las Vegas, London, Barcelona, Berlin, etc... for too many festivals and institutes such as Ars Electronica, Cern, Nasa, Google, Signal, iMapp, Mutek, Melbourne Light Festival, Singapore Art and Science Museum, Frost Miami Science Museum, SAT Société des arts technologiques Montreal, Canada National Space Center UK, American Indian Arts, Atelier Des Lumiere, LLUM Light Festival Barcelona and much more public  art projects for every continent such as Tokyo, New York, LA, Mexico, Seattle, Chicago, Miami, Abu Dhabi, Milano, Paris, Melbourne, Shanghai, Beijing, Washington DC, Montreal, São Paulo, Seoul, Roma, Moscow, Prague, Brussels, Hong Kong, Jakarta, Scotland, Singapore, Las Vegas, London, Barcelona, Berlin, etc... for too many festivals and institutes such as Ars Electronica, Cern, Nasa, Google, Signal, iMapp, Mutek, Melbourne Light Festival, Singapore Art and Science Museum, Frost Miami Science Museum, SAT Société des arts technologiques  Montreal, Canada National Space Center UK, American Indian Arts, Atelier Des Lumiere, LLUM Light Festival Barcelona and much more
          </p>
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
            src="/phone.jpg"
            alt="Laptop View"
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
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>
          ⬅ Back to Home
        </Link>
      </section>
    </div>
  );
}
