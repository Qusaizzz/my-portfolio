import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        backgroundColor: '#0a0a0a',
        padding: '4rem 2rem',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      {/* Title Section */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2
          style={{
            fontSize: '2rem',
            margin: '0',
            fontWeight: '400',
            letterSpacing: '2px',
          }}
        >
          HIGHLIGHT PROJECTS
        </h2>
        <div
          style={{
            width: '100px',
            height: '1px',
            backgroundColor: 'white',
            margin: '0.7rem auto 0',
          }}
        />
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          padding: '0 1rem',
          justifyContent: 'center',
        }}
      >
        <ProjectCard
          title="GROHE's 360 showrooms Web-Based AR Experience"
          subtitle="WebXR, Three.js, 3dsMax"
          imageSrc="/project1.jpg"
          videoSrc="/project1.mp4"
          onClick={() => navigate('/project1')}
        />

        <ProjectCard
          title="'Götterfunken - Europa als Aufgabe' AR Storytelling"
          subtitle="Unity, 3ds Max, MeshLab"
          imageSrc="/projec2.jpg"
          videoSrc="/ARex.mp4"
          onClick={() => navigate('/project2')}
        />

        <ProjectCard
          title="A Journey of Life’s Evolution - Interactive Installation"
          subtitle="Touchdesigner, Interactive Particle System"
          imageSrc="/project33.jpg"
          videoSrc="/project3.mp4"
          onClick={() => navigate('/project3')}
        />
      </div>
    </section>
  );
}
