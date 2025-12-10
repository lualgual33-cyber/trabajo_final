// /frontend/src/services/api.js
const BASE = import.meta.env.VITE_BACKEND || '';

export async function listTodos(){
  const res = await fetch(`${BASE}/api/todos`);
  if(!res.ok) throw new Error('Error lista');
  return res.json();
}

export async function createTodo(body){
  const res = await fetch(`${BASE}/api/todos`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(body)
  });
  if(!res.ok) throw new Error('Error crear');
  return res.json();
}

export async function updateTodo(id, body){
  const res = await fetch(`${BASE}/api/todos?id=${id}`, {
    method: 'PUT',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(body)
  });
  if(!res.ok) throw new Error('Error update');
  return res.json();
}

export async function deleteTodo(id){
  const res = await fetch(`${BASE}/api/todos?id=${id}`, { method:'DELETE' });
  if(!res.ok) throw new Error('Error delete');
  return res.json();
}
