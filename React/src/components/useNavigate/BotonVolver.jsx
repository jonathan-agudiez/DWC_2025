import React from "react";
import { useNavigate } from "react-router-dom";
import "./botonVolver.css";

/*
  Componente BotonVolver
  ----------------------
  - Muestra un botón circular con una flecha.
  - Al hacer click navega a la ruta indicada en la prop "ruta".
  - Usa useNavigate() para NO recargar la aplicación entera.
*/

/* Ruta "/" por defecto. */
function BotonVolver({ ruta = "/" }) {
  const navigate = useNavigate();

    return (
        <button className="botonVolver" onClick={() => navigate(ruta)}>←</button>
    );
}

export default BotonVolver;
