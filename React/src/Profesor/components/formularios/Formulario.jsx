import React, { useState } from "react";

function Formulario() {
  // Estados del formulario.
  // Primera forma de hacerlo para formularios sencillos (muy sencillos).
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");

  return (
    <>
      <div className='App-header'>
        <h2>Formularios controlados en React.</h2>
        <form>
          {/* Etiqueta a tener en cuenta: cambia su nomenclatura en React de "for" a "htmlFor". */}
          <label htmlFor='nombre'>Nombre:</label>
          <input
            name='nombre'
            className='conEstilo'
            type='text'
            placeholder='Escribe tu nombre.'
            value={nombre}
            onChange={(evento) => {
              setNombre(evento.target.value);
            }}
          />
          <br />
          <label htmlFor='apellidos'>Apellidos:</label>
          <input
            name='apellidos'
            className='conEstilo'
            type='text'
            placeholder='Escribe tus apellidos.'
            value={apellidos}
            onChange={(evento) => {
              setApellidos(evento.target.value);
            }}
          />
          <br />
          <label htmlFor='modulos'>Correo:</label>
          <input
            name='correo'
            className='conEstilo'
            type='text'
            placeholder='Escribe tu correo electrónico.'
            value={correo}
            onChange={(evento) => {
              setCorreo(evento.target.value);
            }}
          />
        </form>
        <div className='estado'>
          <p>Valor del estado.</p>
          <p>{`nombre = ${nombre}`}</p>
          <p>{`apellidos = ${apellidos}`}</p>
          <p>{`correo = ${correo}`}</p>
        </div>
      </div>
    </>
  );
}

export default Formulario;
