import { Link } from 'react-router-dom';

export default function Project3() {
  return (
    <div style={{
      backgroundColor: '#000',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Project 3</h1>
      <p style={{
        fontSize: '1.2rem',
        maxWidth: '700px',
        textAlign: 'center',
        lineHeight: '1.8'
      }}>
        This is a showcase of Project 3. Add images, videos, descriptions, and results here.
      </p>
      <Link to="/" style={{
        marginTop: '2rem',
        fontSize: '1rem',
        color: 'white',
        textDecoration: 'underline'
      }}>
        ← Back to Home
      </Link>
    </div>
  );
}
