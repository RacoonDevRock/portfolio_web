import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        {/* LOGO Y TÍTULO EN FILA */}
        <div className="header">
          <div className="logo">
            <img
              src="/logo_portfolio_web.png"
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
              <img src="/java.svg" alt="Java" />
              <img src="/javascript.svg" alt="JavaScript" />
              <img src="/python.svg" alt="Python" />
              <img src="/kotlin.svg" alt="Kotlin" />
              <img src="/spring.svg" alt="Spring Boot" />
              <img src="/angular.svg" alt="Angular" />
              <img src="/android-studio-icon.webp" alt="Android Studio" />
              <img src="/node-js.svg" alt="NodeJS" />
            </div>
          </div>
        </div>
        {/* Columna 1: Tecnologías */}

        {/* Columna 2: Experiencia */}
        <div className="column">
          <h2>Experiencia</h2>
          <ul>
            <li>...</li>
          </ul>
        </div>

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
