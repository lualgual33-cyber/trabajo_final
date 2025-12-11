import { useEffect, useState } from "react";
import { getTodos, createTodo, deleteTodo, updateTodo } from "./services/api";

function App() {
    const [todos, setTodos] = useState([]);

    // Campos del formulario
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // Para editar
    const [editing, setEditing] = useState(null);

    const loadTodos = async () => {
        const data = await getTodos();
        setTodos(data);
    };

    useEffect(() => {
        loadTodos();
    }, []);

    const handleCreate = async () => {
        if (!title.trim()) return alert("El título es obligatorio");

        await createTodo({ title, description });
        setTitle("");
        setDescription("");
        loadTodos();
    };

    const handleDelete = async (id) => {
        await deleteTodo(id);
        loadTodos();
    };

    const handleEdit = (todo) => {
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

    return (
        <div style={{ padding: "20px" }}>
            <h1>Todo App</h1>

            <input
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            {editing ? (
                <button onClick={handleUpdate} style={{ background: "orange" }}>
                    Guardar cambios
                </button>
            ) : (
                <button onClick={handleCreate} style={{ background: "green" }}>
                    Crear
                </button>
            )}

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ marginTop: "15px" }}>
                        <strong>{todo.title}</strong> – {todo.description}

                        <button
                            onClick={() => handleEdit(todo)}
                            style={{ marginLeft: "10px" }}
                        >
                            Editar
                        </button>

                        <button
                            onClick={() => handleDelete(todo.id)}
                            style={{ marginLeft: "10px", color: "red" }}
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
