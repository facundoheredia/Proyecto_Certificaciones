import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Certificado from "./componentes/Certificado/Certificado";

function App() {
  return (
    <Certificado />
  );
}

export default App;

/*
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar"
import { BrowserRouter } from "react-router-dom";
import Rutas from "./componentes/Rutas/Rutas";
import { LoginProvider } from "./context/context";

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <NavBar />
        <Rutas />
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;
*/



/*
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar"
import { BrowserRouter } from "react-router-dom";
import Rutas from "./componentes/Rutas/Rutas";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Rutas />
    </BrowserRouter>
  );
}

export default App;
*/