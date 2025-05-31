export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0a0a0a',
      color: 'white',
      padding: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      fontSize: '1rem'
    }}>
      {/* Left side - Email */}
      <div style={{ marginBottom: '0.9rem' }}>
        <a href="mailto:qusai.khadour7@gmail.com" style={{
          color: 'white',
          textDecoration: 'none',
          fontWeight: '200'
        }}>
          qusai.khadour7@gmail.com
        </a>
      </div>

      {/* Right side - Social Links with shift */}
      <div style={{
        display: 'flex',
        gap: '3rem',
        transform: 'translateX(-20px)' // shift to the left
      }}>
        <a
          href="https://www.linkedin.com/in/qussai-khaddour/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          LinkedIn
        </a>
        <a
          href="https://www.artstation.com/qusaikhador"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          ArtStation
        </a>
        <a
          href="https://www.behance.net/qussaikhaddour"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Behance
        </a>
      </div>
    </footer>
  );
}
