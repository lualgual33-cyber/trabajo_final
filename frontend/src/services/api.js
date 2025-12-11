const API_URL = "https://trabajofinal-production-4e79.up.railway.app";

// Obtener todos
export async function getTodos() {
    const res = await fetch(`${API_URL}/todos`);
    return await res.json();
}

// Crear un Todo
export async function createTodo(title, description = "") {
    const res = await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description })
    });

    return await res.json();
}

// Actualizar un Todo
export async function updateTodo(id, data) {
    const res = await fetch(`${API_URL}/todos?id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    return await res.json();
}

// Eliminar
export async function deleteTodo(id) {
    const res = await fetch(`${API_URL}/todos?id=${id}`, {
        method: "DELETE"
    });

    return await res.json();
}
