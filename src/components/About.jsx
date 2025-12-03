// src/components/About.jsx

export default function About() {
  return (
    <section
      id="about"   /* ⭐ Added ID here */
      style={{
        minHeight: '60vh',
        backgroundColor: '#0a0a0a',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 2rem 12rem 2rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '1000px'
        }}
      >
        {/* PNG on the left */}
        <img
          src="/profile.png"
          alt="Qussai portrait"
          style={{
            width: '400px',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '0px',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)'
          }}
        />

        {/* Text block */}
        <div
          style={{
            backgroundColor: '#0a0a0a',
            padding: '1.5rem',
            maxWidth: '600px',
            marginLeft: '-110px',
            zIndex: 2,
            position: 'relative'
          }}
        >
          <p style={{ fontSize: '1rem', lineHeight: '1.9', textAlign: 'left' }}>
            Hi, I'm Qussai – a designer and immersive experience creator based in Germany. My works focus on spatial storytelling, interactive 3D environments, and real-time design. I love creating digital experiences that evoke emotion, reflection, and delight. I’m currently pursuing a Master’s in Design & Interaction at Hochschule Rhein-Waal and working as a Working Student in Digital Content & Experience at GROHE.
          </p>
        </div>
      </div>
    </section>
  );
}
