import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleImage() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div style={{ position: 'relative', width: 400, height: 320 }}>
      {/* 🎞 Your visible image */}
      <img
        src="/me.png"
        alt="Naya"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          borderRadius: '0px',
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.05)',
          position: 'relative',
          zIndex: 1
        }}
      />

      {/* 🎇 Particle interaction layer */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2, // on top of image
        }}
      >
        <Particles
          id="tsparticles-hover"
          init={particlesInit}
          options={{
            fullScreen: false,
            background: {
              color: "transparent"
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse"
                },
                resize: true
              },
              modes: {
                repulse: {
                  distance: 80,
                  duration: 0.4
                }
              }
            },
            particles: {
              number: {
                value: 40,
                density: {
                  enable: true,
                  area: 400
                }
              },
              color: {
                value: "#ffffff"
              },
              shape: {
                type: "circle"
              },
              opacity: {
                value: 0.6
              },
              size: {
                value: 2,
                random: true
              },
              move: {
                enable: true,
                speed: 0.4,
                direction: "none",
                outModes: {
                  default: "out"
                }
              }
            },
            detectRetina: true
          }}
        />
      </div>
    </div>
  );
}
