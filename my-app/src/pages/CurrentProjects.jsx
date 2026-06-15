import "./CompletedProjects.css";
import { currentProjects } from "../data/projects";

function CurrentProjects() {
  return (
    <div className="projects-page">

      {/* HERO */}
      <section className="projects-hero">
        <h1>Current Projects</h1>
        <p>Projects we are currently working on</p>
      </section>

      {/* PROJECT GRID */}
      <section className="projects-container">
        {currentProjects.map((project) => (
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

              <span className="status ongoing">In Progress</span>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
}

export default CurrentProjects;