import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/todos", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM todos ORDER BY created_at DESC");
  res.json(rows);
});

app.post("/todos", async (req, res) => {
  const { title, description } = req.body;
  const [result] = await pool.query(
    "INSERT INTO todos (title, description) VALUES (?, ?)",
    [title, description]
  );
  res.json({ id: result.insertId, title, description });
});

app.delete("/todos/:id", async (req, res) => {
  await pool.query("DELETE FROM todos WHERE id=?", [req.params.id]);
  res.json({ message: "deleted" });
});

app.listen(3000, () => console.log("Backend running on port 3000"));
