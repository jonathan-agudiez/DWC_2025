import React, { useState, useEffect } from "react";

const EffectCiclo = () => {
  /**
   * Manejar efectos secundarios, ciclo de vida y dependencias.
   *
   * Parámetros del useEffect.
   *    -> función a ejecutar,
   *    -> array de valores.
   *
   * useEffect como ciclo de vida.
   *    -> se ejecuta al crear el componente siempre (ComponentDidMount),
   *    -> sin array, se ejecuta tras cada dibujado (ComponentDidUpdate),
   *    -> usando el return, acciones al desmontar el componente (ComponentWillUnmount).
   *
   * No es posible evitar su ejecución al montado del componente,
   * pero sí obligarle a que no haga nada.
   *
   * Hay que utilizarlo siempre con estados y props (bueno, casi).
   *
   ***/

  const contadorInicial = 0;
  const [contador, setContador] = useState(contadorInicial);

  // Acciones a realizar en la carga del componente (que muestre un mesaje por consola).

  // Acciones a realizar (side effects) en cada redibujado del componente.
  //  -> imprimir por consola si contador tiene valor e
  //  -> imprimir por consola si contador es múltiplo de cinco.

  return (
    <>
      <h2>El valor de contador es: {contador}</h2>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Incrementar contador
      </button>
    </>
  );
};

export default EffectCiclo;
