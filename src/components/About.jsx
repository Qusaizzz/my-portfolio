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
            Hi, I'm Qussai – a designer and immersive experience creator based in Germany.
            I specialize in interactive 3D environments and real-time design using tools like TouchDesigner and Three.js.
            I love crafting digital spaces that evoke emotion, reflection, and delight.
          </p>
        </div>
      </div>
    </section>
  );
}
