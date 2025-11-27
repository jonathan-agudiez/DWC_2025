import React from "react";
import listado from "../assets/objetos/discentes.json";

const Discentes = () => {
  return (
    <>
      <h3>Listado de discentes</h3>
      <div className='listadoDiscentes-listado'>
        {listado.discentes.length
          ? listado.discentes.map((elemento) => {
              return <p key={crypto.randomUUID()}>{elemento.nombre}</p>;
            })
          : "No se han encontrado discentes."}
      </div>
    </>
  );
};

export default Discentes;
