"use strict";

/**
 * AJAX (Asynchronous JavaScript And XML)
 * -------------------------------------------------------------------------
 *  • XHTML y CSS para la presentación de la página,
 *  • DOM para la manipulación dinámica de elementos de la página,
 *  • formatos de intercambio de información como JSON o XML,
 *  • el objeto XMLHttpRequest para el intercambio asíncrono de información,
 *  • JavaScript para aplicar las anteriores tecnologías.
 *
 * Ventajas  -> reducir cantidad de información a enviar,
 *           -> mayor dinamismo en la UI y
 *           -> mayor control de las respuestas del servidor.
 */


window.onload = () => {
  // Se recogen los elementos de la web que necesitaré en lo sucesivo.
  const planetas = document.getElementById("planetas");
  let feo = 1;

  // *** Código asíncrono *******************************************

  /* console.log(`A. Se va a sumar uno a la variable feo que es ${feo}.`);
  feo++;
  console.log(`B. Proceso terminado.`);
  console.log(`C. El valor de feo es ${feo}.`); */

  // Se simula un retraso a través de setTimeOut().

  /* console.log(`A. Se va a sumar uno a la variable feo que es ${feo}.`);
  setTimeout(() => {
    feo++;
    console.log(`B. Proceso terminado.`);
  }, 1000);
  console.log(`C. El valor de feo es ${feo}.`); */

  /*** Promesas *****************************************************
   *
   * Permite el encadenamiento de tareas asíncronas fácilmente (then).
   *
   * const promesa = new Promise ( (resolver, rechazar) => { código asíncrono } );
   *
   * Recibe como parámetro dos "return":
   *    --> resolver (cuando la promesa ha finalizado de forma correcta) y
   *    --> rechazar (cuando la promesa ha finalizadp de forma errónea).
   *
   * Estados de una promesa:
   *    --> Pendiente   (pending),
   *    --> Completada  (fullfiled),
   *    --> Rechazada   (rejected) y
   *    --> Arreglada   (settled) Una promesa sólo se puede hacer una vez y entra en este estado.
   *
   */

  /******************************
   * ¿Cómo funciona una promise?
   *
   * Se crea un objeto del tipo promise.
   *  */

  /* const promesa_fea = new Promise((resolver) => {
    resolver("Hola desde una promesa fea."); // Ejemplo con código síncrono.
  }); */

  // Se imprime el objeto de tipo promise.
  /* console.log(promesa_fea);
  console.log(promesa_fea.value); // undefined --> Hay que consumir esa promesa. */

  // Se consume el contenido del objeto promise.

  /* promesa_fea.then((datos) => {
    console.log(datos);
  }); */

  // *** Arreglando el código con una promise (con resolve) *******************************

  /* const promesa = new Promise((resolver) => {
    setTimeout(() => {
      feo++;
      console.log(`B. Proceso terminado`);
      resolver(feo); // Devuelve la variable "feo" tras actuar sobre ella.
    }, 1000);
  });

  console.log(`A. Se va a sumar uno a la variable feo que es ${feo}`);
  promesa.then((datos) => {
    console.log(`C. El valor de feo es: ${datos}`);
  }); */

  // *** Promesa con resolve y reject ************************************

  //feo = "burro"; // Se cambia el valor para que falle.

  /* const promesa = new Promise((resolver, rechazar) => {
    setTimeout(() => {
      if (feo++) {
        console.log(`B. Proceso terminado`);
        resolver(feo); // Añadir la respuesta de la promesa.
      } else {
        rechazar(new Error("El valor de feo no es válido.")); // Se rechaza la respuesta.
      }
    }, 1000);
  });

  console.log(`A. Se va a sumar uno a la variable feo = ${feo}`);
  promesa
    .then((datos) => {
      console.log(`C. El valor de feo es: ${datos}`);
    })
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => {
      console.log(`Terminó el código asíncrono.`);
    }); */

  /**********************************************************************
   * API fetch (solicitudes externas al objeto document).
   *
   *    fetch(acceso).then(respuesta)[.then(datos)].catch(error);
   *
   *  Parámetros:
   *    acceso    --> origen de los datos (url, API, JSON...) y
   *    cabeceras --> indica las características de la transferencia de datos.
   *
   *  Propiedades interesantes:
   *    status    --> código de estado (en número),
   *    ok        --> booleano que indica si la respuesta fue exitosa (en el rango 200-299 de estado) y
   *    headers   --> objeto Headers asociado a la respuesta.
   *
   *  Métodos interesantes:
   *    blob()    --> devuelve una promesa que se resuelve con un BLOB (binario),
   *    fromData  --> devuelve una promesa que se resuelve con un objeto de fomulario,
   *    json()    --> devuelve una promesa que se resuelve con un objeto JSON y
   *    text()    --> devuelve una promesa que se resuelve con una cadena de texto.
   *
   * */

  // Fuentes de obtención de datos.
  const fichero = "./assets/feos.json";
  const fichero_falso = "guapos.json";
  const url = "https://swapi.info/api/planets";
  //const url = "http://swapi.py4e.com/api/planets"; // Alternativa

  // Petición fuera del objeto window (pero en el mismo servidor).
  /* fetch(fichero) // Se realiza la petición a través del objeto XMLHttpRequest.
    .then((respuesta) => {
      console.log(respuesta); // Se obtiene una promesa como respuesta.
      return respuesta.json(); // Se consume la promesa en formato JSON.
    })
    .then((datos) => {
      // Se pasa a la siguiente función callback.
      console.log(datos); // Se hace algo con los datos.
    }); */

  /**********************************************************************
   * Gestión de errores.
   *
   * .catch permite gestionar los errores lanzados manual o automáticamente.
   *    -> de forma automática gestionada por el propio fetch.
   *    -> de forma manual con la instrucción throw new Error("Texto y código personalizados");
   *
   * Siempre es mejor tener el control de la gestión de errores y así se hará.
   *
   */

  // Gestión de errores de forma automática.
  /*  fetch(fichero_falso)
    .then((respuesta) => {
      console.log(respuesta);
      return respuesta.json(); // Esta conversión dará error.
    })
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      // Se recoge el error y se gestiona.
      console.log(error);
      console.log(`Ha habido algún error: ${error.message}.`);
    }); */

  // Gestión de errores de forma manual.
  /* fetch(fichero_falso)
    .then((respuesta) => {
      // Si se ha producido un error (respuesta.ok no es true)...
      if (!respuesta.ok) {
        throw new Error("404");
      } else {
        return respuesta.json(); // Sólo se ejecuta si todo ha ido bien.
      }
    })
    .then((datos) => {
      if (datos.length) {
        console.log(datos); // Si tiene datos los muestro.
      } else {
        throw new Error("501"); // Si no lanzo un error.
      }
    })
    .catch((error) => {
      // Se recoge el error y se gestiona (por supuesto, en una función aparte).
      error.message === "404" && console.log(`Información fea no encontrada.`);
      error.message === "501" &&
        console.log(`Información del fichero feo no válida.`);
    }); */

  /** Petición a un servidor externo. ********************** */
  /* fetch(url)
    .then((respuesta) => {
      console.log("Conexión realizada con éxito.");
      console.log(respuesta);
      //return respuesta.text();
      return respuesta.json();
    })
    .then((datos) => {
      console.log("Mostrando los datos...");
      console.log(datos);
    }); */

  // ¡¡¡ATENCIÖN!!! Código nefasto, no utilizar bajo ningún concepto.
  fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      // Se muestran por consola.
      console.log(datos);
      // Se introducen en el DOM con una plantilla.
      let plantilla = "";
      Array.isArray(datos) && datos.length
        ? datos.map((planeta) => {
            let gente = parseInt(planeta.population)
              ? parseInt(planeta.population).toLocaleString("es-ES")
              : "Desconocido";
            plantilla += `<div class="planeta"><h2>${planeta.name}</h2><p>Población: ${gente}</p></div>`;
          })
        : (plantilla = "<h3>No se han encontrado planetas en la galaxia.</h3>");

      planetas.innerHTML = plantilla;
    })
    .catch((error) => {
      // Problemas con la gestión de errores según el servidor.
      console.error(error);
    });

  // Petición simplificada ¡¡¡Cuidado con la sintaxis y el return!!!
  /* fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      console.log(datos);
    })
    .catch((error) => {
      console.error(error);
    }); */
}; // Fin del window.load.
