import "./Services.css";
import { servicesData } from "../data/services";

function Services() {
  return (
    <div className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Premium cooling & HVAC solutions across Siliguri & Sikkim</p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-container">

        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>

            {/* IMAGE */}
            <div className="service-img">
              <img
                src={service.img}
                alt={service.title}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/400x250?text=Service")
                }
              />
            </div>

            {/* INFO */}
            <div className="service-info">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>

              <a href="/contact" className="btn">
                Get Service
              </a>
            </div>

          </div>
        ))}

      </section>

      {/* WHY US */}
      <section className="services-extra">
        <h2>Why Choose Tanish Daikin?</h2>

        <div className="features">
          <div>✔ Authorized Daikin Dealer</div>
          <div>✔ Experienced Technicians</div>
          <div>✔ Fast Response Time</div>
          <div>✔ Siliguri • Sikkim Coverage</div>
        </div>
      </section>

    </div>
  );
}

export default Services;