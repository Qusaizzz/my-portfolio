// src/components/About.jsx

export default function About() {
  return (
    <section style={{
      minHeight: '60vh',
      backgroundColor: '#0a0a0a',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 2rem'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '1000px'
      }}>
        {/* PNG on the left */}
        <img
          src="/me.png"
          alt="Naya portrait"
          style={{
            width: '400px',
            height: '320px',
            objectFit: 'cover',
            borderRadius: '0px',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)'
          }}
        />

        {/* Text block on the right and overlapping slightly */}
        <div style={{
          backgroundColor: '#0a0a0a',
          padding: '1.5rem',
          maxWidth: '600px',
          marginLeft: '-110px',
          zIndex: 2,
          position: 'relative'
        }}>
          <p style={{ fontSize: '1rem', lineHeight: '1.9', textAlign: 'left' }}>
            Hi, I'm Qussai – a designer and immersive experience creator based in Germany. I specialize in spatial UX/UI, interactive 3D environments, and real-time design. I love crafting digital spaces that evoke emotion, reflection, and delight. I'm currently studying a Master's in Design and Interaction at Hochschule Rhein-Waal and working as a working student in digital content and experience at GROHE.
          </p>
        </div>
      </div>
    </section>
  );
}
