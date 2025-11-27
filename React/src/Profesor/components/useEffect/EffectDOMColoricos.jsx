import React, { useState, useEffect } from "react";
import "./EffectDOMColoricos.css";

const EffectDOMColoricos = () => {
  // Declaración del estado.
  const colorInicial = "";
  const [color, setColor] = useState(colorInicial);

  // Función para modificar el document.
  const cambiarColor = (evento) => {
    if (evento.clientX < window.innerWidth / 2) {
      setColor("red");
    } else {
      setColor("grey");
    }
    console.log(
      `He ejecutado el evento de document en la coordenada X ${evento.clientX}.`
    );
    document.title = `Coordenadas X: ${evento.clientX}, Y: ${evento.clientY}.`;
  };

  useEffect(() => {
    // Se añade el evento al cargar el componente (una sola vez).
    document.addEventListener("click", cambiarColor);
    // Se quita el evento al descargar el componente
    // (y también antes de la realizar el código del useEffect).
    return () => {
      document.removeEventListener("click", cambiarColor);
      console.log(`Se ha quitado el evento del document.`);
      document.title = `Título inicial.`;
    };
    // Se está poniendo un evento, por lo que tan sólo se debe ejecutar una vez.
  }, []);
  return (
    <>
      <div id='colores' className={color}>
        <h2>Soy un div que cambia de color.</h2>
      </div>
    </>
  );
};

export default EffectDOMColoricos;
