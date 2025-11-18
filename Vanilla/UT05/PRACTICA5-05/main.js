"use strict";

import { mostrarError } from "./Bibliotecas/principal.js";
import {
  obtenerEstadoValidacion,
  validarFormulario,
  obtenerMensajesError,
  crearDisco
} from "./ejercicio01.js";

window.onload = () => {

  // --- CAPTURA DE ELEMENTOS DEL DOM ---
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

  const rejillaDiscos = document.getElementById("rejilla-discos");
  const listadoVacio = document.getElementById("listado-vacio");

  // --- COLECCIÓN (OBJETO JSON) ---
  let coleccion = {
    discos: []
  };

  // --- FUNCIÓN AUXILIAR: OBTENER DATOS DEL FORMULARIO ---
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

  // =====================================================
  //  VALIDACIÓN EN VIVO Y GUARDADO (PARTE "DE USUARIO")
  // =====================================================

  // --- VALIDACIÓN EN VIVO (EVENTOS input/change) ---

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


    // --- BOTÓN GUARDAR (AÑADIR DISCO A LA COLECCIÓN) ---

    btnGuardar.addEventListener("click", (e) => {
    e.preventDefault();  // ⬅️ IMPORTANTE

    const datos = obtenerDatosFormulario();
    const estado = obtenerEstadoValidacion(datos);
    const esValido = validarFormulario(estado);

    // marcar errores en inputs
    mostrarError(inputNombre, estado.nombre);
    mostrarError(inputGrupo, estado.grupo);
    mostrarError(inputAnio, estado.anio);
    mostrarError(selectGenero, estado.genero);
    mostrarError(inputLocalizacion, estado.localizacion);

    // mostrar mensajes en contenedor
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

    // si no es válido, no guardamos nada
    if (!esValido) {
        return;
    }

    // crear disco y añadirlo a la colección
    const nuevoDisco = crearDisco(datos);
    coleccion = {
        discos: [...coleccion.discos, nuevoDisco]
    };

    // limpiar formulario y errores visuales
    form.reset();
    inputNombre.classList.remove("campo-error");
    inputGrupo.classList.remove("campo-error");
    inputAnio.classList.remove("campo-error");
    selectGenero.classList.remove("campo-error");
    inputLocalizacion.classList.remove("campo-error");
    contErrores.innerHTML = "";
    contErrores.classList.remove("activo");

    // actualizar mensaje "no hay discos"
    if (coleccion.discos.length > 0) {
        listadoVacio.style.display = "none";
    }
    });


  // ============================================
  //  RENDER DE LA COLECCIÓN (TARJETAS DE DISCOS)
  // ============================================

  // --- FUNCIÓN: CREAR UNA TARJETA DOM PARA UN DISCO ---

  const crearTarjetaDisco = (disco) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-disco";

    const img = document.createElement("img");
    img.src = disco.caratula || "";
    img.alt = "Carátula de " + disco.nombre;
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

    const badges = document.createElement("div");
    badges.className = "badges";
    cuerpo.appendChild(badges);

    const badgeGenero = document.createElement("span");
    badgeGenero.className = "badge";
    badgeGenero.textContent = disco.genero;
    badges.appendChild(badgeGenero);

    const badgeAnio = document.createElement("span");
    badgeAnio.className = "badge";
    badgeAnio.textContent = "Año: " + disco.anio;
    badges.appendChild(badgeAnio);

    const badgeLocalizacion = document.createElement("span");
    badgeLocalizacion.className = "badge";
    badgeLocalizacion.textContent = "Ubicación: " + disco.localizacion;
    badges.appendChild(badgeLocalizacion);

    if (disco.prestado) {
      const badgePrestado = document.createElement("span");
      badgePrestado.className = "badge badge-prestado";
      badgePrestado.textContent = "Prestado";
      badges.appendChild(badgePrestado);
    }

    return tarjeta;
  };

  // --- FUNCIÓN: RENDERIZAR TODA LA COLECCIÓN EN LA REJILLA ---

  const renderizarColeccion = () => {
    rejillaDiscos.innerHTML = "";

    if (coleccion.discos.length === 0) {
      listadoVacio.style.display = "block";
      return;
    }

    listadoVacio.style.display = "none";

    for (let i = 0; i < coleccion.discos.length; i++) {
      const disco = coleccion.discos[i];
      const tarjeta = crearTarjetaDisco(disco);
      rejillaDiscos.appendChild(tarjeta);
    }
  };

  // --- BOTÓN MOSTRAR (PINTAR LA COLECCIÓN) ---

  btnMostrar.addEventListener("click", () => {
    renderizarColeccion();
  });

};
