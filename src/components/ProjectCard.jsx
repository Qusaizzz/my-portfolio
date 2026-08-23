import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ title, subtitle, link, imageSrc, videoSrc }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // reset video
    }
  };

  const handleClick = (e) => {
    // Prevent full page reload, use SPA navigation instead
    e.preventDefault();
    if (link) {
      navigate(link);
    }
  };

  return (
    <a
      href={link}               // <-- real URL for right-click "open in new tab"
      onClick={handleClick}     // <-- SPA navigation for left click
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        cursor: 'pointer',
        width: 'calc(33.333% - 1.5rem)',
        textDecoration: 'none',
        color: 'inherit',
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
            pointerEvents: 'none',   // ⭐ important: no right-click menu on video
          }}
        />
      </div>

      {/* Title & Subtitle Below */}
      <div style={{ marginTop: '0.6rem', textAlign: 'left' }}>
        <div style={{ fontSize: '1.3rem', color: 'white', fontWeight: '400', marginTop: '0.4rem' }}>{title}</div>
        <div style={{ color: '#898989ff', fontSize: '1.1rem', marginTop: '0.3rem'  }}>{subtitle}</div>
      </div>
    </a>
  );
}
