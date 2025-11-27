import React from "react";
import Contenedor from "../components/Contenedor";
import EffectCiclo from "../components/useEffect/EffectCiclo";
import EffectDependencias from "../components/useEffect/EffectDependencias";
import EffectDOM from "../components/useEffect/EffectDOM";

const CicloVida = () => {
  return (
    <>
      <h2>Ciclo de vida en React con useEffect.</h2>
      <Contenedor>
        <EffectCiclo />
        {/* <EffectDependencias /> */}
        {/* <EffectDOM /> */}
      </Contenedor>
    </>
  );
};

export default CicloVida;
