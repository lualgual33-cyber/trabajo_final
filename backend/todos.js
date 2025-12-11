import pool from "./db.js";

export default function (app) {

    // Obtener todas las tareas
    app.get("/todos", async (req, res) => {
        try {
            const [rows] = await pool.query("SELECT * FROM todos ORDER BY id DESC");
            res.json(rows);
        } catch (err) {
            res.status(500).json({ error: "Error obteniendo tareas" });
        }
    });

    // Crear tarea
    app.post("/todos", async (req, res) => {
        try {
            const { title, description } = req.body;

            if (!title) {
                return res.status(400).json({ error: "El título es obligatorio" });
            }

            const [result] = await pool.query(
                "INSERT INTO todos (title, description, status) VALUES (?, ?, 'pendiente')",
                [title, description || null]
            );

            const [newTodo] = await pool.query("SELECT * FROM todos WHERE id = ?", [
                result.insertId,
            ]);

            res.status(201).json(newTodo[0]);
        } catch (err) {
            console.log(err);
            res.status(500).json({ error: "Error creando tarea" });
        }
    });

    // Editar tarea
    app.put("/todos/:id", async (req, res) => {
        try {
            const { id } = req.params;
            const { title, description, status } = req.body;

            const [todo] = await pool.query("SELECT * FROM todos WHERE id = ?", [id]);
            if (todo.length === 0) {
                return res.status(404).json({ error: "Tarea no existe" });
            }

            await pool.query(
                "UPDATE todos SET title = ?, description = ?, status = ? WHERE id = ?",
                [
                    title || todo[0].title,
                    description ?? todo[0].description,
                    status || todo[0].status,
                    id,
                ]
            );

            const [updated] = await pool.query("SELECT * FROM todos WHERE id = ?", [
                id,
            ]);

            res.json(updated[0]);
        } catch (err) {
            res.status(500).json({ error: "Error actualizando tarea" });
        }
    });

    // Cambiar estado (pendiente <-> completado)
    app.patch("/todos/:id/status", async (req, res) => {
        try {
            const { id } = req.params;

            const [todo] = await pool.query("SELECT * FROM todos WHERE id = ?", [id]);
            if (todo.length === 0) {
                return res.status(404).json({ error: "Tarea no existe" });
            }

            const newStatus =
                todo[0].status === "pendiente" ? "completado" : "pendiente";

            await pool.query("UPDATE todos SET status = ? WHERE id = ?", [
                newStatus,
                id,
            ]);

            res.json({ id, newStatus });
        } catch (err) {
            res.status(500).json({ error: "Error cambiando estado" });
        }
    });

    // Eliminar tarea
    app.delete("/todos/:id", async (req, res) => {
        try {
            const { id } = req.params;

            const [task] = await pool.query("SELECT * FROM todos WHERE id = ?", [id]);
            if (task.length === 0) {
                return res.status(404).json({ error: "Tarea no encontrada" });
            }

            await pool.query("DELETE FROM todos WHERE id = ?", [id]);

            res.json({ message: "Tarea eliminada" });
        } catch (err) {
            res.status(500).json({ error: "Error eliminando tarea" });
        }
    });
}
