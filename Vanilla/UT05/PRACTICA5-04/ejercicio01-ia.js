// ejercicio01.js
// DnD con swap + validación SOLO cuando el 3x3 está completo + botón Reiniciar + estado en .resultado

const panel = document.getElementById('arrastrables');
const grid = document.querySelector('.drop-grid');
const slots = Array.from(document.querySelectorAll('.drop-grid .slot'));
const btnReiniciar = document.getElementById('btn-reiniciar');
const resultadoEl = document.querySelector('.resultado');

let dragSourceParent = null; // padre original de la pieza

// ======= Inicializar arrastrables =======
function initDraggables(root = document) {
  const pieces = root.querySelectorAll('.arrastrable');
  pieces.forEach((el) => {
    el.setAttribute('draggable', 'true');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-grabbed', 'false');

    el.removeEventListener('dragstart', onDragStart);
    el.removeEventListener('dragend', onDragEnd);
    el.addEventListener('dragstart', onDragStart);
    el.addEventListener('dragend', onDragEnd);

    // Doble click → devolver al panel
    el.addEventListener('dblclick', () => {
      panel.appendChild(el);
      maybeEvaluate(); // mensaje desaparece si ya no está completo
    });
  });
}

function onDragStart(e) {
  const piece = e.currentTarget;
  piece.classList.add('is-dragging');
  piece.setAttribute('aria-grabbed', 'true');
  dragSourceParent = piece.parentElement;

  e.dataTransfer.setData('text/plain', piece.id);
  e.dataTransfer.effectAllowed = 'move';

  const img = piece.querySelector('img');
  if (img) {
    try { e.dataTransfer.setDragImage(img, img.width / 2, img.height / 2); } catch {}
  }
}

function onDragEnd(e) {
  const piece = e.currentTarget;
  piece.classList.remove('is-dragging');
  piece.setAttribute('aria-grabbed', 'false');
  dragSourceParent = null;
}

// ======= Utilidades de slot =======
function isSlot(el) {
  return el && el.classList && el.classList.contains('slot');
}
function getSlotChild(slot) {
  return isSlot(slot) ? slot.firstElementChild : null;
}

// ======= Evaluación =======
function getNumericId(pieceEl) {
  if (!pieceEl?.id) return null;
  const m = pieceEl.id.match(/\d+/);
  return m ? Number(m[0]) : null;
}
function allSlotsFilled() {
  const s = Array.from(document.querySelectorAll('.drop-grid .slot'));
  return s.length === 9 && s.every(sl => !!sl.firstElementChild);
}
function isCorrectOrder() {
  const s = Array.from(document.querySelectorAll('.drop-grid .slot'));
  const esperado = [1,2,3,4,5,6,7,8,9];
  for (let i = 0; i < 9; i++) {
    const n = getNumericId(s[i].firstElementChild);
    if (n !== esperado[i]) return false;
  }
  return true;
}

function setResultado(text, stateClass) {
  resultadoEl.classList.remove('ok','ko','show');
  if (!text) {
    resultadoEl.textContent = '';
    return;
  }
  resultadoEl.textContent = text;
  if (stateClass) resultadoEl.classList.add(stateClass);
  // pequeña animación
  resultadoEl.classList.add('show');
}

/**
 * Solo evalúa cuando está completo:
 * - Si NO está completo → NO muestra texto (tarjeta queda neutra).
 * - Si está completo → muestra OK!/Incorrecto!
 */
function maybeEvaluate() {
  if (!allSlotsFilled()) {
    setResultado('', null); // limpio
    return;
  }
  const ok = isCorrectOrder();
  if (ok) setResultado('OK!', 'ok');
  else    setResultado('Incorrecto!', 'ko');
}

// ======= Eventos en SLOTS (drop + swap) =======
slots.forEach((slot) => {
  slot.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  });

  slot.addEventListener('dragenter', (e) => {
    e.preventDefault();
    slot.classList.add('is-over');
  });

  slot.addEventListener('dragleave', () => {
    slot.classList.remove('is-over');
  });

  slot.addEventListener('drop', (e) => {
    e.preventDefault();
    slot.classList.remove('is-over');

    const pieceId = e.dataTransfer.getData('text/plain');
    if (!pieceId) return;
    const piece = document.getElementById(pieceId);
    if (!piece) return;

    const targetSlot = e.currentTarget;
    const targetChild = getSlotChild(targetSlot); // puede ser null
    const sourceParent = dragSourceParent;

    if (!targetChild) {
      // slot vacío → mover
      targetSlot.appendChild(piece);
    } else if (isSlot(sourceParent)) {
      // swap entre slots
      const sourceSlot = sourceParent;
      const sourceChild = piece;
      sourceSlot.appendChild(targetChild);
      targetSlot.appendChild(sourceChild);
    } else if (sourceParent === panel) {
      // viene del panel → la pieza del destino vuelve al panel
      panel.appendChild(targetChild);
      targetSlot.appendChild(piece);
    }

    maybeEvaluate(); // evaluar solo si está completo
  });
});

// ======= Devolver al panel (drop sobre panel) =======
panel.addEventListener('dragover', (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
});
panel.addEventListener('dragenter', (e) => {
  e.preventDefault();
  panel.classList.add('is-over');
});
panel.addEventListener('dragleave', () => {
  panel.classList.remove('is-over');
});
panel.addEventListener('drop', (e) => {
  e.preventDefault();
  panel.classList.remove('is-over');

  const pieceId = e.dataTransfer.getData('text/plain');
  if (!pieceId) return;
  const piece = document.getElementById(pieceId);
  if (!piece) return;

  panel.appendChild(piece);
  maybeEvaluate(); // si se quita una pieza, ocultamos el mensaje
});

// ======= Botón REINICIAR =======
function resetPuzzle() {
  slots.forEach(slot => {
    const child = slot.firstElementChild;
    if (child) panel.appendChild(child);
    slot.classList.remove('is-over');
  });
  setResultado('', null); // estado neutro
}
btnReiniciar?.addEventListener('click', () => {
  resetPuzzle();
  btnReiniciar.style.transform = 'scale(0.95)';
  setTimeout(()=> btnReiniciar.style.transform = '', 120);
});

// ======= Inicializar =======
initDraggables();
// sin evaluar al inicio (resultado queda vacío)

// (Opcional) piezas dinámicas en el futuro
const mo = new MutationObserver((mutations) => {
  for (const m of mutations) {
    for (const n of m.addedNodes) {
      if (n.nodeType === 1 && (n.matches?.('.arrastrable') || n.querySelector?.('.arrastrable'))) {
        initDraggables(n.nodeType === 1 ? n : document);
      }
    }
  }
});
mo.observe(document.body, { childList: true, subtree: true });
