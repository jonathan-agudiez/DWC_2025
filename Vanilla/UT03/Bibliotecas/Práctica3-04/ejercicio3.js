"use strict";

import { usuarios } from "./json.js";

/* Ejercicio 3 -
Arrays de objetos
Con el objeto que encontrarás en el fichero Ejercicio3.js (copia y pega) reliza las siguientes acciones utilizando para ello el spread operator y los métodos que creas conveniente (las funciones recibirán por defecto el objeto usuarios contenido en el fichero salvo que se especifique lo contrario):
•
función que permita insertar un nuevo usuario (devolverá el array con todos los usuarios más el nuevo usuario pasado como parámetro),
•
una función que devuelva un array de objetos con los usuarios mayores de edad,
•
un función que devuelva otro array de objetos con los usuarios que tengan correo electrónico del servidor Yahoo,
•
otra que devuelva un array con los usuarios que prefieran el tema claro, sean mayores de edad y su país sea España,
•
la antepenúltima que devuelva un array de usuarios a los que les falte algún dato en su ficha,
•
una penúltima función que añada una nueva clave apellidos a todos los usuarios (el valor por defecto será “No indicado”).
•
y una última función que permita añadir una nueva entrada a direccion denominada codigo cuyo valor por defecto será “00000”.
El contenido de esas funciones se debe mostrar por consola debidamente formateado. */



// Punto 1: 

// Esto se podría configurar con un formulario (inputs). De momento registro el usuario de forma manual a través de los parametros.
function registrarUsuario (nombre, tema, idioma, edad, calle, localidad, pais, correo, telefono){
    const nuevoUsuario = {
        nombre: nombre,
        preferencias: {tema: tema, idioma: idioma, edad: edad },
        contacto: {
            direccion: {
                calle: calle,
                localidad: localidad,
                pais: pais,
            },
            correoelectronico: correo,
            telefono: telefono,
        },
    };

    return nuevoUsuario;
}

const nuevoUsuario = registrarUsuario("John","claro","español",36,"Calle Reina Sofía S/N","Petrer","España","micorreo@gmail.com","123456789");

// Creamos una lista con el usuario nuevo
const nuevaLista = [...usuarios, nuevoUsuario];

// Convertimos a JSON, con formato indentado a 1 espacio.
const nuevoJSON = JSON.stringify(nuevaLista, null, 1);

console.log(nuevoJSON);



//----------------------------------------------------------------------------------------
// Punto 2:

// Función filtro boolean.
const mayorEdad = (valor) => valor >= 18;

// Se pasa el filtro con la funcion mayorEdad y filter().
function usuarioMayorEdad (lista){
    lista = nuevaLista.filter(usuario => mayorEdad(usuario.preferencias.edad));
    return lista;
};

// Se muestra el JSON en formato indentado (1 espacio).
console.log(`Lista de usuarios mayores de edad: ${JSON.stringify(usuarioMayorEdad(nuevaLista),null,1)}`);



//----------------------------------------------------------------------------------------
// Punto 3: Misma dinámica de filtrado que el punto 2. 

// Función filtro boolean.
const esCorreo = (correo) => typeof correo === "string" && correo.includes("@yahoo");

// Se pasa el filtro con la funcion esCorreo y filter().
function usuarioYahoo (lista){
    lista = nuevaLista.filter(usuario => esCorreo(usuario.contacto.correoelectronico));
    return lista;
};


// Se muestra el JSON en formato indentado (1 espacio).
console.log(`Lista de usuarios con correo electrónico de Yahoo: ${JSON.stringify(usuarioYahoo(nuevaLista),null,1)}`);



//----------------------------------------------------------------------------------------
// Punto 4:

// Función filtro boolean.
const esClaroMayorEdadEspanya = (usuario) => {
  return (
    usuario.preferencias.tema === "claro" &&
    usuario.preferencias.edad >= 18 &&
    usuario.contacto.direccion.pais === "España"
  );
};


// Se pasa el filtro con la funcion esCorreo y filter().
function usuarioClaroMayorEdadEspanya (lista){
    lista = nuevaLista.filter(usuario => esClaroMayorEdadEspanya(usuario));
    return lista;
};

// Se muestra el JSON en formato indentado (1 espacio).
console.log(`Lista de usuarios con tema claro, mayoría de edad y pais España: ${JSON.stringify(usuarioClaroMayorEdadEspanya(nuevaLista),null,1)}`);



//----------------------------------------------------------------------------------------
// Punto 5:
// la antepenúltima que devuelva un array de usuarios a los que les falte algún dato en su ficha.

// Función filtro boolean.
const estaVacio = (valor) =>
  valor === null || valor === undefined || (typeof valor === "string" && valor === "");

// Recorre el objeto usuario y devuelve un boolean true si hay huecos vacíos.
// ¡¡¡ Función con RECURSIVIDAD !!!
const hayHucosVacios = (usuario) => {
  for(let clave in usuario) {
    const valor = usuario[clave]; 

    if(estaVacio(valor)) return true;

    if (typeof valor === "object" && valor !== null) {
      if(hayHucosVacios(valor)) return true; // IMPORTANTE: Usar recursividad con el valor para acceder a los subvalores.
    }
  }
  return false;
}

// Filtra los usuarios con "HayHuecosVacios" recorriendo todo el listado de usuarios.
let usuariosDatosVacios = (lista) => {
    let nuevaLista = [];
    lista.map((usuario) => {
        if(hayHucosVacios(usuario)){
            nuevaLista = [...nuevaLista, usuario];
        }
    }
    );
    return nuevaLista; // Te imprime el listado de los usuarios con algún dato vacío.
}

// Impresión de lista
console.log("Lista de usuarios con algún campo vacío:");
console.log(usuariosDatosVacios(nuevaLista));




//----------------------------------------------------------------------------------------
// Punto 6:
// una penúltima función que añada una nueva clave apellidos a todos los usuarios (el valor por defecto será “No indicado”).

const anadirApellidos = (lista, porDefecto = "No indicado") => {
  const nueva = lista.map((usuario) => {
    const apellidos = usuario.apellidos ? usuario.apellidos : porDefecto;
    return { ...usuario, apellidos };
  });
  return nueva;
};

// Uso:
const listaConApellidos = anadirApellidos(nuevaLista);

// Muestra el ARRAY (no lo metas en template literal para evitar [object Object])
console.log("Lista de usuarios con apellidos:", listaConApellidos);

// Si quieres verlo “bonito” como JSON:
console.log(JSON.stringify(listaConApellidos, null, 1));