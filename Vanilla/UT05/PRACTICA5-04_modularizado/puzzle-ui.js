// puzzle-ui.js
"use strict";

/** Anexa una lista de nodos al padre, en orden */
export function appendInOrder(parent, nodes) {
  for (let i = 0; i < nodes.length; i++) parent.appendChild(nodes[i]);
  return true;
}

/** Mueve por id una pieza a un destino */
export function moveByIdTo(id, destino) {
  const pieza = document.getElementById(id);
  if (!pieza) return false;
  destino.appendChild(pieza);
  return true;
}

/** Limpia el panel de resultado */
export function clearResultado(el) {
  el.textContent = "";
  el.classList.remove("ok", "mal");
  return true;
}

/** Pinta OK */
export function showOk(el) {
  el.textContent = "OK";
  el.classList.remove("mal");
  el.classList.add("ok");
  return true;
}

/** Pinta INCORRECTO */
export function showIncorrect(el) {
  el.textContent = "INCORRECTO";
  el.classList.remove("ok");
  el.classList.add("mal");
  return true;
}

/** Reordena visualmente un panel con los ids dados (en ese orden) */
export function reorderPanelByIds(panel, ids) {
  for (let i = 0; i < ids.length; i++) {
    const pieza = document.getElementById(ids[i]);
    if (pieza) panel.appendChild(pieza);
  }
  return true;
}
