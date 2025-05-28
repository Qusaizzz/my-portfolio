import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '40px',                 // ⬅️ Bigger
        height: '40px',
        border: '2px solid white',     // ⬅️ Outline only
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'difference',    // ⬅️ Makes it visible on dark/light
        zIndex: 9999,
        transition: 'transform 0.05s ease-out', // smooth motion
      }}
    />
  );
}
