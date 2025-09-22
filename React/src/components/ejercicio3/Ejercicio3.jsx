import React from "react";
import Contenedor from "../ejercicio1/Contenedor.jsx"; // Reutilizo el codigo Contenedor
import Interprete from "../ejercicio2/Interprete.jsx";
import Pelicula from "./Pelicula.jsx";

import dieHard from "../../assets/img/die-hard.jpg";
import Bruce from "../../assets/img/Bruce_Willis.jpg";
import Alan from "../../assets/img/Alan_Rickman.webp";


export default function(){

    return (
        <>
        <h1>Ejercicio 3</h1>
        <Contenedor>
            <Pelicula
                titulo="Jungla de Cristal"
                img={dieHard}
                director="John McTiernan"
                resumen="Un policía de Nueva York viaja a Los Ángeles para pasar la Navidad con su esposa. Durante la fiesta en el rascacielos Nakatomi Plaza, unos terroristas liderados por Hans Gruber toman el edificio y McClane se convierte en la única esperanza de los rehenes."
                >
                <Interprete
                    nombre="Bruce Willis"
                    img={Bruce}
                >
                El mejor actor de los 90, Yippee ki yay!
                </Interprete>
                <Interprete
                    nombre="Alan Rickman"
                    img={Alan}
                >
                El mejor final boss de los 90.
                </Interprete>
            </Pelicula>
        </Contenedor>
        </>
    );
}