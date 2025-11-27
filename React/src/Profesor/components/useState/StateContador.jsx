import React, { useState } from "react";

function StateContador() {
  // Se crea el estado del componente.
  let [contador, setContador] = useState(0);
  /* Funciones asociadas al estado.
   *    Se crean el mismo componente ya que dependen del estado.
   *    Si forman parte del núcleo del componente se declaran en el componente.
   */
  const incremento = () => {
    let contadorNuevo = contador + 1;
    setContador(contadorNuevo); // Una sola actualización por ámbito.
    //contador++; // No hay redibujado ya que no se está utilizando la función setContador.
    console.log(contador);
  };
  const decremento = () => {
    setContador(contador - 1);
    //contador--;
    console.log(contador);
  };

  const reiniciar = (numero) => {
    setContador(numero);
  };

  // Se crea el código JSX.
  return (
    <>
      <div>
        <h1>Mi primer contador en React</h1>
        {/* Se muestra el estado del componente. */}
        <h1>{contador >= 0 ? contador : "0"}</h1>
        {/*¿Y si quiero que su valor sea siempre positivo? */}
        <p>
          {/* Se asignan los eventos a los botones. */}
          <button
            onClick={() => {
              incremento();
            }}
          >
            Incrementar
          </button>
          <button onClick={decremento}>Decrementar</button>
          <button
            onClick={() => {
              reiniciar(0);
            }}
          >
            Reiniciar
          </button>
          {/*¿Y si quiero reiniciar el contador? */}
        </p>
      </div>
    </>
  );
}
/* *************************************************************************
 *   La función setContador es una función asíncrona por ese motivo no tiene
 *   un comportamiento síncrono (el valor de contador no coincide).
 *   Esto es un funcionamiento normal que se entenderá en la unidad
 *   destinada al asincronismo.
 *
 *   Para solucionar esto es mejor comprobar el estado en el return.
 *   ¿Crear una herramienta de desarrollo para esto?
 *************************************************************************** */
export default StateContador;
