import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import "./App.css";
import logo from "./assets/logo.png";
import javaIcon from "./assets/java.svg";
import javascriptIcon from "./assets/javascript.svg";
import pythonIcon from "./assets/python.svg";
import kotlinIcon from "./assets/kotlin.svg";
import springIcon from "./assets/spring.svg";
import angularIcon from "./assets/angular.svg";
import androidIcon from "./assets/android-studio-icon.webp";
import nodeIcon from "./assets/node-js.svg";
import GitHubProjects from "./components/GitHubProjects";

function App() {
  return (
    <>
      <div className="container">
        {/* LOGO Y TÍTULO EN FILA */}
        <div className="header">
          <div className="logo">
            <img
              src={logo}
              alt="Logo de tu portafolio"
              className="logo-image"
            />
          </div>
          <div className="header-text">
            <h1>¡Bienvenido!</h1>
            <p>
              Este es un punto de partida para mostrar mis habilidades y
              proyectos.
            </p>
          </div>
        </div>
        {/* Columna 1: Tecnologías */}
        <div className="technologies">
          <h2>Tecnologías</h2>
          <div className="tech-slider">
            <div className="tech-track">
              <img src={javaIcon} alt="Java" />
              <img src={javascriptIcon} alt="JavaScript" />
              <img src={pythonIcon} alt="Python" />
              <img src={kotlinIcon} alt="Kotlin" />
              <img src={springIcon} alt="Spring Boot" />
              <img src={angularIcon} alt="Angular" />
              <img src={androidIcon} alt="Android Studio" />
              <img src={nodeIcon} alt="NodeJS" />
            </div>
          </div>
        </div>
        {/* Columna 1: Tecnologías */}

        {/* Columna 2: Experiencia */}
        <GitHubProjects />

        {/* Datos del contacto */}
        <div className="contact">
          <h2>Contacto</h2>

          <div className="contact-icons">
            {/* Github */}
            <a
              href="https://github.com/RacoonDevRock"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>

            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/guillermo-sanchez-palacios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>

            {/* Mail */}
            <a
              href="mailto:nothicc04@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>
        {/* Datos del contacto */}
      </div>
    </>
  );
}

export default App;
