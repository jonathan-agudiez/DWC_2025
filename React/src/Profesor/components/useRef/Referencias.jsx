import React, { useRef } from "react";
import "./Referencias.css";
import BotonLimpiar from "./BotonLimpiar";

const Referencias = () => {
  // Referencias a elementos del VirtualDOM.
  const contenedor1Ref = useRef(null);
  const contenedor2Ref = useRef(null);

  // Funciones para los eventos de los botones de forma local al componente.
  const ponerRojo = () => {
    contenedor1Ref.current.classList.toggle("clases_rojo");
    contenedor2Ref.current.classList.toggle("clases_rojo");
  };

  const ponerAzul = () => {
    contenedor1Ref.current.classList.toggle("clases_azul");
  };

  return (
    <>
      <div>
        <button onClick={ponerRojo}>Clase rojo</button>
        <button
          onClick={() => {
            ponerAzul(contenedor2Ref);
          }}
        >
          Clase azul
        </button>
      </div>
      <div>
        {/* Las referencias son objetos, por lo que se pueden pasar como parámetros. */}
        <BotonLimpiar
          referencia1={contenedor1Ref}
          referencia2={contenedor2Ref}
        />
      </div>
      <div>
        <p ref={contenedor1Ref} id='feo'>
          Este es el contenedor 1.
        </p>
        <p ref={contenedor2Ref}>Este es el contenedor 2.</p>
      </div>
    </>
  );
};

export default Referencias;
