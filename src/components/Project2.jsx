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
          <h1 style={{ fontSize: '3.6rem', marginBottom: '0.5rem' }}>'Götterfunken - Europa als Aufgabe' AR Storytelling</h1>
          <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Role: Master's Student - Design and Interaction</p>
          <p style={{ fontSize: '0.8rem', color: '#aaa' }}>Tools: Unity, 3ds Max, MeshLab</p>
        </div>

        {/* Paragraph next to Title */}
        <div style={{ maxWidth: '600px', color: 'white', lineHeight: '2', marginTop: 0 }}>
          <p style={{ fontSize: '0.8rem', marginTop: '3.6rem' }}>
            Symbols serve as powerful signs that connect us to values, beliefs, and cultural identities. This project was part of the exhibition 'Götterfunken - Europa als Aufgabe', organized by Hochschule Rhein-Waal and Schirrhof Kamp-Lintfort, aimed at showcasing the cultural identity of Kamp-Lintfort. My role was to bring the architectural element Kanzel to life, visually presenting it in the exhibition. I conducted a 3D scan of the original element, using the point cloud data to create an AR experience. This experience features a particle system that visually narrates the story of the Kanzel, blending history and technology.
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
    src="/ARex.mp4"
    muted={false}
    loop={false}
    poster="ARexpi.jpg"
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
            The Kanzel, built in the early 18th century, features symbolic representations of the four evangelists: angel, lion, bull, and eagle. Matthew is depicted as a winged man, symbolizing the gospel's focus on human birth. Mark is a winged lion, reflecting the Baptist’s call in the desert. Luke is represented by a winged bull, referencing Zechariah’s sacrificial service. John is shown as an eagle. This project focused on presenting the original architectur element and highlighting these four symbols, bringing them to life through an interactive AR storytelling. The original Kanzel was scanned, and the point cloud data was converted into a mesh. The lowpoly of the four symbols were animated in 3ds Max, and the final augmented reality experience was created in Unity, with a particle system used to visually narrate the story of the Kanzel, blending historical symbolism with visual storytelling.
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
            src="/3dimg.jpg"
            alt="3D process"
            style={{
              maxWidth: '1200px',
              width: '100%',
              height: 'auto',
            }}
          />
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
      src="3d1.mp4" // Replace with the actual path to the first video
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
      src="3d2.mp4" // Replace with the actual path to the second video
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
          <h1 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: '300' }}>Exhibition</h1>
        </div>

        {/* Paragraph next to Title */}
        <div style={{ maxWidth: '900px', color: 'white', lineHeight: '2', marginTop: 0 }}>
          <p style={{ fontSize: '0.8rem', marginTop: '1.5rem' }}>
            The exhibition was a collaboration between Hochschule Rhein-Waal and Schirrhof Kamp-Lintfort. Paper images with symbols and the names of the elements were used as image trackers, enabling visitors to access the augmented reality experience.
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
    src="/exi.mp4"
    muted={false}
    loop={false}
    poster="exi1.jpg"
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
