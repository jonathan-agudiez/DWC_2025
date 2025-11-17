"use strict";

const pintarUsuariosJSON = (json) => {
  let texto = "";
  json.map((v, i, a) => {
    texto += `<div class="fila"><img class="borrar" src="./img/borrar.png" id="${v.id}"><div class="celda">${v.nombre} ${v.apellido} nacido en el año ${v.fecha}</div></div>`;
  });
  return texto;
};

const borrarUsuario = (usuarios, idUsuario) => {
  return usuarios.filter((usuario) => usuario.id !== idUsuario);
};

const limpiarFormulario = (formulario) => {
  formulario.reset();
};

export { pintarUsuariosJSON, borrarUsuario, limpiarFormulario };
