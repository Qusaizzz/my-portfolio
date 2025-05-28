import { Link } from 'react-router-dom';

export default function Project2() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh' }}>
      
      {/* Hero Split Section */}
      <section style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        gap: '2rem',
        minHeight: '80vh'
      }}>
        {/* Media */}
        <div style={{ flex: '1 1 400px' }}>
          <img
            src="/project2-preview.jpg"
            alt="Project 2 Preview"
            style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '0' }}
          />
        </div>

        {/* Text Details */}
        <div style={{ flex: '1 1 400px', maxWidth: '500px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Augmented Forest</h1>
          <p><strong>Role:</strong> Creative Technologist</p>
          <p><strong>Tools:</strong> Unity, ARKit, Illustrator</p>
          <p style={{ marginTop: '1.5rem', lineHeight: '1.6' }}>
            Project 2 is an augmented reality experience that brings digital plant life into physical spaces through projection and mobile AR.
          </p>
        </div>
      </section>

      {/* Full-width Media */}
      <section style={{
        width: '100%',
        padding: '2rem 0',
        textAlign: 'center'
      }}>
        <img
          src="/project2-process.jpg"
          alt="Project 2 process"
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
        />
      </section>

      {/* Description */}
      <section style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        lineHeight: '1.7',
        fontSize: '1.1rem'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Concept & Process</h2>
        <p>
          The project explores digital ecology and how audiences can interact with growing environments. Using projection mapping and mobile AR, we recreated a digital ecosystem that evolves with user presence.
        </p>
        <p style={{ marginTop: '1rem' }}>
          The design process involved motion studies, generative graphics, and spatial narrative experiments to create a layered user journey.
        </p>
      </section>

      {/* Navigation */}
      <section style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2rem 4rem',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <Link to="/project1" style={{ color: 'white', textDecoration: 'none' }}>
          ⬅ Back to Project 1
        </Link>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Home ⬆
        </Link>
      </section>
    </div>
  );
}
