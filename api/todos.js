import { getDB } from "./db.js";

export default async function handler(req, res) {
  try {
    const db = await getDB();

    if (req.method === "GET") {
      const [rows] = await db.query("SELECT * FROM todos ORDER BY created_at DESC");
      return res.status(200).json(rows);
    }

    if (req.method === "POST") {
      const { title, description } = req.body;
      if (!title) return res.status(400).json({ message: "title required" });

      const [result] = await db.query(
        "INSERT INTO todos (title, description) VALUES (?, ?)",
        [title, description || null]
      );

      const [row] = await db.query("SELECT * FROM todos WHERE id = ?", [result.insertId]);
      return res.status(201).json(row[0]);
    }

    if (req.method === "PUT") {
      const { id } = req.query;
      const { title, description, status } = req.body;

      await db.query(
        "UPDATE todos SET title=?, description=?, status=? WHERE id=?",
        [title, description, status, id]
      );

      const [row] = await db.query("SELECT * FROM todos WHERE id=?", [id]);
      return res.status(200).json(row[0]);
    }

    if (req.method === "DELETE") {
      const { id } = req.query;
      await db.query("DELETE FROM todos WHERE id=?", [id]);
      return res.status(200).json({ message: "deleted" });
    }

    res.status(405).json({ message: "Method not allowed" });

  } catch (err) {
    console.error("API error", err);
    return res.status(500).json({ error: err.message });
  }
}
