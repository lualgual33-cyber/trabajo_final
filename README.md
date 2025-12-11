# Todo App MySQL — Proyecto Final Integrador

Aplicación fullstack para gestión de tareas (**Todo App**), desarrollada como proyecto final integrador.  
Incluye **frontend en React + Vite**, **backend en Node.js + Express**, y **base de datos MySQL** desplegada en la nube.

---

## 📸 Vista Previa

- Interfaz limpia y moderna  
- Diseño responsivo  
- CRUD completo de tareas  
- API REST funcional  
- Base de datos en MySQL  
- Deploy en **Vercel (frontend)** y **Render (backend)**  

---

# 1. Stack Tecnológico

## Frontend
- React 18  
- Vite  
- Axios  
- CSS3 (estilos personalizados)

## Backend
- Node.js  
- Express  
- MySQL (mysql2/promise)  
- CORS  
- Dotenv  

## DevOps / Deploy
- **Vercel** (Frontend)  
- **Render** (Backend)  
- GitHub (Código fuente)

---

# 2. URLs del Proyecto

### 📂 Repositorio
https://github.com/JohanSebastianTequiaForero/Trabajo_Final

shell
Copiar código

### 🌐 Frontend — Producción (Vercel)
https://todo-app-mysql-git-main-johansebastiantequiaforeros-projects.vercel.app

shell
Copiar código

### 🔌 Backend — Producción (Render)
https://trabajo-final-em1b.onrender.com

markdown
Copiar código

### Base URL API

**Desarrollo**
http://localhost:3000

markdown
Copiar código

**Producción**
https://trabajo-final-em1b.onrender.com

yaml
Copiar código

---

# 3. Requisitos Previos

- Node.js v18+  
- npm v9+  
- Git  
- MySQL local (opcional)

---

# 4. Instalación y Ejecución en Local

## 4.1 Clonar repositorio
```bash
git clone https://github.com/JohanSebastianTequiaForero/Trabajo_Final.git
cd Trabajo_Final
4.2 Backend — Node.js + Express
Entrar a la carpeta:

bash
Copiar código
cd backend
npm install
Crear archivo .env:

env
Copiar código
DB_HOST=trolley.proxy.rlwy.net
DB_PORT=18625
DB_USER=root
DB_PASS=tglcKRfEzZDaEwKMoesbEfUbccfCdoyP
DB_NAME=railway
Ejecutar:

bash
Copiar código
node index.js
Backend corriendo en:

arduino
Copiar código
https://trabajo-final-em1b.onrender.com
4.3 Frontend — React + Vite
Entrar a la carpeta:

bash
Copiar código
cd frontend
npm install
Crear archivo .env:

env
Copiar código
VITE_API_URL=https://trabajo-final-em1b.onrender.com
Ejecutar:

bash
Copiar código
npm run dev
Frontend en:

arduino
Copiar código
https://todo-app-mysql-git-main-johansebastiantequiaforeros-projects.vercel.app?_vercel_share=gWGgT0jvuLbFKhmZ79cpM03tArtcw2Ed
5. Estructura del Proyecto
pgsql
Copiar código
Trabajo_Final/
├── backend/
│   ├── index.js
│   ├── conexion.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ToDoList.jsx
│   │   │   ├── TodoForm.jsx
│   │   │   └── TodoItem.jsx
│   │   ├── api/
│   │   │   └── lista.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── .env.example
│
└── README.md
6. Documentación de la API (REST)
Base URL — Desarrollo
arduino
Copiar código
https://railway.com/invite/7sGxinCHPQE
Base URL — Producción
arduino
Copiar código
https://trabajo-final-em1b.onrender.com
6.1 GET /todos
Obtiene todas las tareas.

Request
bash
Copiar código
curl https://trabajofinal-production-4e79.up.railway.app/todos
Response 200 OK
json
Copiar código
[
  {
    "id": 1,
    "titulo": "Comprar pan",
    "descripcion": "Pan integral",
    "estado": "pendiente",
    "fecha_creacion": "2025-02-01T10:30:00.000Z"
  }
]
6.2 POST /todos
Crea una nueva tarea.

Request
bash
Copiar código
curl -X POST https://trabajofinal-production-4e79.up.railway.app/todos \
-H "Content-Type: application/json" \
-d '{
  "titulo": "Hacer ejercicio",
  "descripcion": "30 minutos"
}'
Body esperado
json
Copiar código
{
  "titulo": "texto",     
  "descripcion": "texto"
}
Response 201 Created
json
Copiar código
{
  "id": 2,
  "titulo": "Hacer ejercicio",
  "descripcion": "30 minutos",
  "estado": "pendiente",
  "fecha_creacion": "2025-02-01T12:00:00.000Z"
}
Error 400
json
Copiar código
{ "error": "El título es obligatorio" }
6.3 PUT /tareas/:id
Actualiza una tarea existente.

Request
bash
Copiar código
curl -X PUT https://trabajofinal-production-4e79.up.railway.app/todos/1 \
-H "Content-Type: application/json" \
-d '{
  "titulo": "Comprar pan integral",
  "descripcion": "Pan sin azúcar",
  "estado": "completada"
}'
Body esperado
json
Copiar código
{
  "titulo": "texto",
  "descripcion": "texto",
  "estado": "pendiente | completada"
}
Response 200 OK
json
Copiar código
{
  "id": 1,
  "titulo": "Comprar pan integral",
  "descripcion": "Pan sin azúcar",
  "estado": "completada"
}
6.4 DELETE /tareas/:id
Request
bash
Copiar código
curl -X DELETE https://trabajofinal-production-4e79.up.railway.app/todos/1
Response 200 OK
json
Copiar código
{ "mensaje": "Tarea eliminada correctamente" }
Error 404
json
Copiar código
{ "error": "Tarea no encontrada" }
7. Códigos de Estado HTTP
Código	Descripción
200	OK
201	Created
400	Bad Request
404	Not Found
500	Server Error

8. Troubleshooting
“CORS Error”
Verificar que cors() esté habilitado

Revisar VITE_API_URL en frontend

“Error de conexión a MySQL”
Revisar credenciales del .env

Asegurar que MySQL está en funcionamiento

“Cannot GET /”
Recordar que la API responde solo a rutas /tareas

9. Autores
Johan Sebastián Tequia Forero

Ana María Guzmán

Alixon Guzmán

10. Licencia
Proyecto académico — Uso educativo.