"use strict";

import { agregarEvento, agregarBoton } from "./bibliotecas/biblioteca.js";


window.onload = () => {
  let botones = document.getElementsByTagName("button");
  let contenedor = document.getElementById("contenedor");

  document.getElementById("nuevoBoton").addEventListener("click", () => {
    agregarBoton();
  });

  document.getElementById("agregarEvento").addEventListener(
    "click",
    (evento) => {
      agregarEvento(botones);
    },
    false
  );

  document.getElementById("contenedor").addEventListener(
    "click",
    (evento) => {
      if (evento.target.tagName === "BUTTON") console.log(evento.target);
      if (evento.target.tagName === "P") console.log(evento);
    },
    false
  );
}; //Fin del window.load.
