import express from "express";
import cors from "cors";
import { getTodos, createTodo } from "./todos.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/todos", getTodos);
app.post("/todos", createTodo);

app.get("/", (req, res) => res.send("Backend activo!"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor corriendo en " + PORT));
