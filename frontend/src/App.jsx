import { useEffect, useState } from "react";
import { getTodos, createTodo } from "./services/api";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  async function load() {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (e) {
      alert("Error cargando todos: " + e.message);
    }
  }

  async function addTodo() {
    if (!title.trim()) return;
    await createTodo({ title });
    setTitle("");
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h1>Todo App</h1>

      <input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTodo}>Crear</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
