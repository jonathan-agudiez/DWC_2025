"use strict"


window.onload = () => {

    const contenedorSuperior = document.getElementById("arrastrables");
    const contenedorInferior = document.getElementById("soltables");

    // En esta constante se almacena el resultado del rompecabezas.
    const resultado = document.getElementsByClassName("resultado")[0];

    // Aquí se almacena la constante de botón de "Reiniciar"
    const btnReiniciar = document.getElementById("btn-reiniciar");

    // Array necesario para almacenar el orden de los div/imagenes y emplearlo luego al darle al botón "Reiniciar".
    const ordenInicial = [];

    // Damos setAttribute a los elementos arrastrables.
    const elementosArrastrables = document.getElementsByClassName("arrastrable");
    for (let i = 0; i < elementosArrastrables.length; i++) {
        elementosArrastrables[i].setAttribute("draggable", true);

        // Tambien es posible realizarlo con spread [..., arrayOriginal]
        ordenInicial.push(elementosArrastrables[i].id); 
    };



    // --- Dragstart  en ambos contenedores ------------------
    contenedorSuperior.addEventListener("dragstart", (e) => {

        // Si empieza el arrastre sobre la IMG
        if (e.target.classList.contains("imagen")) {
            e.dataTransfer.setData("id", e.target.parentElement.id);
        }

        // Si empieza sobre el DIV .arrastrable directamente
        if (e.target.classList.contains("arrastrable")) {
            e.dataTransfer.setData("id", e.target.id);
        }

    }, false);

    contenedorInferior.addEventListener("dragstart", (e) => {
        // Mi intención es que arrastre el div .arrastrable + la imagen.
        
        // Si empieza el arrastre sobre la IMG
        if (e.target.classList.contains("imagen")) {
            e.dataTransfer.setData("id", e.target.parentElement.id);
        }

        // Si empieza sobre el DIV .arrastrable directamente
        if (e.target.classList.contains("arrastrable")) {
            e.dataTransfer.setData("id", e.target.id);
        };

    }, false);
    //----------------- Fin del Dragstart --------------------


  
    // --- Dragover en ambos contenedores ------------------
    contenedorInferior.addEventListener("dragover", (e) => {
        e.preventDefault();
    }, false);

    contenedorSuperior.addEventListener("dragover", (e) => {
        e.preventDefault();
    }, false);
    //----------------- Fin del Dragover --------------------



    // --- Drop en ambos contenedores ------------------
    contenedorSuperior.addEventListener("drop", (e) => {
        e.preventDefault();

        // Se traspasa el div/imagen con el id seleccionado al contenedor superior.
        const pieza = document.getElementById(e.dataTransfer.getData("id"));

        contenedorSuperior.appendChild(pieza);

        // Si  se devuelve un div/imagen al contenedor superior vaciamos el div resultado.
        resultado.textContent = "";
        resultado.classList.remove("ok", "mal");

    }, false);

    contenedorInferior.addEventListener("drop", (e) => {
        e.preventDefault();

        // Para evitar errores, solo se permite el traspaso si el slot destinatario está vacío.
        if (e.target.classList.contains("slot") && e.target.children.length === 0) {
   
            const pieza = document.getElementById(e.dataTransfer.getData("id"));

            e.target.appendChild(pieza);


            const slots = contenedorInferior.getElementsByClassName("slot");
            
            // Contador de huecos ocupados.
            let contador = 0;

            let aciertos = 0;
            let correcto = false;

            for (let i = 0; i < 9; i++) {
                // Si el slot tiene un div dentro contador++.
                if (slots[i].children.length > 0) contador++;
            };

            // Se limpia clase resultado antes de mostrar nada.
            resultado.classList.remove("ok", "mal");

            // Se comprueba si los 9 slots están ocupados.
            if (contador === 9) {

                // Se comprueba el orden 1..9 por id de la imagen.
                for (let i = 0; i < 9; i++) {

                    // Se obtiene la imagen del slot nº [i]
                    const img = slots[i].getElementsByTagName("img")[0];


                    // Se comprueba si el id numérico de la imagen coincide con su posición correcta (1 al 9). Si coincide, aumentamos el contador de aciertos.
                    if (Number(img.id) === i + 1) {
                        aciertos++;
                    }
                }

                // Si el contador aciertos es = 9, se pintará con la clase .ok del CSS. Si no pintará la clase .mal
                if (aciertos === 9) {
                    correcto = true;
                }


                if (correcto) {
                    resultado.textContent = "OK";
                    resultado.classList.add("ok");
                } else {
                    resultado.textContent = "INCORRECTO";
                    resultado.classList.add("mal");
                }

            } else {
                // si aún no están los 9 div/imagenes, no se muestra nada por div: resultado.
                resultado.textContent = "";
            }


        }
    }, false);


    // Botón Reiniciar
    btnReiniciar.addEventListener("click", (e) => {
        e.preventDefault();

        // Se devuelve cada pieza a su contenedor superior en el orden original.
        // En el inicio del código tenemos el array ordenInicial.
        for (let i = 0; i < ordenInicial.length; i++) {

            const pieza = document.getElementById(ordenInicial[i]);

            if (pieza) {
                contenedorSuperior.appendChild(pieza);
            }
        }

        // Se limpia el div resultado.
        resultado.textContent = "";
        resultado.classList.remove("ok", "mal");
    }, false);
}
