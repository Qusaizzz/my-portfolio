import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section
      id="projects"   /* ⭐ ADDED ID */
      style={{
        backgroundColor: '#0a0a0a',
        padding: '0 2rem 4rem 2rem',
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
          title="Beach House – Web-Based Immersive Walkthrough (WebGL)"
          subtitle="Unity, 3dsMax, WebGL"
          imageSrc="/project4.jpg"
          videoSrc="/project4.mp4"
          link="/project4" 
        />

        <ProjectCard
          title="The Memory of Palmyra - Interactive Web Design"
          subtitle="WebGL, Interactive Particle System"
          imageSrc="/project5.jpg"
          videoSrc="/project5cover.mp4"
          link="/project5" 
        />

        <ProjectCard
          title="A Journey of Life’s Evolution - Interactive Installation"
          subtitle="Touchdesigner, Interactive Particle System"
          imageSrc="/project3.jpg"
          videoSrc="/project3.mp4"
          link="/project3" 
        />

        {/* Fourth Project starts on a new row */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '0.7rem',
            marginTop: '3rem',
            marginBottom: '3rem',
            gap: '1.5rem'
          }}
        >
          <ProjectCard
            title="'Götterfunken - Europa als Aufgabe' AR Storytelling"
            subtitle="Unity, 3ds Max, MeshLab"
            imageSrc="/projec2.jpg"
            videoSrc="/project2.mp4"
            link="/project2" 
          />

          <ProjectCard
            title="Inner Nature - A Bio-Driven Experience"
            subtitle="Touchdesigner, StreamDiffuaion, Muse 2, Brain Waves"
            imageSrc="/projec6.jpg"
            videoSrc="/intro.mp4"
            link="/project6" 
          />

          {/*
            <ProjectCard
              title="GROHE's 360 showrooms Web-Based AR Experience"
              subtitle="WebXR, Three.js, 3dsMax"
              imageSrc="/project1.jpg"
              videoSrc="/project1.mp4"
              onClick={() => navigate('/project1')}
            />
          */}
        </div>
      </div>
    </section>
  );
}
