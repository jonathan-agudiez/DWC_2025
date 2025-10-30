"use strict";

/* 
Ejercicio 1 - Saludar
Realiza un programa con dos botones Comenzar Saludos y Parar saludos. Al hacer clic en el
primero lanza un setInterval para que cada dos segundos genere un <h1> con el texto
¡Hola Feo!. El botón Parar saludos parará la secuencia. */


window.onload = function() {
    
    const botones = document.getElementsByTagName('button');
    const contenedorSaludo = document.getElementById('saludo');
    
    // Se asigna a cada botón una función.
    botones[0].addEventListener('click', comenzarSaludos, false);
    botones[1].addEventListener('click', pararSaludos, false);
    

    // Se crea variable global para poder usarla en todas las funciones.
    let intervalo = null; 
    
    function comenzarSaludos() {
        // Si intervalo es null significa que podemos comenzar el intervalo.
        if (intervalo == null) {
            intervalo = setInterval(() => {

            const h1 = document.createElement('h1');
            h1.textContent = 'NI HAO';
            contenedorSaludo.appendChild(h1);
            console.log('Saludo generado.');
            }, 2000);
            
        } else console.log('Ya has iniciado los saludos.');
    };

    function pararSaludos() {
        // Si no es null significa que se está ejecutando el intervalo.
        if (intervalo !== null) {
            clearInterval(intervalo);
            intervalo = null;
            console.log('Saludos detenidos.');
            
        } else console.log('No había saludos activos.');
    }
};
