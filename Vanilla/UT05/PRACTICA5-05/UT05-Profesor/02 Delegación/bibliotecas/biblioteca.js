"use strict";

const agregarBoton = () => {
  // Se añade un botón al contenedor.
  document.getElementById("contenedor").innerHTML +=
    "<button class='boton'>Botón dentro del contenedor</button>";
};

const agregarEvento = (coleccionElementos) => {
  Array.from(coleccionElementos).forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
      console.log(evento.target);
    });
  });
};

export { agregarBoton, agregarEvento };
