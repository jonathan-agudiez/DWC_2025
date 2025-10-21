"use strict";

import './quijoteFrases.js';
import { quijoteFrases } from './quijoteFrases.js';



let indice = 0;

const introducirFrase = () => {

    const cuerpoTabla = document.getElementsByTagName("tbody")[0];

    if(indice < quijoteFrases.length){
        cuerpoTabla.insertAdjacentHTML("beforeend",`<tr><td>${quijoteFrases[indice]}</td></tr>`); 
        indice++;
    }
    
};

setInterval(introducirFrase, 1000);