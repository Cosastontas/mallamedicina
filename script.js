/* Render + interactividad desde PLAN_MALLA:
   - Materias en columna, alto uniforme
   - Habilita (rosa fuerte) si cumple TODOS los requisitos
   - Clic = aprobar (lila) / clic otra vez = revertir
*/
function getRequisitos(id) {
  const nodo = window.PLAN_MALLA?.[id];
  return Array.isArray(nodo?.requisitos) ? nodo.requisitos : [];
}

function requisitoCumplido(req, aprobadasSet) {
  // Requisito por id exacto
  const exact = document.getElementById(req);
  if (exact) return aprobadasSet.has(req);

  // Requisito agrupado por prefijo (req-*)
  const grupo = [...document.querySelectorAll(`.materia[id^="${req}-"]`)];
  if (grupo.length === 0) return false;
  return grupo.every(m => aprobadasSet.has(m.id));
}

function recalcEstados() {
  const materias = [...document.querySelectorAll('.materia')];
  const aprobadas = new Set(materias.filter(m => m.classList.contains('aprobada')).map(m => m.id));

  materias.forEach(m => {
    const reqs = getRequisitos(m.id);
    const wasUnlocked = m.dataset.unlocked === 'true';
    const isUnlocked = reqs.every(r => requisitoCumplido(r, aprobadas));

    m.dataset.unlocked = isUnlocked ? 'true' : 'false';
    m.classList.remove('habilitada','bloqueada','recien');

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

function onMateriaClick(e) {
  const m = e.currentTarget;
  // Solo si está habilitada o ya aprobada
  if (!(m.classList.contains('habilitada') || m.classList.contains('aprobada'))) return;

  m.classList.toggle('aprobada');
  if (!m.classList.contains('aprobada')) m.classList.remove('recien');
  recalcEstados();
}

function render() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  // Agrupar por ciclo
  const porCiclo = {};
  Object.entries(window.PLAN_MALLA).forEach(([id, nodo]) => {
    porCiclo[nodo.ciclo] = porCiclo[nodo.ciclo] || [];
    porCiclo[nodo.ciclo].push({ id, ...nodo });
  });

  // Pintar ciclos
  const ciclos = Object.keys(porCiclo).map(n => +n).sort((a,b)=>a-b);
  ciclos.forEach(cicloNum => {
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

document.addEventListener('DOMContentLoaded', () => {
  if (!window.PLAN_MALLA) {
    console.error('PLAN_MALLA no está definido (revisa plan.js)');
    return;
  }
  render();
  recalcEstados();
});
