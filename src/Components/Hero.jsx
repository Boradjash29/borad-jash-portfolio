import { useState } from "react";

function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-name">Jash Borad</span>
        </h1>
        <h4 className="hero-label">Computer Science Engineering Student</h4>
        <p className="hero-description">
          Full Stack Developer | ROS Lead at GCET Team Robocon | B.Tech CSE Student
        </p>
        <p className="hero-subtitle">
          Passionate about Full Stack Web Development, Robotics, Cloud Computing, and Machine Learning.
          Currently pursuing B.Tech with <span className="highlight">9.34 CGPA</span> at G.H Patel College of Engineering & Technology, Anand.
        </p>
        <div className="hero-actions">
          <a href="/documents/Jash_Borad_Resume.pdf" download className="btn-primary">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{marginRight: '8px'}}>
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            Download Resume
          </a>
          <a href="#contact" className="btn-secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
