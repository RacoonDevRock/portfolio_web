import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import "./App.css";
import logo from "./assets/logo.png";
import javaIcon from "./assets/java.svg";
import javascriptIcon from "./assets/javascript.svg";
import pythonIcon from "./assets/python.webp";
import kotlinIcon from "./assets/kotlin.svg";
import springIcon from "./assets/spring.svg";
import angularIcon from "./assets/angular.svg";
import androidIcon from "./assets/android-studio-icon.webp";
import nodeIcon from "./assets/node-js.svg";
import dockerIcon from "./assets/docker.svg";
import terraformIcon from "./assets/terraform.svg";
import firebaseIcon from "./assets/firebase.svg";
import GitHubProjects from "./components/github/GitHubProjects";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <>
      <div className="container">
        {/* HEADER STICKY */}
        <div className="header">
          <div className="logo">
            <img
              src={logo}
              alt="Logo de tu portafolio"
              className="logo-image"
            />

            {/* ICONOS DE CONTACTO */}
            <div className="contact-icons">
              <a
                href="https://github.com/RacoonDevRock"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/guillermo-sanchez-palacios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </a>
              <a
                href="mailto:nothicc04@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="icon" />
              </a>
            </div>
          </div>

          <div className="header-text">
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "¡Bienvenido!",
                    "Me llamo Guillermo",
                    "Un gusto tenerte aquí =)",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "_",
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </h1>
            <p>
              <strong>A.K.A RacoonDevRock</strong>
            </p>
          </div>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="technologies">
          <h2>Tecnologías</h2>
          <div className="tech-slider">
            <div className="tech-track">
              <img src={javaIcon} alt="Java" />
              <img src={springIcon} alt="Spring Boot" />
              <img src={kotlinIcon} alt="Kotlin" />
              <img src={androidIcon} alt="Android Studio" />
              <img src={javascriptIcon} alt="JavaScript" />
              <img src={angularIcon} alt="Angular" />
              <img src={nodeIcon} alt="NodeJS" />
              <img src={pythonIcon} alt="Python" />
              <img src={dockerIcon} alt="Docker" />
              <img src={terraformIcon} alt="Terraform" />
              <img src={firebaseIcon} alt="Firebase" />
            </div>
          </div>
        </div>

        {/* Columna 2: proyectos */}
        <GitHubProjects />
      </div>
    </>
  );
}

export default App;
