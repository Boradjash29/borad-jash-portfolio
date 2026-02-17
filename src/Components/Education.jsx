function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      
      <div className="education-timeline">
        <div className="education-item">
          <div className="education-header">
            <h3>B.Tech in Computer Science and Engineering</h3>
            <span className="education-year">2023 – 2027</span>
          </div>
          <p className="education-institute">G.H Patel College of Engineering & Technology, Anand</p>
          <p className="education-grade">CGPA: 9.34</p>
        </div>

        <div className="education-item">
          <div className="education-header">
            <h3>Senior Secondary (12th)</h3>
            <span className="education-year">2023</span>
          </div>
          <p className="education-institute">AshaDeep International School, Surat (GSEB)</p>
          <p className="education-grade">Percentage: 72%</p>
        </div>

        <div className="education-item">
          <div className="education-header">
            <h3>Secondary (10th)</h3>
            <span className="education-year">2021</span>
          </div>
          <p className="education-institute">J.B. & KARP Vidya Sankul, Surat (GSEB)</p>
          <p className="education-grade">Percentage: 79%</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
