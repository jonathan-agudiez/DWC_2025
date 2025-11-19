"use strict";

let idDisco = 0;

// Se añaden los datos al JSON
const crearDisco = (datos) => {
  idDisco++; // Incrementa el id, cada vez que se crea disco.
  
  return {
    id: idDisco,
    nombre: datos.nombre,
    caratula: datos.caratula,           
    grupo: datos.grupo,
    anio: datos.anio,
    genero: datos.genero,
    localizacion: datos.localizacion,
    prestado: datos.prestado === true   
  };
};

export { crearDisco };
