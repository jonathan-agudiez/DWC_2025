"use strict";

window.onload = function(){

  
  // Colores disponibles
  const colores = ["black", "white", "red", "green", "blue", "yellow"];
  
// Selección de elementos
const lienzo = document.getElementById("lienzo");
const paletas = document.getElementsByClassName("paleta");
const borrador = document.getElementsByClassName("borrar-lienzo")[0];
const contenedorColores = document.querySelector(".colores");

// Estado del pincel
let colorActual = colores[0]; // negro por defecto
let pintando = false;

// Constantes filas y celdas
const FILA = 60;
const CELDA = 100; // Por estética hago una tabla rectangular.

// Se crea la tabla.
const tabla = document.createElement("table");
for (let i = 0; i < FILA; i++) {
  const fila = document.createElement("tr");
  for (let j = 0; j < CELDA; j++) {
    const celda = document.createElement("td");
    fila.appendChild(celda);
  }
  tabla.appendChild(fila);
}
lienzo.appendChild(tabla);


// Elección de paleta de color.
contenedorColores.addEventListener("click", (evento) => {
  for (let i = 0; i < paletas.length; i++) {
    if (evento.target === paletas[i]) {
      colorActual = colores[i];

      // Quitar active de todas las paletas de color.
      for (let j = 0; j < paletas.length; j++) {
        paletas[j].classList.remove("active");
      }
      // Activar la seleccionada.
      paletas[i].classList.add("active");
      break;
    }
  }
});

// Función que pinta sobre la celda seleccionada.
const pintar = (celda) => {
  celda.style.background = colorActual;
};

// Empieza a pintar al pulsar.
lienzo.addEventListener("mousedown", (evento) => {
  if (evento.target.tagName === "TD") {
    pintando = true;
    pintar(evento.target);
  }
});

// Pinta mientras se arrastra.
lienzo.addEventListener("mouseover", (evento) => {
  if (pintando && evento.target.tagName === "TD") {
    pintar(evento.target);
  }
});

// Deja de pintar al soltar.
document.addEventListener("mouseup", () => {
  pintando = false;
});

// Botón borrar.
borrador.addEventListener("click", () => {
  const celdas = tabla.getElementsByTagName("td");
  for (let i = 0; i < celdas.length; i++) {
    celdas[i].style.background = "transparent"; 
  }
});

}; 