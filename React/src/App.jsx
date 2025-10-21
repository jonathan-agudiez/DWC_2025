import React from "react";

// --- Práctica 2.03 (reorganizada en /components/useRef) ---
import PeliculasPage from "./pages/PeliculasPage.jsx";

/* import Listado from "./components/useState/Practica3-08/Listado.jsx";
import ContadorLimite from "./components/useState/Practica3-08/ContadorLimite.jsx";
import ContadorLikes from "./components/useState/Practica3-08/ContadorLikes.jsx";
import Matricula from "./components/useState/Practica3-09/Matricula.jsx"; */

function App() {

return (
    <>
      {/* Ejercicios de la Práctica 2.03 */}
      <PeliculasPage />

      {/* Ejercicios de la Práctica 3.08 / 3.09 (activa los que quieras) */}
      {/* <Listado /> */}
      {/* <ContadorLimite /> */}
      {/* <ContadorLikes /> */}
      {/* <Matricula /> */}
    </>
);
}

export default App;