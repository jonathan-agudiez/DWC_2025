import React from "react";

const BotonLimpiar = (props) => {
  // Se desestructura el objeto props.
  const { referencia1, referencia2 } = props;

  const limpiarClases = () => {
    // Se utilizan las referencias para limpiar las clases.
    /*  referencia1.current.classList.remove("clases_rojo");
    referencia2.current.classList.remove("clases_rojo");
    referencia1.current.classList.remove("clases_azul");
    referencia2.current.classList.remove("clases_azul"); */
    // Código más óptimo.
    // Cuidado con la iteración ya que cada vez que se elimina un elemento su longitud se reduce en uno.
    /* while (referencia1.current.classList.length > 0) {
      referencia1.current.classList.remove(
        referencia1.current.classList.item(0)
      );
    }
    while (referencia2.current.classList.length > 0) {
      referencia2.current.classList.remove(
        referencia2.current.classList.item(0)
      );
    } */
    // Hacerlo directamente a través del atributo destructivo calsName.
    referencia1.current.className = "";
    referencia2.current.className = "";
  };

  return (
    <>
      <button
        onClick={() => {
          limpiarClases();
        }}
      >
        Limpiar clases
      </button>
    </>
  );
};

export default BotonLimpiar;
