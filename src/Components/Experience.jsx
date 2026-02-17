function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      
      <div className="experience-list">
        <div className="experience-item">
          <div className="experience-header">
            <div>
              <h3>Python Developer Trainee</h3>
              <p className="company">BrainyBeam Technologies Pvt. Ltd.</p>
            </div>
            <div className="experience-meta">
              <span className="duration">May 2025 – Jun 2025</span>
              <span className="location">Remote</span>
            </div>
          </div>
          <ul className="experience-details">
            <li>Completed a structured 30-day internship focused on Python and Django backend development.</li>
            <li>Worked with Django MVT architecture, ORM, authentication, and relational database integration.</li>
            <li>Developed CustomerPlus, a customer management portal with full CRUD functionality and relational models using Django ORM.</li>
            <li>Implemented reusable backend modules and applied scalable application design principles.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <div>
              <h3>ROS Lead</h3>
              <p className="company">GCET Team Robocon</p>
            </div>
            <div className="experience-meta">
              <span className="duration">Jan 2024 – Present</span>
              <span className="location">ABU Robocon 2025 & 2026</span>
            </div>
          </div>
          <ul className="experience-details">
            <li>Led ROS development for ABU Robocon 2025 and currently serving as ROS Lead for Robocon 2026.</li>
            <li>Secured institutional grants of Rs. 6,05,000 (2025) and Rs. 7,00,000 (2026) from Charutar Vidya Mandal for the robotics team.</li>
            <li>Designed and developed an omni-directional drive robot controller using ROS2, TF2, and Navigation2 frameworks.</li>
            <li>Implemented Visual Odometry and the autonomous Navigation2 stack for real-time robot localization and path planning.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
