// puzzle-logic.js
"use strict";

/** Devuelve un array con los hijos directos (Element[]) */
export function getChildrenArray(parent) {
  return Array.from(parent.children);
}

/** Devuelve un array con los ids de los elementos recibidos */
export function getIds(elements) {
  const out = [];
  for (let i = 0; i < elements.length; i++) out.push(elements[i].id);
  return out;
}

/** Marca las piezas como arrastrables (efecto colateral intencionado) */
export function setDraggable(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].setAttribute("draggable", "true");
  }
  return true;
}

/** Fisher–Yates: devuelve una COPIA barajada del array recibido */
export function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

/** Cuenta slots ocupados (número) */
export function countFilledSlots(slots) {
  let c = 0;
  for (let i = 0; i < slots.length; i++) {
    if (slots[i].children.length > 0) c++;
  }
  return c;
}

/** Evalúa aciertos y si está completo. Devuelve { completo, aciertos } */
export function evaluateSlots(slots) {
  const filled = countFilledSlots(slots);
  if (filled !== 9) return { completo: false, aciertos: 0 };

  let aciertos = 0;
  for (let i = 0; i < 9; i++) {
    const img = slots[i].getElementsByTagName("img")[0];
    if (img && Number(img.id) === i + 1) aciertos++;
  }
  return { completo: true, aciertos };
}

/** Extrae el id arrastrado del evento drag */
export function getDraggedIdFromEvent(e) {
  return e.dataTransfer.getData("id");
}

/** Devuelve true si el drop destino es un slot vacío */
export function isEmptySlotTarget(e) {
  return e.target.classList && e.target.classList.contains("slot") && e.target.children.length === 0;
}
