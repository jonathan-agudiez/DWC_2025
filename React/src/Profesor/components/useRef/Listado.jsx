import React, { useRef } from "react";
import {
  anadirElementoCrear,
  anadirElementoInner,
  borrarListado,
} from "../../bibliotecas/ut03.js";

const Listado = () => {
  // En la parte de Javascript se crea una referencia a un componente del Virtual DOM.
  const listadoRef = useRef(null);

  return (
    <>
      <div>
        <h2>Listado de elementos a incrementar.</h2>
        <p>
          <button
            onClick={() => {
              anadirElementoInner(listadoRef);
            }}
          >
            Añadir elemento con innerHTML
          </button>
          <button
            onClick={() => {
              anadirElementoCrear(listadoRef);
            }}
          >
            Añadir elemento con createElement
          </button>
          <button
            onClick={() => {
              borrarListado(listadoRef);
            }}
          >
            Borrar listado
          </button>
        </p>
        <ul ref={listadoRef}>
          <li>Este es el elemento inicial.</li>
        </ul>
      </div>
    </>
  );
};

export default Listado;
