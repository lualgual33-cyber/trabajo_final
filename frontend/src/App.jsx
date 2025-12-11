import { useEffect, useState } from "react";
import { getTodos, createTodo, deleteTodo, updateTodo } from "./services/api";

function App() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

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

    return (
        <div>
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

            <button onClick={handleCreate}>Crear</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <strong>{todo.title}</strong> - {todo.description}
                        <button onClick={() => handleDelete(todo.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
