import React, { useState } from "react";
import "./contadorLimite.css";


const ContadorLimite = () => {
  // El useState hará referencia a un estado numérico. 
  const [contador, setContador] = useState(0);  //  Se pone 0 como valor por defecto.

  // Se pone el límite del contador por arriba y por abajo.
  const superior = 10;
  const inferior = 0;


/* Uso de setContador como función (forma funcional):
En React el estado no se actualiza instantáneamente, sino en un ciclo de renderizado. Por eso, la forma funcional asegura que siempre trabajemos con el valor más reciente. 
"setContador(contador + 1);" No renderizaría bien en algunos casos. */

    const incrementar = () => {
      setContador(contador => 
        contador < superior ? contador + 1 : contador
      );
    };


    const decrementar = () => {
      setContador(contador => 
        contador > inferior ? contador - 1 : contador
      );
    };


  // Deshabilitar botones si se cumplen esta condición (true = deshabilitar botón):
  const botonIncrementarOff = (contador >= superior);
  const botonDecrementarOff = (contador <= inferior);


  return (
    <section className="contador-card">
        <h2>Contador React</h2>

        <p className="valor">{contador}</p>


        {/* Botones incrementar y decrementar */}
        <div className="botones">
            <button
                onClick={decrementar}
                disabled={botonDecrementarOff} // IMPORTANTE: propiedad deshabilitar.
                className="btn-decrementar">Decrementar
            </button>

            <button
                onClick={incrementar}
                disabled={botonIncrementarOff}
                className="btn-incrementar">Incrementar
            </button>    
        </div>


        {/*{condición && <Elemento />}. Muestra <Elemento /> si condición es verdadera*/}
        {contador === superior && (
            <p className="mensaje">Límite superior</p>
        )}
        {contador === inferior && (
            <p className="mensaje">Límite inferior</p>
        )}
    </section>
  );
};

export default ContadorLimite;
