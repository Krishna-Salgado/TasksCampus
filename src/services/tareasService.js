const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export async function fetchTareas() {
  const res = await fetch(`${API_URL}?_limit=10`);
  if (!res.ok) throw new Error('Error al cargar tareas');
  return res.json();
}

export async function createTarea(tarea) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tarea),
  });
  if (!res.ok) throw new Error('Error al crear tarea');
  return res.json();
}

export async function updateTarea(id, datos) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });
  if (!res.ok) throw new Error('Error al actualizar');
  return res.json();
}

export async function deleteTarea(id) {
  const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Error al eliminar');
  return res.json();
}