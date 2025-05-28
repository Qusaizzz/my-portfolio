import { useRef, useState } from 'react';

export default function ProjectCard({ title, subtitle, onClick, imageSrc, videoSrc }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    videoRef.current?.pause();
    videoRef.current.currentTime = 0; // reset video
  };

  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        cursor: 'pointer',
        width: 'calc(33.333% - 1.5rem)',
      }}
    >
      {/* Rectangle with image + video on hover */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '3 / 2',
          overflow: 'hidden',
          backgroundColor: '#1a1a1a',
        }}
      >
        {/* Image (visible when not hovered) */}
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: hovered ? 'none' : 'block',
            transition: 'opacity 0.3s ease',
          }}
        />

        {/* Video (plays on hover) */}
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: hovered ? 'block' : 'none',
          }}
        />
      </div>

      {/* Title & Subtitle Below */}
      <div style={{ marginTop: '0.6rem', textAlign: 'left' }}>
        <div style={{ color: 'white', fontWeight: '500' }}>{title}</div>
        <div style={{ color: '#aaa', fontSize: '0.9rem' }}>{subtitle}</div>
      </div>
    </div>
  );
}
