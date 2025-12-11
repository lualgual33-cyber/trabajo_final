import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// Obtener todos
app.get("/todos", async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM todos ORDER BY id DESC");
    res.json(rows);
});

// Crear
app.post("/todos", async (req, res) => {
    const { title, description } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({ error: "El título es obligatorio" });
    }

    const [result] = await pool.query(
        "INSERT INTO todos (title, description, status) VALUES (?, ?, 'pending')",
        [title, description]
    );

    const [newTodo] = await pool.query("SELECT * FROM todos WHERE id = ?", [
        result.insertId,
    ]);

    res.json(newTodo[0]);
});

// Actualizar
app.put("/todos/:id", async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;

    const [exists] = await pool.query("SELECT * FROM todos WHERE id = ?", [id]);

    if (exists.length === 0) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }

    await pool.query(
        "UPDATE todos SET title=?, description=?, status=? WHERE id = ?",
        [title, description, status, id]
    );

    const [updated] = await pool.query("SELECT * FROM todos WHERE id = ?", [id]);
    res.json(updated[0]);
});

// Eliminar
app.delete("/todos/:id", async (req, res) => {
    const { id } = req.params;

    const [exists] = await pool.query("SELECT * FROM todos WHERE id = ?", [id]);

    if (exists.length === 0) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }

    await pool.query("DELETE FROM todos WHERE id = ?", [id]);
    res.json({ message: "Tarea eliminada" });
});

app.get("/", (req, res) => res.send("Backend activo!"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Backend escuchando en puerto", PORT));
