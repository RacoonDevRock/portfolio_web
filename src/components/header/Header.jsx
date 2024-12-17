import "./Header.css";
import logo from "../../assets/logo.webp";
import linkedinIcon from "../../assets/linkedin.svg";
import gmailIcon from "../../assets/gmail.svg";
import Typewriter from "typewriter-effect";
import cvIcon from "../../assets/resume.svg";
import cvFile from "../../assets/CV_SANCHEZ_PALACIOS_LUIS_GUILLERMO.pdf";
import githubIcon from "../../assets/github.svg";

function Header() {
  return (
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
  );
}

export default Header;
