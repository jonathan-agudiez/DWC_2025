"use strict";



const rutaImagenes = [
  "./img/01tinkyWinky.webp",
  "./img/02dipsy.webp",
  "./img/03laaLaa.webp",
  "./img/04poo.webp"
];

// Se crea el contenedor.
const wrapper = document.createElement("div");
wrapper.className = "contenedor";
document.body.appendChild(wrapper);

/// Se crean las imagenes y se asignan sus rutas
const listaImagenes = [];
for (let i = 0; i < rutaImagenes.length; i++) {
    const imagen = document.createElement("img");
    imagen.src = rutaImagenes[i];

    // Propiedades por defecto
    imagen.style.opacity = "0";
    imagen.style.position = "absolute";
    imagen.style.width = "100%";
    imagen.style.height = "100%";

    wrapper.appendChild(imagen);
    listaImagenes.push(imagen);
};


// Se muestra la primera
let indice = 0;
listaImagenes[indice].style.opacity = "1";


setInterval(function() {
  // Se oculta la imagen actual.
  listaImagenes[indice].style.opacity = "0";
  
 
// Ejemplo: 1 % 4 = 1; 2 % 4 = 2; 3 % 4 = 3; 4 % 4 = 0; 
// El índice da la vuelta al llegar al final de la lista. (Actua como un bucle).
indice = (indice + 1) % listaImagenes.length;
  
  // Muestra la imagen del indice nuevo.
  listaImagenes[indice].style.opacity = "1";
}, 2000);

