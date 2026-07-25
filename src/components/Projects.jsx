import React from 'react';

export const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">PORTFOLIO SHOWCASE</span>
          <h2 className="section-title">Featured <span>Projects</span></h2>
        </div>

        <div className="projects-grid">
          
          {/* Project 1: LUNA */}
          <div className="glass-card project-card">
            <div className="project-media">
              <svg className="project-svg-bg" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="150" fill="#0f172a"/>
                <circle cx="150" cy="75" r="50" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4"/>
                <path d="M100 75 Q 125 35, 150 75 T 200 75" stroke="#06b6d4" strokeWidth="3" fill="none"/>
                <circle cx="150" cy="75" r="8" fill="#60a5fa"/>
              </svg>
            </div>
            <div className="project-body">
              <div>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">TensorFlow</span>
                  <span className="tag">OpenCV</span>
                  <span className="tag">Librosa</span>
                  <span className="tag">Multi-Modal AI</span>
                </div>
                <h3 className="project-title">L.U.N.A. — AI Multi-Modal Lung Disease Detection</h3>
                <p className="project-desc">
                  Multi-modal deep learning platform combining chest X-ray scans (ResNet50 CNN) with acoustic stethoscopic sound spectrograms for rapid diagnostic triage.
                </p>
                <ul className="project-features-list">
                  <li>94.2% diagnostic accuracy on validation radiology datasets.</li>
                  <li>Grad-CAM visual heatmaps for lesion interpretability.</li>
                  <li>Mel-Spectrogram audio feature extraction via Librosa.</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="https://github.com/vasanthakumar2005" target="_blank" rel="noreferrer" className="btn btn-secondary btn-project">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  Codebase
                </a>
                <a href="portfolio_document.html#luna" target="_blank" rel="noreferrer" className="btn btn-doc btn-project">
                  Architecture Specs
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: MCET Document Portal */}
          <div className="glass-card project-card">
            <div className="project-media">
              <svg className="project-svg-bg" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="150" fill="#0f172a"/>
                <rect x="70" y="30" width="160" height="90" rx="8" stroke="#3b82f6" strokeWidth="2" fill="rgba(30,41,59,0.5)"/>
                <line x1="90" y1="55" x2="210" y2="55" stroke="#60a5fa" strokeWidth="3"/>
                <line x1="90" y1="75" x2="170" y2="75" stroke="#94a3b8" strokeWidth="2"/>
                <line x1="90" y1="95" x2="190" y2="95" stroke="#94a3b8" strokeWidth="2"/>
              </svg>
            </div>
            <div className="project-body">
              <div>
                <div className="project-tags">
                  <span className="tag">HTML5/CSS3</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">MySQL</span>
                  <span className="tag">RBAC Auth</span>
                </div>
                <h3 className="project-title">MCET Document Management Portal</h3>
                <p className="project-desc">
                  Centralized, high-security web portal built for Dr. Mahalingam College of Engineering & Technology (Guided by Dr. Arun Madhavan, Feb 2026).
                </p>
                <ul className="project-features-list">
                  <li>Role-Based Access Control (Students, Faculty, Admin).</li>
                  <li>Encrypted PDF document preview & upload pipeline.</li>
                  <li>Reduced institutional document retrieval time by 70%.</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="https://github.com/vasanthakumar2005" target="_blank" rel="noreferrer" className="btn btn-secondary btn-project">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  Codebase
                </a>
                <a href="portfolio_document.html#mcet" target="_blank" rel="noreferrer" className="btn btn-doc btn-project">
                  System Workflow
                </a>
              </div>
            </div>
          </div>

          {/* Project 3: Market Mapping Dashboard */}
          <div className="glass-card project-card">
            <div className="project-media">
              <svg className="project-svg-bg" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="150" fill="#0f172a"/>
                <rect x="50" y="90" width="30" height="40" fill="#3b82f6" rx="4"/>
                <rect x="100" y="60" width="30" height="70" fill="#06b6d4" rx="4"/>
                <rect x="150" y="40" width="30" height="90" fill="#6366f1" rx="4"/>
                <rect x="200" y="75" width="30" height="55" fill="#10b981" rx="4"/>
              </svg>
            </div>
            <div className="project-body">
              <div>
                <div className="project-tags">
                  <span className="tag">Power BI</span>
                  <span className="tag">DAX Measures</span>
                  <span className="tag">Excel</span>
                  <span className="tag">Market Analytics</span>
                </div>
                <h3 className="project-title">Market Mapping for CCTV Sales</h3>
                <p className="project-desc">
                  Comprehensive geographic and sales intelligence dashboard evaluating competitor density and hardware sales across 100+ CCTV retail stores.
                </p>
                <ul className="project-features-list">
                  <li>Cleaned survey data from 100+ retail vendors.</li>
                  <li>DAX calculations for regional market share & price tiering.</li>
                  <li>Directly optimized client marketing & distribution routes.</li>
                </ul>
              </div>
              <div className="project-links">
                <a href="portfolio_document.html#market" target="_blank" rel="noreferrer" className="btn btn-doc btn-project" style={{ width: '100%', textAlign: 'center' }}>
                  View Power BI Dashboard Report
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
