const API_URL = "https://trabajofinal-production-4e79.up.railway.app";

export async function getTodos() {
  const res = await fetch(`${API_URL}/todos`);
  if (!res.ok) throw new Error("Error obteniendo lista");
  return res.json();
}

export async function createTodo(data) {
  const res = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error("Error creando todo");
  return res.json();
}
