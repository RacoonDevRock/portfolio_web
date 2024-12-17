import "./Technologies.css";
import javaIcon from "../../assets/java.svg";
import javascriptIcon from "../../assets/javascript.svg";
import kotlinIcon from "../../assets/kotlin.svg";
import springIcon from "../../assets/spring.svg";
import angularIcon from "../../assets/angular.svg";
import androidIcon from "../../assets/android.svg";
import nodeIcon from "../../assets/node-js.svg";
import dockerIcon from "../../assets/docker.svg";
import terraformIcon from "../../assets/terraform.svg";
import firebaseIcon from "../../assets/firebase.svg";

function Technologies() {
  return (
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
  );
}

export default Technologies;
