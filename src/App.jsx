import "./App.css";
import logo from "./assets/logo.webp";
import javaIcon from "./assets/java.svg";
import javascriptIcon from "./assets/javascript.svg";
import kotlinIcon from "./assets/kotlin.svg";
import springIcon from "./assets/spring.svg";
import angularIcon from "./assets/angular.svg";
import androidIcon from "./assets/android.svg";
import nodeIcon from "./assets/node-js.svg";
import dockerIcon from "./assets/docker.svg";
import terraformIcon from "./assets/terraform.svg";
import firebaseIcon from "./assets/firebase.svg";
import linkedinIcon from "./assets/linkedin.svg";
import gmailIcon from "./assets/gmail.svg";
import GitHubProjects from "./components/github/GitHubProjects";
import Typewriter from "typewriter-effect";
import cvIcon from "./assets/resume.svg";
import cvFile from "./assets/CV_SANCHEZ_PALACIOS_LUIS_GUILLERMO.pdf";
import githubIcon from "./assets/github.svg";
import NeonBackground from "./components/background/NeonBackground";

function App() {
  return (
    <>
      <NeonBackground />
      <div className="container">
        {/* HEADER STICKY */}
        <div className="header">
          <div className="logo">
            <img
              src={logo}
              alt="Logo de tu portafolio"
              className="logo-image"
              width="200px"
              height="200px"
            />

            {/* ICONOS DE CONTACTO */}
            <div className="contact-icons">
              <a
                href="https://github.com/RacoonDevRock"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visita mi perfil de GitHub"
                title="GitHub"
              >
                <img src={githubIcon} alt="Github" className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/guillermo-sanchez-palacios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visita mi perfil de LinkedIn"
                title="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="icon" />
              </a>
              <a
                href="mailto:nothicc04@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Envíame un correo electrónico"
                title="Correo Electrónico"
              >
                <img src={gmailIcon} alt="Gmail" className="icon" />
              </a>
              <a
                href={cvFile}
                download="CV_SANCHEZ_PALACIOS_LUIS_GUILLERMO"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar mi currículum en PDF"
                title="Descargar CV"
              >
                <img src={cvIcon} alt="CV" className="icon" />
                {/* <TbFileCv className="icon" /> */}
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
