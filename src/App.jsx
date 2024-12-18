import "./App.css";
import GitHubProjects from "./components/github/GitHubProjects";
import NeonBackground from "./components/background/NeonBackground";
import Header from "./components/header/Header";
import Technologies from "./components/tech/Technologies";

function App() {
  return (
    <>
      <NeonBackground />
      <div className="container">
        <Header />

        {/* CONTENIDO PRINCIPAL */}
        <Technologies />

        {/* Columna 2: proyectos */}
        <GitHubProjects />
      </div>
      <h3 className="nickname">
        <strong className="username">RacoonDevRock</strong>
      </h3>
    </>
  );
}

export default App;
