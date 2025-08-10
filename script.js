/* Interactividad desde window.PLAN_MALLA (plan.js):
   - Materias en columna, alto uniforme
   - Habilita (rosa fuerte) si cumple TODOS los requisitos
   - Clic = aprobar (lila) / clic otra vez = revertir
   - No bloquea por ciclo: basta con cumplir requisitos, aunque otros ramos del ciclo previo falten
*/

// Utilidad: obtener requisitos de una materia
function getRequisitos(id) {
  const nodo = window.PLAN_MALLA?.[id];
  return Array.isArray(nodo?.requisitos) ? nodo.requisitos : [];
}

// Chequear si un requisito se cumple dadas las aprobadas
function requisitoCumplido(req, aprobadasSet) {
  // Requisito por id exacto
  if (window.PLAN_MALLA?.[req]) {
    return aprobadasSet.has(req);
  }
  // Requisito por grupo (prefijo), ej: "clinica-ii-*"
  const grupo = [...document.querySelectorAll(`.materia[id^="${req}-"]`)];
  if (grupo.length === 0) return false;
  return grupo.every(m => aprobadasSet.has(m.id));
}

// Recalcular y pintar estados (bloqueada/habilitada) según requisitos
function recalcEstados() {
  const materias = [...document.querySelectorAll('.materia')];
  const aprobadas = new Set(materias.filter(m => m.classList.contains('aprobada')).map(m => m.id));

  materias.forEach(m => {
    const reqs = getRequisitos(m.id);
    const wasUnlocked = m.dataset.unlocked === 'true';
    const isUnlocked = reqs.every(r => requisitoCumplido(r, aprobadas));

    m.dataset.unlocked = isUnlocked ? 'true' : 'false';
    m.classList.remove('habilitada', 'bloqueada', 'recien');

    // Si ya está aprobada, se mantiene lila
    if (m.classList.contains('aprobada')) return;

    if (isUnlocked) {
      m.classList.add('habilitada');
      if (!wasUnlocked) {
        m.classList.add('recien');
        setTimeout(() => m.classList.remove('recien'), 1400);
      }
    } else {
      m.classList.add('bloqueada');
    }
  });
}

// Click: aprobar / revertir (solo si habilitada o ya aprobada)
function onMateriaClick(e) {
  const m = e.currentTarget;
  if (!(m.classList.contains('habilitada') || m.classList.contains('aprobada'))) return;

  m.classList.toggle('aprobada');
  if (!m.classList.contains('aprobada')) m.classList.remove('recien');
  recalcEstados();
}

// Render de columnas por ciclo
function render() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  if (!window.PLAN_MALLA) {
    app.textContent = 'No se encontró PLAN_MALLA. Verifica plan.js';
    return;
  }

  // Agrupar materias por ciclo
  const porCiclo = {};
  Object.entries(window.PLAN_MALLA).forEach(([id, nodo]) => {
    porCiclo[nodo.ciclo] = porCiclo[nodo.ciclo] || [];
    porCiclo[nodo.ciclo].push({ id, ...nodo });
  });

  // Pintar ciclos ordenados
  Object.keys(porCiclo).map(n => +n).sort((a,b)=>a-b).forEach(cicloNum => {
    const sem = document.createElement('div');
    sem.className = 'semestre';
    sem.dataset.ciclo = cicloNum;

    const h2 = document.createElement('h2');
    h2.textContent = `${cicloNum}° Ciclo`;
    sem.appendChild(h2);

    const grid = document.createElement('div');
    grid.className = 'sem-grid';

    porCiclo[cicloNum]
      .sort((a,b)=> a.nombre.localeCompare(b.nombre,'es',{sensitivity:'base'}))
      .forEach(m => {
        const d = document.createElement('div');
        d.className = 'materia';
        d.id = m.id;

        const label = document.createElement('span');
        label.className = 'label';
        label.textContent = m.nombre;

        d.appendChild(label);
        d.title = m.requisitos.length ? `Requisitos: ${m.requisitos.join(', ')}` : 'Sin requisitos';
        d.addEventListener('click', onMateriaClick);

        grid.appendChild(d);
      });

    sem.appendChild(grid);
    app.appendChild(sem);
  });
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  render();
  recalcEstados(); // ← aquí se habilitan automáticamente las de 1er ciclo (sin requisitos)
});
