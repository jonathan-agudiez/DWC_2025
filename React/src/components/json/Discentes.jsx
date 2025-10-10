import React from "react";
import Discente from "./Discente.jsx";
import feo from "../../assets/objetos/discentes.json";

const Discentes = () => {
  /* const discentes = [
    {
      id: 1,
      nombre: "Feo",
      apellidos: "De verdad de la buena",
      curso: "2DAW",
      modulos: "DWC, DWS, DIW, DES",
    },
    {
      id: 2,
      nombre: "Fea",
      apellidos: "También De verdad",
      curso: "2DAW",
      modulos: "DWC, DWS, DIW",
    },
    {
      id: 3,
      nombre: "Horrible",
      apellidos: "De verdad",
      curso: "2DAW",
      modulos: "DWC",
    },
  ]; */

  //const discentes = [];

  /** Importar el fichero desde un archivo. */
  console.log(feo);
  const discentes = [...feo.discentes];

  return (
    <>
      <h1>Listado de discentes.</h1>
      <div>
        {discentes.length !== 0 ? (
          discentes.map((v, i, a) => {
            return (
              <Discente
                key={v.id} // Id para componentes dentro de una iteración (si no existe id utilizar índice).
                datos={v}
              />
            );
          })
        ) : (
          <h2>No hay discentes, tonto.</h2>
        )}
      </div>
    </>
  );
};

export default Discentes;
