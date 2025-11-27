import React from "react";
import "./App.css";
import Rutas from "./routes/Rutas.jsx";
import Menu from "./components/menu/Menu.jsx";
import Contenedor from "./components/Contenedor.jsx";

function App() {
  return (
    <>
      <Contenedor>
        <h2>Rutas con React.</h2>
        <p>Contenido estático.</p>
      </Contenedor>
      <Contenedor>
        <Menu />
      </Contenedor>
      <Contenedor>
        <Rutas />
      </Contenedor>
      <Contenedor>Pie de página (estático).</Contenedor>
    </>
  );
}

export default App;
