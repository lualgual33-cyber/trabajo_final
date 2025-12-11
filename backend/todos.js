import { db } from "./db.js";

export async function getTodos(req, res) {
  const [rows] = await db.query("SELECT * FROM todos ORDER BY id DESC");
  res.json(rows);
}

export async function createTodo(req, res) {
  const { title, description } = req.body;

  if (!title) return res.status(400).json({ message: "title required" });

  const [result] = await db.query(
    "INSERT INTO todos (title, description) VALUES (?, ?)",
    [title, description || null]
  );

  const [rows] = await db.query("SELECT * FROM todos WHERE id = ?", [
    result.insertId,
  ]);

  res.status(201).json(rows[0]);
}
