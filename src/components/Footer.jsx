export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0f0f0f',
        color: 'white',
        padding: '2rem',
        display: 'flex',
        alignItems: 'flex-end', // Align content to bottom
        height: '120px', // Adjust height as needed
        fontSize: '1rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          flexWrap: 'wrap'
        }}
      >
        {/* Left side - Email */}
        <div style={{ marginBottom: '3rem', marginLeft: '22px' }}>
          <a
            href="mailto:qusai.khadour7@gmail.com"
            style={{
              color: 'white',
              textDecoration: 'none'
            }}
          >
            qusai.khadour7@gmail.com
          </a>
        </div>

        {/* Right side - Social Links */}
        <div
          style={{
            display: 'flex',
            gap: '3rem',
            transform: 'translateX(-30px)', // Optional: shift to the left
            marginBottom: '0.9rem'
          }}
        >
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
      </div>
    </footer>
  );
}
