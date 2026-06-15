import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>About Tanish Daikin</h1>
          <p>Your trusted cooling partner in Siliguri & Sikkim</p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Tanish is a premium air conditioning solutions provider based in Siliguri,
          delivering residential and commercial HVAC systems across North Bengal and Sikkim.
          We focus on quality installation, energy efficiency, and long-term reliability.
        </p>
      </section>

      {/* FEATURES */}
      <section className="about-section light">
        <h2>Why Choose Us</h2>

        <div className="features">

          <div className="feature-box">
            <h3>Authorized Dealer</h3>
            <p>Genuine Daikin systems with full warranty support.</p>
          </div>

          <div className="feature-box">
            <h3>Expert Installation</h3>
            <p>Precision installation by trained HVAC professionals.</p>
          </div>

          <div className="feature-box">
            <h3>Fast Service</h3>
            <p>Quick response across Siliguri & Sikkim region.</p>
          </div>

          <div className="feature-box">
            <h3>End-to-End Solutions</h3>
            <p>From home AC to large VRV systems for commercial spaces.</p>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="about-section stats-section">
        <h2>Our Impact</h2>

        <div className="stats">

          <div className="stat-card">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="stat-card">
            <h3>30+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="stat-card">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h3>24/7</h3>
            <p>Support</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Need Cooling Solutions?</h2>
        <p>Get expert consultation and premium installation service today.</p>
        <a href="/contact" className="cta-btn">Contact Us</a>
      </section>

    </div>
  );
}

export default About;