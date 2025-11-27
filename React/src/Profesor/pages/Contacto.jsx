import React from "react";
import { useNavigate } from "react-router-dom";

const Contacto = () => {
  // Hook para manejar la navegación de forma programática.
  const navegar = useNavigate();
  return (
    <>
      <h2>
        Si desea más información puede oontactarnos a través del siguiente
        correo electrónico:
      </h2>
      <h3>ponerenellistadodecosasquenomeimportan@feos.es</h3>
      <button
        onClick={() => {
          // Se navega hacia la ruta "Inicio".
          navegar("/");
        }}
      >
        Volver a inicio.
      </button>
    </>
  );
};

export default Contacto;
