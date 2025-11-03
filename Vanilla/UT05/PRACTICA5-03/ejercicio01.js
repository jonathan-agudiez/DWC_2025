"use strict";

// Colores disponibles
const colores = ["black", "white", "red", "green", "blue", "yellow"];
const lienzo = document.getElementById("lienzo");
const paletas = document.getElementsByClassName("paleta");
const borrador = document.getElementsByClassName("borrar-lienzo")[0]; // solo hay uno

let colorActual = colores[0];
let pintando = false;

// Crear tabla 60x60
const tabla = document.createElement("table"); // ← primero creamos la tabla

for (let i = 0; i < 60; i++) {
  let fila = document.createElement("tr");
  for (let j = 0; j < 60; j++) {
    let celda = document.createElement("td");
    fila.appendChild(celda); // ← añadimos el nodo, no el texto "celda"
  }
  tabla.appendChild(fila);
}

lienzo.appendChild(tabla); // ← añadimos la tabla completa al lienzo

// Elegir color de la paleta
for (let i = 0; i < paletas.length; i++) {
  paletas[i].addEventListener("click", function (evento) {
    // Si la paleta pulsada es la actual del bucle
    if (evento.target === paletas[i]) {
      colorActual = colores[i];
    }

    // Quitamos la clase active de todas
    for (let j = 0; j < paletas.length; j++) {
      paletas[j].classList.remove("active");
    }

    // Activamos la paleta seleccionada
    paletas[i].classList.add("active");
  });
}

// Función de pintar
const pintar = (celda) => {
  celda.style.background = colorActual;
};

// Empieza a pintar al pulsar
lienzo.addEventListener("mousedown", (evento) => {
  if (evento.target.tagName === "TD") {
    pintando = true;
    pintar(evento.target);
  }
});

// Pinta mientras se arrastra
lienzo.addEventListener("mouseover", (evento) => {
  if (pintando && evento.target.tagName === "TD") {
    pintar(evento.target);
  }
});

// Deja de pintar al soltar el ratón
document.addEventListener("mouseup", () => {
  pintando = false;
});

// Botón borrar
borrador.addEventListener("click", () => {
  // Recorremos todas las celdas
  const celdas = tabla.getElementsByTagName("td");
  for (let i = 0; i < celdas.length; i++) {
    celdas[i].style.background = "white";
  }
});
