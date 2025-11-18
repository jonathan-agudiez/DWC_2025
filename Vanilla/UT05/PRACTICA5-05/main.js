"use strict";

import { mostrarError } from "./Bibliotecas/principal.js";
import {
  obtenerEstadoValidacion,
  validarFormulario,
  obtenerMensajesError,
  crearDisco
} from "./ejercicio01.js";

window.onload = () => {

  // Se identifican los elementos del DOM.
  const form = document.getElementById("formDisco");
  const inputNombre = document.getElementById("nombre");
  const inputCaratula = document.getElementById("caratula");
  const inputGrupo = document.getElementById("grupo");
  const inputAnio = document.getElementById("anio");
  const selectGenero = document.getElementById("genero");
  const inputLocalizacion = document.getElementById("localizacion");
  const checkboxPrestado = document.getElementById("prestado");
  const contErrores = document.getElementById("mensajeErrores");

  const btnGuardar = document.getElementById("btn-guardar");
  const btnMostrar = document.getElementById("btn-mostrar");

  const gridDiscos = document.getElementById("grid-discos");
  const listadoVacio = document.getElementById("listado-vacio");

    // Se crea un objeto para JSON.
  let coleccion = { discos: [] };


  // Se obtienen los datos del formulario.
  const obtenerDatosFormulario = () => {
    return {
      nombre: inputNombre.value,
      grupo: inputGrupo.value,
      anio: inputAnio.value,
      genero: selectGenero.value,
      localizacion: inputLocalizacion.value,
      caratula: inputCaratula.value,
      prestado: checkboxPrestado.checked
    };
  };

  // Se validan los inputs/change.
  inputNombre.addEventListener("input", () => {
    const estado = obtenerEstadoValidacion(obtenerDatosFormulario());
    mostrarError(inputNombre, estado.nombre);
  });

  inputGrupo.addEventListener("input", () => {
    const estado = obtenerEstadoValidacion(obtenerDatosFormulario());
    mostrarError(inputGrupo, estado.grupo);
  });

  inputAnio.addEventListener("input", () => {
    const estado = obtenerEstadoValidacion(obtenerDatosFormulario());
    mostrarError(inputAnio, estado.anio);
  });

  selectGenero.addEventListener("change", () => {
    const estado = obtenerEstadoValidacion(obtenerDatosFormulario());
    mostrarError(selectGenero, estado.genero);
  });

  inputLocalizacion.addEventListener("input", () => {
    const estado = obtenerEstadoValidacion(obtenerDatosFormulario());
    mostrarError(inputLocalizacion, estado.localizacion);
  });


  // Botón Guardar (se añade disco a coleccion).
  btnGuardar.addEventListener("click", (e) => {
    e.preventDefault();

    const datos = obtenerDatosFormulario();
    const estado = obtenerEstadoValidacion(datos);
    const esValido = validarFormulario(estado);

    // Se muestran los errores de cada input.
    mostrarError(inputNombre, estado.nombre);
    mostrarError(inputGrupo, estado.grupo);
    mostrarError(inputAnio, estado.anio);
    mostrarError(selectGenero, estado.genero);
    mostrarError(inputLocalizacion, estado.localizacion);

    // Se imprimen los mensajes de error con formato correcto.
    const mensajes = obtenerMensajesError(estado);

    if (mensajes.length > 0) {
      let texto = "";
      for (let i = 0; i < mensajes.length; i++) {
        texto += mensajes[i] + "<br>";
      }
      contErrores.innerHTML = texto;
      contErrores.classList.add("activo");
    } else {
      contErrores.innerHTML = "";
      contErrores.classList.remove("activo");
    }

    // Solo si el formulario es válido, se guardan y se limpia el form.
    if (esValido) {
      // Se crea disco y se añade a la colección.
      const nuevoDisco = crearDisco(datos);
      coleccion = {
        discos: [...coleccion.discos, nuevoDisco]
      };

      // Se limpia el formulario y estilos de error.
      form.reset();
      inputNombre.classList.remove("campo-error");
      inputGrupo.classList.remove("campo-error");
      inputAnio.classList.remove("campo-error");
      selectGenero.classList.remove("campo-error");
      inputLocalizacion.classList.remove("campo-error");
      contErrores.innerHTML = "";
      contErrores.classList.remove("activo");

      // Se actualiza el mensaje "no hay discos" (que está en html). 
      actualizarMensajeVacio();
    }
  });


  
  // Esta función la generé con ayuda de IA por la complejidad del CSS.
  // Crea el elemento card con el contenido del disco.
  const crearTarjetaDisco = (disco) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-disco";

    const img = document.createElement("img");
    img.src = disco.caratula || "";
    tarjeta.appendChild(img);

    const cuerpo = document.createElement("div");
    cuerpo.className = "tarjeta-cuerpo";
    tarjeta.appendChild(cuerpo);

    const titulo = document.createElement("div");
    titulo.className = "titulo-disco";
    titulo.textContent = disco.nombre;
    cuerpo.appendChild(titulo);

    const grupo = document.createElement("div");
    grupo.className = "grupo-disco";
    grupo.textContent = disco.grupo;
    cuerpo.appendChild(grupo);

    // Contenedor de etiquetas
    const etiquetas = document.createElement("div");
    etiquetas.className = "etiquetas";
    cuerpo.appendChild(etiquetas);

    const etiquetaGenero = document.createElement("span");
    etiquetaGenero.className = "etiqueta";
    etiquetaGenero.textContent = disco.genero;
    etiquetas.appendChild(etiquetaGenero);

    const etiquetaAnio = document.createElement("span");
    etiquetaAnio.className = "etiqueta";
    etiquetaAnio.textContent = "Año: " + disco.anio;
    etiquetas.appendChild(etiquetaAnio);

    const etiquetaLocalizacion = document.createElement("span");
    etiquetaLocalizacion.className = "etiqueta";
    etiquetaLocalizacion.textContent = "Ubicación: " + disco.localizacion;
    etiquetas.appendChild(etiquetaLocalizacion);

    if (disco.prestado) {
      const etiquetaPrestado = document.createElement("span");
      etiquetaPrestado.className = "etiqueta etiqueta-prestado";
      etiquetaPrestado.textContent = "Prestado";
      etiquetas.appendChild(etiquetaPrestado);
    }

    return tarjeta;
  };

  // Actualiza el mensaje "no hay discos" usando la clase .oculto
  const actualizarMensajeVacio = () => {
    if (coleccion.discos.length > 0) {
      listadoVacio.classList.add("oculto");
    } else {
      listadoVacio.classList.remove("oculto");
    }
  };


  const renderizarColeccion = () => {
    gridDiscos.innerHTML = "";

    actualizarMensajeVacio();

    // Añadimos el contenido a cada tarjeta y agregamos cada tarjeta al grid de discos.
    for (let i = 0; i < coleccion.discos.length; i++) {
      const disco = coleccion.discos[i];
      const tarjeta = crearTarjetaDisco(disco);
      gridDiscos.appendChild(tarjeta);
    }
  };


  //Botón de mostrar.
  btnMostrar.addEventListener("click", () => {
    renderizarColeccion();
  });

};
