export default function About() {
  return (
    <section id="about" className="about-section">
      <style>
        {`
        .about-section {
          min-height: 60vh;
          background-color: #0a0a0a;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 1.5rem 6rem;
        }

        .about-content {
          display: flex;
          flex-direction: column; /* mobile-first */
          align-items: center;
          justify-content: center;
          gap: 2rem;
          max-width: 1000px;
          width: 100%;
        }

        .about-image {
          width: min(260px, 70vw);   /* phones & small screens */
          height: auto;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 0;
          box-shadow: 0 0 20px rgba(255,255,255,0.05);
          display: block;
        }

        .about-text {
          background-color: #0a0a0a;
          padding: 1.5rem 0;
          max-width: 600px;
          text-align: center;
        }

        .about-text p {
          font-size: clamp(0.95rem, 1rem + 0.2vw, 1.05rem);
          line-height: 1.9;
          margin: 0;
          max-width: 60ch;
        }

        /* ⭐ Tablet & up */
        @media (min-width: 768px) {
          .about-section {
            padding: 4rem 2rem 8rem;
          }

          .about-content {
            flex-direction: row;
            align-items: center;
          }

          .about-image {
            width: min(340px, 40vw);  /* bigger on tablet/desktop */
          }

          .about-text {
            padding: 1.5rem;
            text-align: left;
          }
        }

        /* ⭐ Large desktop */
        @media (min-width: 1200px) {
          .about-image {
            width: 400px;             /* nice big portrait on big screens */
          }
        }
      `}
      </style>

      <div className="about-content">
        {/* Portrait */}
        <img
          src="/profile.png"
          alt="Qussai portrait"
          className="about-image"
        />

        {/* Text */}
        <div className="about-text">
          <p>
            Hi, I'm Qussai – a designer and immersive experience creator based in Germany.
            My work focuses on spatial storytelling, interactive 3D environments, and real-time design.
            I love creating digital experiences that evoke emotion, reflection, and delight.
            I’m currently pursuing a Master’s in Design & Interaction at Hochschule Rhein-Waal
            and working as a Working Student in Digital Content & Experience at GROHE.
          </p>
        </div>
      </div>
    </section>
  );
}
