import { useEffect, useState } from "react";
import {
    getTodos,
    createTodo,
    deleteTodo,
    updateTodo,
} from "./services/api";

function App() {
    const [todos, setTodos] = useState([]);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [editing, setEditing] = useState(null);

    const loadTodos = async () => {
        const data = await getTodos();
        setTodos(data);
    };

    useEffect(() => {
        loadTodos();
    }, []);

    const handleCreate = async () => {
        if (!title.trim()) {
            alert("El título es obligatorio");
            return;
        }
        await createTodo({ title, description, status: "pendiente" });
        setTitle("");
        setDescription("");
        loadTodos();
    };

    const startEdit = (todo) => {
        setEditing(todo.id);
        setTitle(todo.title);
        setDescription(todo.description);
    };

    const handleUpdate = async () => {
        await updateTodo(editing, {
            title,
            description,
            status: "pendiente",
        });
        setEditing(null);
        setTitle("");
        setDescription("");
        loadTodos();
    };

    const toggleStatus = async (todo) => {
        const nuevoEstado =
            todo.status === "pendiente" ? "completado" : "pendiente";

        await updateTodo(todo.id, {
            title: todo.title,
            description: todo.description,
            status: nuevoEstado,
        });

        loadTodos();
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Gestión de tareas</h1>

            <input
                placeholder="Título (obligatorio)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                placeholder="Descripción (opcional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            {editing ? (
                <button onClick={handleUpdate}>Guardar cambios</button>
            ) : (
                <button onClick={handleCreate}>Crear tarea</button>
            )}

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ marginTop: 15 }}>
                        <strong>{todo.title}</strong> – {todo.description}
                        <br />
                        Estado:{" "}
                        <b style={{ color: todo.status === "pendiente" ? "red" : "green" }}>
                            {todo.status}
                        </b>
                        <br />
                        Fecha: {new Date(todo.created_at).toLocaleString()}

                        <br />
                        <button onClick={() => toggleStatus(todo)}>
                            {todo.status === "pendiente"
                                ? "Marcar completada"
                                : "Marcar pendiente"}
                        </button>

                        <button onClick={() => startEdit(todo)} style={{ marginLeft: 10 }}>
                            Editar
                        </button>

                        <button
                            onClick={() => deleteTodo(todo.id)}
                            style={{ marginLeft: 10, color: "red" }}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

