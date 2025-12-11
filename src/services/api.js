const API_URL = "/api/todos";

export async function fetchTodos() {
  const res = await fetch(API_URL);
  return await res.json();
}

export async function createTodo(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return await res.json();
}
