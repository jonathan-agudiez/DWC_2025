import React, { useState } from "react";
import { generarVerduraAleatorio } from "../../libraries/funciones.js";
import "./StateVerduras.css";
import ValorEstado from "../tools/ValorEstado.jsx";

function StateVerduras() {
  const valorInicial = ["Apio", "Calabacín", "Pimiento", "Calabaza", "Cebolla"];

  const [verduras, setVerduras] = useState(valorInicial);

  const anadirVerdura = (nuevaVerdura) => {
    setVerduras([...verduras, nuevaVerdura]);
  };

  const borrarVerdura = (nuevaVerdura) => {
    const nuevasVerduras = verduras.filter((verdura) => {
      return verdura !== nuevaVerdura;
    });
    setVerduras(nuevasVerduras);
  };

  const actualizarVerdura = (nuevoNombre) => {
    const nuevasVerduras = verduras.map((verdura) => {
      return verdura === nuevoNombre ? `${verdura} <-- ¡Cambiado!` : verdura;
    });
    setVerduras(nuevasVerduras);
  };

  const limpiarVerdura = () => {
    setVerduras([]);
  };

  const iniciarVerdura = () => {
    setVerduras(valorInicial);
  };

  const borrarVerdura_ahora_es_personal = (identificador) => {
    console.log(identificador);
    const nuevasVerduras = verduras.filter((verdura, indice) => {
      return parseInt(identificador) !== indice;
    });
    setVerduras(nuevasVerduras);
  };

  // Código JSX.
  return (
    <>
      <h1>Verduras</h1>
      <p>
        <button
          onClick={() => {
            anadirVerdura(generarVerduraAleatorio());
          }}
        >
          Añadir
        </button>
        <button
          onClick={() => {
            borrarVerdura("Calabaza");
          }}
        >
          Borrar verdura
        </button>
        <button
          onClick={() => {
            actualizarVerdura("Calabaza");
          }}
        >
          Actualizar verdura
        </button>
        <button
          onClick={() => {
            limpiarVerdura();
          }}
        >
          Limpiar verduras
        </button>
        <button
          onClick={() => {
            iniciarVerdura();
          }}
        >
          Iniciar verduras
        </button>
      </p>
      <div className='verduras-div'>
        {/* Todo esto está mal y no está comprobado. */}
        <div>
          {Array.isArray(verduras) && verduras.length
            ? verduras.map((verdura, indice) => {
                // Uso el randomUUID como key para que no salte la davertencia por consola.
                return (
                  <p
                    id={indice}
                    key={crypto.randomUUID()}
                    onClick={(evento) => {
                      borrarVerdura_ahora_es_personal(evento.target.id);
                    }}
                  >
                    {verdura}
                  </p>
                );
              })
            : "No hay verduras."}
        </div>
        <div></div>
      </div>
    </>
  );
}

export default StateVerduras;
