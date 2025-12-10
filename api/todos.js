// /api/todos.js
import mysql from 'mysql2/promise';

let pool;

async function getPool() {
  if (pool) return pool;
  // Usamos createPool para manejo de conexiones en Serverless
  pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
  return pool;
}

export default async function handler(req, res) {
  try {
    const db = await getPool();

    if (req.method === 'GET') {
      const [rows] = await db.query('SELECT * FROM todos ORDER BY created_at DESC');
      return res.status(200).json(rows);
    }

    if (req.method === 'POST') {
      const { title, description } = req.body;
      if (!title) return res.status(400).json({ message: 'title required' });

      const [result] = await db.query(
        'INSERT INTO todos (title, description) VALUES (?, ?)',
        [title, description || null]
      );
      const insertedId = result.insertId;
      const [rows] = await db.query('SELECT * FROM todos WHERE id = ?', [insertedId]);
      return res.status(201).json(rows[0]);
    }

    if (req.method === 'PUT') {
      // PUT expects ?id=xxx in query string
      const { id } = req.query;
      if (!id) return res.status(400).json({ message: 'id required in query ?id=' });

      const { title, description, status } = req.body;
      await db.query(
        'UPDATE todos SET title = COALESCE(?, title), description = COALESCE(?, description), status = COALESCE(?, status) WHERE id = ?',
        [title, description, status, id]
      );
      const [rows] = await db.query('SELECT * FROM todos WHERE id = ?', [id]);
      return res.status(200).json(rows[0]);
    }

    if (req.method === 'DELETE') {
      const { id } = req.query;
      if (!id) return res.status(400).json({ message: 'id required in query ?id=' });
      await db.query('DELETE FROM todos WHERE id = ?', [id]);
      return res.status(200).json({ message: 'deleted' });
    }

    res.setHeader('Allow', 'GET,POST,PUT,DELETE');
    return res.status(405).json({ message: 'Method not allowed' });

  } catch (err) {
    console.error('API error', err);
    return res.status(500).json({ message: 'Internal server error', error: err.message });
  }
}
