import React from "react";

const ValorEstado = (props) => {
  const { estado, titulo } = props;
  return (
    <>
      <div>
        <h2>Valor del estado {titulo ? titulo : "actual"}.</h2>
        <pre>{JSON.stringify(estado, null, 2)}</pre>
      </div>
    </>
  );
};

export default ValorEstado;
