// principal.js
"use strict";

import {
  getChildrenArray,
  getIds,
  setDraggable,
  shuffleArray,
  evaluateSlots,
  getDraggedIdFromEvent,
  isEmptySlotTarget,
} from "./puzzle-logic.js";

import {
  appendInOrder,
  moveByIdTo,
  clearResultado,
  showOk,
  showIncorrect,
  reorderPanelByIds,
} from "./puzzle-ui.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
  const contenedorSuperior = document.getElementById("arrastrables");
  const contenedorInferior = document.getElementById("soltables");
  const resultado = document.getElementsByClassName("resultado")[0];
  const btnReiniciar = document.getElementById("btn-reiniciar");

  // 1) Preparar piezas + guardar orden inicial
  const piezasIniciales = getChildrenArray(contenedorSuperior);
  setDraggable(piezasIniciales);
  const ordenInicial = getIds(piezasIniciales);

  // 2) (Opcional) aleatorizar el panel superior SIN cambiar ids

  const mezcla = shuffleArray(piezasIniciales);
  appendInOrder(contenedorSuperior, mezcla);

  // 3) Delegación de eventos — fuera de bucles

  // dragstart (superior e inferior)
  contenedorSuperior.addEventListener("dragstart", onDragStart, false);
  contenedorInferior.addEventListener("dragstart", onDragStart, false);

  // dragover (superior e inferior)
  contenedorSuperior.addEventListener("dragover", (e) => e.preventDefault(), false);
  contenedorInferior.addEventListener("dragover", (e) => e.preventDefault(), false);

  // drop (superior)
  contenedorSuperior.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = getDraggedIdFromEvent(e);
    moveByIdTo(id, contenedorSuperior);
    clearResultado(resultado);
  }, false);

  // drop (inferior)
  contenedorInferior.addEventListener("drop", (e) => {
    e.preventDefault();

    if (!isEmptySlotTarget(e)) return;

    const id = getDraggedIdFromEvent(e);
    moveByIdTo(id, e.target);

    const slots = contenedorInferior.getElementsByClassName("slot");
    const { completo, aciertos } = evaluateSlots(slots);

    clearResultado(resultado);

    if (!completo) {
      // aún no están los 9 → no mostramos nada
      return;
    }

    if (aciertos === 9) showOk(resultado);
    else showIncorrect(resultado);
  }, false);

  // Reiniciar (usa orden inicial guardado)
  btnReiniciar.addEventListener("click", (e) => {
    e.preventDefault();
    reorderPanelByIds(contenedorSuperior, ordenInicial);
    clearResultado(resultado);
  }, false);
}

function onDragStart(e) {
  // Si empieza en IMG → usar id del padre .arrastrable
  if (e.target.classList.contains("imagen")) {
    e.dataTransfer.setData("id", e.target.parentElement.id);
    return true;
  }
  // Si empieza en el DIV .arrastrable
  if (e.target.classList.contains("arrastrable")) {
    e.dataTransfer.setData("id", e.target.id);
    return true;
  }
  return false;
}
