// ejercicio01.js
'use strict';


window.onload = function(){

    
    document.addEventListener('click', (evento) => {

        // Se identifica el elemento sobre el que se ha hecho click.
        // "event.target" representa el elemento exacto que originó el click.
        // "closest('.subfila1')" busca el ancestro más cercano (incluyéndose a sí mismo).
        const subfila1 = evento.target.closest('.subfila1');
        
        // Despues se identifica el elemento hermano (subfila2).
        const subfila2 = subfila1.nextElementSibling;

        // Por último, se crea un toggle. Por defecto está oculto (display: none).
        subfila2.classList.toggle('mostrar');
        
    }, false);

};

// Profesor: Tuve que revisar documentación para encontrar "target.closest()".
