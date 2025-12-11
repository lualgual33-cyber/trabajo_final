// frontend/src/services/api.js
const API_URL = import.meta.env.VITE_API_URL || "https://trabajofinal-production-4e79.up.railway.app";

export async function getTodos() {
    return fetch(`${API_URL}/todos`).then(res => res.json());
}

export async function createTodo(data) {
    return fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }).then(res => res.json());
}

export async function deleteTodo(id) {
    return fetch(`${API_URL}/todos/${id}`, {
        method: "DELETE",
    }).then(res => res.json());
}

export async function updateTodo(id, data) {
    return fetch(`${API_URL}/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    }).then(res => res.json());
}

export async function toggleStatus(id) {
    return fetch(`${API_URL}/todos/${id}/status`, {
        method: "PATCH",
    }).then(res => res.json());
}
