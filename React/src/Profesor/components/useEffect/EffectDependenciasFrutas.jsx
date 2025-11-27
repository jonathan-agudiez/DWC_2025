import React from "react";

const EffectDependenciasFrutas = (props) => {
  const { datos } = props;
  return (
    <>
      <div id='frutas'>
        <h2>Listado de frutas</h2>
        {datos.length
          ? datos.map((valor, indice) => {
              return <p key={indice}>{valor}</p>;
            })
          : "No hay frutas en el listado."}
      </div>
    </>
  );
};

export default EffectDependenciasFrutas;
