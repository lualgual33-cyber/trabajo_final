import { useEffect, useState } from "react";
import {
    getTodos,
    createTodo,
    deleteTodo,
    updateTodo,
} from "./services/api";
import "./App.css";

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
        await createTodo({ title, description });
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
            status: "pending",
        });
        setEditing(null);
        setTitle("");
        setDescription("");
        loadTodos();
    };

    const toggleStatus = async (todo) => {
        await updateTodo(todo.id, {
            title: todo.title,
            description: todo.description,
            status: todo.status === "pending" ? "completed" : "pending",
        });
        loadTodos();
    };

    return (
        <div className="container">
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
                <button className="primary" onClick={handleUpdate}>Guardar cambios</button>
            ) : (
                <button className="primary" onClick={handleCreate}>Crear tarea</button>
            )}

            <ul style={{ listStyle: "none", padding: 0 }}>
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-card">
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>

                        <p>
                            Estado:{" "}
                            <span className={`todo-status ${todo.status}`}>
                                {todo.status}
                            </span>
                        </p>

                        <p>Fecha: {new Date(todo.created_at).toLocaleString()}</p>

                        <div className="todo-buttons">
                            <button
                                className="warning"
                                onClick={() => toggleStatus(todo)}
                            >
                                {todo.status === "pending" ? "Marcar completada" : "Marcar pendiente"}
                            </button>

                            <button
                                className="primary"
                                onClick={() => startEdit(todo)}
                            >
                                Editar
                            </button>

                            <button
                                className="danger"
                                onClick={() => deleteTodo(todo.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
