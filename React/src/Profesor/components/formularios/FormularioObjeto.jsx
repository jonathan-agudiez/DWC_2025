import React, { useState } from "react";
import ValorEstado from "../tools/ValorEstado.jsx";

function FormularioObjeto() {
  // Crear un estado inicial (objeto con valores por defecto para evitar errores al dibujar).
  const valoresIniciales = {
    nombre: undefined,
    apellidos: "",
    correo: "",
  };
  // Estado para los valores del discente.
  const [discente, setDiscente] = useState(valoresIniciales);

  const actualizarDato = (evento) => {
    // Se obtienen los datos necesarios de evento que lanza esta función: el input.
    const { name, value } = evento.target;
    // Se asignan al estado.
    setDiscente({ ...discente, [name]: value });
  };

  return (
    <>
      <div className='App-header'>
        <h2>Formulario controlado con objeto.</h2>
        <form>
          <label htmlFor='nombre'>Nombre:</label>
          <input
            name='nombre'
            className='conEstilo'
            type='text'
            placeholder='Escribe tu nombre.'
            /* Se tiene que estar seguro/a  de que no se produzca ningún error. */
            value={discente.nombre || ""}
            onChange={actualizarDato}
          />
          <br />
          <label htmlFor='apellidos'>Apellidos:</label>
          <input
            name='apellidos'
            className='conEstilo'
            type='text'
            placeholder='Escribe tus apellidos.'
            value={discente.apellidos || ""}
            onChange={actualizarDato}
          />
          <br />
          <label htmlFor='modulos'>Correo:</label>
          <input
            name='correo'
            className='conEstilo'
            type='text'
            placeholder='Escribe tu correo electrónico.'
            value={discente.correo || ""}
            onChange={actualizarDato}
          />
        </form>
        {/* Imprimir el estado con formato JSON (Objeto) para comprobar. */}
        <ValorEstado estado={discente} titulo='discente' />
      </div>
    </>
  );
}

export default FormularioObjeto;
