import { useEffect, useState } from "react";
import "./GitHubProjects.css";
import { FaGithub } from "react-icons/fa6";

const token = import.meta.env.VITE_GITHUB_TOKEN;
const apiUrl = import.meta.env.VITE_API_URL;

function GitHubProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [projectDetails, setProjectDetails] = useState({});
  const [visibleProjectId, setVisibleProjectId] = useState(null);

  const handleToggleDetails = async (project) => {
    // Si el proyecto ya está visible, ocultar detalles
    if (visibleProjectId === project.id) {
      setVisibleProjectId(null);
      return;
    }

    // Si no está en cache, cargar los detalles
    if (!projectDetails[project.id]) {
      try {
        const detailsResponse = await fetch(project.url, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        const details = await detailsResponse.json();

        const languagesResponse = await fetch(details.languages_url, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        const languages = await languagesResponse.json();

        // Guardar los detalles en el estado
        setProjectDetails((prevDetails) => ({
          ...prevDetails,
          [project.id]: {
            description: details.description || "Sin descripción disponible",
            languages: Object.keys(languages),
          },
        }));
      } catch (error) {
        console.error("Error al cargar detalles del proyecto:", error);
        return;
      }
    }

    // Mostrar los detalles del proyecto actual
    setVisibleProjectId(project.id);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        const data = await response.json();

        const projects = data.map((project) => ({
          id: project.id,
          name: project.name,
          url: project.url,
          html_url: project.html_url,
        }));

        setProjects(projects);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al obtener los proyectos");
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-container">
      <h2>Mis Proyectos de Github</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <button onClick={() => handleToggleDetails(project)}>
              {visibleProjectId === project.id
                ? "Ocultar Detalles"
                : "Ver Detalles"}
            </button>
            {/* Mostrar detalles si está visible */}
            {visibleProjectId === project.id && projectDetails[project.id] && (
              <div className="project-details">
                <p>
                  <strong>Tecnologías:</strong>{" "}
                  {projectDetails[project.id].languages.join(" - ")}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GitHubProjects;
