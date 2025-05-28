import { Link } from 'react-router-dom';

export default function Project1() {
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
        {/* Media (Image/Video) */}
        <div style={{ flex: '1 1 400px' }}>
          <img
            src="/project1-preview.jpg"
            alt="Project 1 Preview"
            style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '0' }}
          />
        </div>

        {/* Text Details */}
        <div style={{ flex: '1 1 400px', maxWidth: '500px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Immersive Light Installation</h1>
          <p><strong>Role:</strong> Designer, Developer</p>
          <p><strong>Tools:</strong> TouchDesigner, Three.js, Ableton Live</p>
          <p style={{ marginTop: '1.5rem', lineHeight: '1.6' }}>
            This project explores interactive lighting in physical spaces using real-time visuals and sound. It was developed as a hybrid installation merging art and technology.
          </p>
        </div>
      </section>

      {/* Full-width Media Section */}
      <section style={{
        width: '100%',
        padding: '2rem 0',
        textAlign: 'center'
      }}>
        <img
          src="/project1-process.jpg"
          alt="Project 1 process"
          style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
        />
      </section>

      {/* Text Description */}
      <section style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        lineHeight: '1.7',
        fontSize: '1.1rem'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Concept & Process</h2>
        <p>
          The goal was to create a multisensory experience that responds to users' presence. Using Kinect and projection mapping, the installation reacts in real time to movement and sound, allowing for immersive storytelling.
        </p>
        <p style={{ marginTop: '1rem' }}>
          From concept sketches to software prototyping and spatial mapping, the development was iterative and focused on evoking emotion through motion and light.
        </p>
      </section>

      {/* Navigation */}
      <section style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2rem 4rem',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          ⬅ Back to Home
        </Link>
        <Link to="/project2" style={{ color: 'white', textDecoration: 'none' }}>
          Next Project ➡
        </Link>
      </section>
    </div>
  );
}
