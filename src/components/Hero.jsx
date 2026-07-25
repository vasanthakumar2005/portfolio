import React, { useState, useEffect } from 'react';

export const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('');

  useEffect(() => {
    const words = [
      "AI & Data Science Student",
      "Final-Year B.Tech Student @ Dr. MCET",
      "Machine Learning Student",
      "AI-Powered Product Builder"
    ];

    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId;

    function type() {
      const currentWord = words[wordIdx];

      if (isDeleting) {
        setTypewriterText(currentWord.substring(0, charIdx - 1) + '|');
        charIdx--;
      } else {
        setTypewriterText(currentWord.substring(0, charIdx + 1) + '|');
        charIdx++;
      }

      let typeSpeed = isDeleting ? 35 : 75;

      if (!isDeleting && charIdx === currentWord.length) {
        typeSpeed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        typeSpeed = 400;
      }

      timeoutId = setTimeout(type, typeSpeed);
    }

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-pill">
            <span className="hero-pill-dot"></span>
            <span>Motivated B.Tech Student in AI & Data Science • Dr. MCET (CGPA 8.1/10)</span>
          </div>
          <h1 className="hero-title">
            Building <span>AI Products</span> That Solve Real Problems
          </h1>
          <div className="hero-typewriter" id="typewriter">
            {typewriterText}
          </div>
          <p className="hero-description">
            Final-year B.Tech student in Artificial Intelligence & Data Science at Dr. MCET (CGPA 8.1/10). Passionate about machine learning algorithms, statistical data analytics, and intelligent web applications.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              Explore Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-val">8.1</span>
              <span className="stat-label">Academic CGPA</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">3+</span>
              <span className="stat-label">AI & Web Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">2</span>
              <span className="stat-label">Industry Internships</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Profile Photo Frame */}
        <div className="hero-visual">
          <div className="hero-profile-frame">
            <div className="hero-profile-inner">
              <img
                src="assets/images/profile.png"
                alt="Vasanthakumar D - AI & Data Science Student"
                className="hero-profile-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='350' viewBox='0 0 300 350'><rect width='300' height='350' fill='%230b0f19'/><circle cx='150' cy='120' r='65' fill='%232563eb' opacity='0.8'/><path d='M50 310 C50 200, 250 200, 250 310 Z' fill='%231d4ed8' opacity='0.8'/><text x='150' y='128' font-size='36' font-weight='bold' fill='%23ffffff' text-anchor='middle'>VD</text></svg>";
                }}
              />
              <div className="hero-profile-badge">
                <div>
                  <div className="hero-profile-name">VASANTHAKUMAR D</div>
                  <div className="hero-profile-tag">B.Tech AI & DS Student</div>
                </div>
                <span
                  style={{
                    background: '#10b981',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    display: 'inline-block',
                    boxShadow: '0 0 10px #10b981'
                  }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
