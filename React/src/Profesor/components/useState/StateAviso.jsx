import React, { useState } from "react";

const StateAviso = () => {
  // Se crea el estado del componente deconstruyendo la función useState.
  let [condicion, setCondicion] = useState(true);

  /* Funciones asociadas al estado.
   *    Se crean el mismo componente ya que dependen del estado.
   *    Si forman parte del núcleo del componente se declaran en el componente.
   */
  const cambiar = () => {
    setCondicion(!condicion);
    //condicion = !condicion;
  };

  // Se crea el código JSX.
  return (
    <>
      <div className='App-header'>
        {/* Se asigna un evento al botón para cambiar el estado. */}
        <button
          onClick={() => {
            //cambiar();
            setCondicion(!condicion);
          }}
        >
          Cambiar condición
        </button>
        {/* Se evalua el estado para redibujar el componente o no. */}
        <h1>{condicion ? `¡Hola, Feo!` : `¡Adiós, Feo!`}</h1>
      </div>
    </>
  );
};

export default StateAviso;

//¿Ocurre lo mismo con una variable tipo Yamcha?
