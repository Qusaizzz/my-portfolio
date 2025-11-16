// src/components/SideNav.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SECTIONS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
];

export default function SideNav() {
  const [active, setActive] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Smooth scroll helper with offset
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // --- custom offsets per section ---
    let offset = 0;

    // different offsets for desktop vs mobile, adjust as you like
    const isMobile = window.innerWidth < 768;

    if (id === "about") {
      offset = isMobile ? 60 : 170; // move a bit further down
    } else if (id === "projects") {
      offset = isMobile ? 40 : 80;
    } else if (id === "home") {
      offset = 0;
    }

    const elementY = el.getBoundingClientRect().top + window.pageYOffset;
    const targetY = elementY - offset;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  const handleClick = (id) => {
    if (location.pathname !== "/") {
      // If we're on a project page, go back home first,
      // then scroll to the desired section with offset
      navigate("/");
      setTimeout(() => {
        scrollToId(id);
      }, 150);
    } else {
      scrollToId(id);
    }
  };

  // Scrollspy – only active on the homepage
  useEffect(() => {
    // If we're not on "/", don't highlight anything
    if (location.pathname !== "/") {
      setActive(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4, // section is "active" when ~40% visible
      }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <nav className="side-nav">
      {SECTIONS.map((item) => (
        <button
          key={item.id}
          className={`side-nav-item ${
            active === item.id ? "active" : ""
          }`}
          onClick={() => handleClick(item.id)}
        >
          <span className="side-nav-label">{item.label}</span>
          <span className="side-nav-dot" />
        </button>
      ))}
    </nav>
  );
}
