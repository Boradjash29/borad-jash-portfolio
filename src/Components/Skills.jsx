function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <div className="skill-tags">
            <span className="skill-tag">C</span>
            <span className="skill-tag">C++</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">SQL</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Frameworks & Libraries</h3>
          <div className="skill-tags">
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express.js</span>
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Django</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Databases</h3>
          <div className="skill-tags">
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">PostgreSQL</span>
            <span className="skill-tag">SQLite</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Developer Tools</h3>
          <div className="skill-tags">
            <span className="skill-tag">Git</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">VS Code</span>
            <span className="skill-tag">Postman</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Robotics & Systems</h3>
          <div className="skill-tags">
            <span className="skill-tag">ROS2</span>
            <span className="skill-tag">TF2</span>
            <span className="skill-tag">Navigation2</span>
            <span className="skill-tag">Visual Odometry</span>
            <span className="skill-tag">Linux</span>
            <span className="skill-tag">Jetson Orin Nano</span>
            <span className="skill-tag">Raspberry Pi</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Areas of Interest</h3>
          <div className="skill-tags">
            <span className="skill-tag">Full Stack Development</span>
            <span className="skill-tag">Cloud Computing</span>
            <span className="skill-tag">System Design</span>
            <span className="skill-tag">Machine Learning</span>
            <span className="skill-tag">Big Data Analysis</span>
          </div>
        </div>
      </div>

      <div className="certifications">
        <h3>Certifications</h3>
        <ul>
          <li><strong>Introduction to Internet of Things</strong> (Gold + Elite) - NPTEL (May 2025)</li>
          <li><strong>Mastering Linux</strong> - Udemy (Mar 2025)</li>
          <li><strong>SQL (Basic)</strong> - HackerRank (Oct 2024)</li>
          <li><strong>Programming in C</strong> - Red & White Skill Education (Jul 2023)</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
