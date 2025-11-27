import React from "react";
import Contenedor from "../components/Contenedor.jsx";
import Formulario from "../components/formularios/Formulario.jsx";
import FormularioObjeto from "../components/formularios/FormularioObjeto.jsx";
import FormularioObjetoCompleto from "../components/formularios/FormularioObjetoCompleto.jsx";
import FormularioObjetoControl from "../components/formularios/FormularioObjetoControl.jsx";

const Formularios = () => {
  return (
    <>
      <div className='izquierda'>
        <Contenedor>
          <Formulario />
        </Contenedor>
      </div>
    </>
  );
};

export default Formularios;
