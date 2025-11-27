import React from "react";

const ElementoListado = (props) => {
  return (
    <>
      <p>
        {props.apellidos}, {props.nombre}
      </p>
    </>
  );
};

export default ElementoListado;
