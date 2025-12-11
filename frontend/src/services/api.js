const API_URL = import.meta.env.VITE_API_URL;

export async function getTodos() {
    const res = await fetch(`${API_URL}/todos`);
    return res.json();
}

export async function createTodo(data) {
    const res = await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return res.json();
}

export async function updateTodo(id, data) {
    const res = await fetch(`${API_URL}/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return res.json();
}

export async function deleteTodo(id) {
    await fetch(`${API_URL}/todos/${id}`, { method: "DELETE" });
}
