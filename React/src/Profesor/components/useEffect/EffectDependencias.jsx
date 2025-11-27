import React, { useState, useEffect } from "react";
import "./EffectDependencias.css";
import EffectDependenciasFrutas from "./EffectDependenciasFrutas.jsx";
import EffectDependenciasVerduras from "./EffectDependenciasVerduras.jsx";
import {
  generarFrutaAleatorio,
  generarVerduraAleatorio,
} from "../../libraries/funciones.js";

const EffectDependencias = () => {
  // Valores iniciales.
  const frutasIncial = [];
  const verdurasInicial = [];
  // Creación de estados.
  const [frutas, setFrutas] = useState(frutasIncial);
  const [verduras, setVerduras] = useState(verdurasInicial);
  // Funciones que modificarán los estados.
  const generarFruta = () => {
    const fruta = generarFrutaAleatorio();
    setFrutas([...frutas, fruta]);
  };

  const generarVerdura = () => {
    const verdura = generarVerduraAleatorio();
    setVerduras([...verduras, verdura]);
  };

  const borrar = () => {
    setFrutas(frutasIncial);
    setVerduras(verdurasInicial);
  };

  // Creación el useEffect con dependencias.
  useEffect(() => {
    // Mensaje incial sin sentido. ¿Mostrar?
    console.log(`El número de frutas ha aumentado hasta: ${frutas.length}.`);
  }, [frutas]);

  return (
    <>
      <h2>Uso de dependencias con useEffect.</h2>
      <div>
        <button
          onClick={() => {
            borrar();
          }}
        >
          Borrar vegetales
        </button>
      </div>
      <div className='effectDependencias-vegetales'>
        <div>
          <button
            onClick={() => {
              generarFruta();
            }}
          >
            Aumentar frutas
          </button>
          <EffectDependenciasFrutas datos={frutas} />
        </div>
        <div>
          <button
            onClick={() => {
              generarVerdura();
            }}
          >
            Aumentar verduras
          </button>
          <EffectDependenciasVerduras datos={verduras} />
        </div>
      </div>
    </>
  );
};

export default EffectDependencias;
