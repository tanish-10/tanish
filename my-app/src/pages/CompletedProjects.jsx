import "./CompletedProjects.css";
import { completedProjects } from "../data/projects";

function CompletedProjects() {
  return (
    <div className="projects-page">

      {/* HERO */}
      <section className="projects-hero">
        <h1>Completed Projects</h1>
        <p>Our work across Siliguri & Sikkim</p>
      </section>

      {/* PROJECT GRID */}
      <section className="projects-container">
        {completedProjects.map((project) => (
          <div className="project-card" key={project.id}>

            {/* IMAGE */}
            <div className="project-img">
              <img
                src={project.img}
                alt={project.name}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/400x300?text=Project+Image")
                }
              />
            </div>

            {/* INFO */}
            <div className="project-info">
              <h3>{project.name}</h3>
              <p className="location">{project.location}</p>
              <p>{project.desc}</p>

              <span className="status completed">Completed</span>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
}

export default CompletedProjects;