import React from "react";
import Contenedor from "../ejercicio1/Contenedor.jsx"; // Reutilizo el codigo Contenedor
import Interprete from "./Interprete.jsx";

import Bruce from "../../assets/img/Bruce_Willis.jpg"; // podia ponerlo en public tambien
import Alan from "../../assets/img/Alan_Rickman.webp";
   

function Ejercicio2() {
  return (
    <> 
      <h1>Ejercicio 2</h1>
      <Contenedor> 
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
      </Contenedor>
    </>
  );
}

export default Ejercicio2;