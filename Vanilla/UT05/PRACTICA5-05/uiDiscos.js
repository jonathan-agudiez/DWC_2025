"use strict";

// Crea la tarjeta de disco
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

  const footer = document.createElement("div");
  footer.className = "tarjeta-footer";

  const info = document.createElement("span");
  info.textContent = `ID: ${disco.id}`;
  footer.appendChild(info);

  const btnEliminar = document.createElement("button");
  btnEliminar.className = "btn-eliminar";
  btnEliminar.textContent = "Eliminar";
  btnEliminar.dataset.id = disco.id;  

  footer.appendChild(btnEliminar);
  tarjeta.appendChild(footer);

  return tarjeta;
};

// Si el listado tiene discos, ocultamos el listado vacío.
const actualizarMensajeVacio = (coleccion, listadoVacio) => {
  if (coleccion.discos.length > 0) {
    listadoVacio.classList.add("oculto");
  } else {
    listadoVacio.classList.remove("oculto");
  }
};
// 
const renderizarColeccion = (coleccion, gridDiscos, listadoVacio) => {
  // Limpiamos el grid.
  gridDiscos.innerHTML = "";

  actualizarMensajeVacio(coleccion, listadoVacio);
  // Si hay discos pinta los datos del json en las tarjetas y las añade en el grid.
  for (let i = 0; i < coleccion.discos.length; i++) {
    const disco = coleccion.discos[i];
    const tarjeta = crearTarjetaDisco(disco);
    gridDiscos.appendChild(tarjeta);
  }
};

const filtrarColeccion = (texto, coleccion, gridDiscos) => {
  // trim() para eliminar espacios y minusculas para evitar errores.
  const termino = texto.trim().toLowerCase();
  // Si no hay texto en el input, muestra toda la colección, sino los filtra o por nombre o por grupo. 
  const discosFiltrados = termino === "" ? coleccion.discos
    : coleccion.discos.filter((disco) => {
          const nombre = disco.nombre.toLowerCase();
          const grupo = disco.grupo.toLowerCase();
          return nombre.includes(termino) || grupo.includes(termino);
        });

  // Limpiamos el grid de discos para después mostrar el grid filtrado.
  gridDiscos.innerHTML = "";

  if (discosFiltrados.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No hay discos que coincidan con la búsqueda.";
    gridDiscos.appendChild(mensaje);
  } else {
    discosFiltrados.forEach((disco) => {
      const tarjeta = crearTarjetaDisco(disco);
      gridDiscos.appendChild(tarjeta);
    });
  }
};

export { crearTarjetaDisco, actualizarMensajeVacio, renderizarColeccion, filtrarColeccion };
