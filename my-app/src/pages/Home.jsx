import { Link } from "react-router-dom";
import "./Home.css";

// DATA
import { completedProjects, currentProjects } from "../data/projects";
import { servicesData } from "../data/services";

// LOGO
import logo from "../data/img/tanish .png";

function Home() {
  return (
    <div className="home">

      {/* HERO / BRAND SECTION */}
      <header className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <img src={logo} alt="Tanish Daikin Logo" className="hero-logo" />

          <h1>Tanish Daikin ❄️</h1>
          <p className="subtitle">
            Authorized Daikin Dealer | Premium Cooling Solutions
          </p>

          <p className="location">
            Siliguri • Sikkim • Guwahati
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="btn primary">Explore Products</Link>
            <Link to="/contact" className="btn secondary">Get Free Quote</Link>
          </div>

        </div>
      </header>

      {/* SERVICES */}
      <section className="section">
        <h2>Our Services</h2>

        <div className="grid services-grid">

          {servicesData.slice(0, 6).map((service) => (
            <div className="card service-card" key={service.id}>

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

              <div className="card-body">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>

            </div>
          ))}

        </div>

        <div className="center">
          <Link to="/services" className="btn primary">
            View All Services
          </Link>
        </div>
      </section>

      {/* COMPLETED PROJECTS */}
      <section className="section dark">
        <h2>Completed Projects</h2>

        <div className="grid">

          {completedProjects.slice(0, 3).map((project) => (
            <div className="card project-card" key={project.id}>

              <img
                src={project.img}
                alt={project.name}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/400x300?text=Project")
                }
              />

              <div className="card-body">
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <span className="tag completed">Completed</span>
              </div>

            </div>
          ))}

        </div>

        <div className="center">
          <Link to="/completed" className="btn primary">
            View All Projects
          </Link>
        </div>
      </section>

      {/* ONGOING PROJECTS */}
      <section className="section">
        <h2>Ongoing Projects</h2>

        <div className="grid">

          {currentProjects.slice(0, 3).map((project) => (
            <div className="card project-card" key={project.id}>

              <img
                src={project.img}
                alt={project.name}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/400x300?text=Project")
                }
              />

              <div className="card-body">
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <span className="tag ongoing">Ongoing</span>
              </div>

            </div>
          ))}

        </div>

        <div className="center">
          <Link to="/current" className="btn primary">
            View All Ongoing
          </Link>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">

        <h2>Need Premium Cooling Solutions?</h2>
        <p>Get expert consultation & fast installation support today.</p>

        <Link to="/contact" className="btn glow">
          Contact Now
        </Link>

      </section>

    </div>
  );
}

export default Home;