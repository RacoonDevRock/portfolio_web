import { useEffect, useState } from "react";
import "./GitHubProjects.css";
import githubIcon from "../../assets/github.svg";

const apiUrl = import.meta.env.VITE_API_URL_BACKEND;

function GitHubProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [projectDetails, setProjectDetails] = useState({});
  const [visibleProjectId, setVisibleProjectId] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState({});

  const handleToggleDetails = async (project) => {
    if (visibleProjectId === project.id) {
      setVisibleProjectId(null);
      return;
    }

    if (projectDetails[project.id]) {
      setVisibleProjectId(project.id);
      return;
    }

    setLoadingDetails((prevLoading) => ({
      ...prevLoading,
      [project.id]: true,
    }));

    try {
      const detailsResponse = await fetch(`${apiUrl}/${project.name}`);
      const details = await detailsResponse.json();

      setProjectDetails((prevDetails) => ({
        ...prevDetails,
        [project.id]: details,
      }));

      setVisibleProjectId(project.id);
    } catch (error) {
      console.error("Error al cargar detalles del proyecto:", error);
    } finally {
      setLoadingDetails((prevLoading) => ({
        ...prevLoading,
        [project.id]: false,
      }));
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const projects = data.map((project) => ({
          id: project.id,
          name: project.name,
          description: project.description,
          language: project.language,
          html_url: project.html_url,
        }));

        setProjects(projects);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al obtener los proyectos:", error);
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
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="header-card">
              <h3>{project.name}</h3>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.name}
                title={project.name}
              >
                <img src={githubIcon} alt="Github" className="icon" />
              </a>
            </div>

            <p> {project.description || "No hay descripcion"} </p>
            <button onClick={() => handleToggleDetails(project)}>
              {visibleProjectId === project.id
                ? "Ocultar Detalles"
                : "Ver Detalles"}
            </button>
            {/* Mostrar detalles si está visible */}
            {visibleProjectId === project.id && (
              <div className="project-details">
                {loadingDetails[project.id] ? (
                  <p>Cargando detalles...</p>
                ) : (
                  projectDetails[project.id] && (
                    <p>
                      <strong>Tecnologías:</strong>{" "}
                      {projectDetails[project.id].languages.length > 0
                        ? projectDetails[project.id].languages.join(", ")
                        : "No especificado"}
                    </p>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GitHubProjects;
