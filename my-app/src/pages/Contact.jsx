import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Fast AC Installation • Repair • Service Support</p>
        </div>
      </section>

      {/* CONTACT CARD */}
      <section className="contact-container">

        {/* INFO */}
        <div className="contact-card">

          <h2>Get In Touch</h2>

          <div className="info-item">
            <h3>📍 Location</h3>
            <p>PBR Tower, Siliguri, West Bengal</p>
          </div>

          <div className="info-item">
            <h3>📞 Phone</h3>
            <p>
              <a href="tel:9800079000">9800079000</a>
            </p>
          </div>

          <div className="info-item">
            <h3>🛠 Service Area</h3>
            <p>Siliguri • Sikkim • North Bengal</p>
          </div>

          {/* ACTIONS */}
          <div className="contact-actions">

            <a href="tel:9800079000" className="btn primary">
              Call Now
            </a>

            <a
              href="https://wa.me/919800079000"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;