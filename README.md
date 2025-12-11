🚀 README.md – Documentación completa del Proyecto Final
📌 Aplicación de Gestión de Tareas (To-Do App)

Proyecto completo de frontend + backend + base de datos en la nube para gestionar tareas mediante una API REST. Permite crear, listar, editar, cambiar el estado y eliminar tareas.

Este proyecto demuestra integración entre un frontend moderno, un backend con API, y una base de datos real alojada en la nube, cumpliendo todos los requisitos de la asignatura.

📁 Estructura del Proyecto
Trabajo_Final/
│
├── frontend/       # Aplicación React + Vite
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── README.md (opcional)
│
├── backend/        # Servidor Express + MySQL
│   ├── routes/
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── README.md (opcional)
│
└── README.md        # DOCUMENTACIÓN PRINCIPAL DE TODO EL PROYECTO

🎯 1. Descripción del Proyecto

El sistema permite CRUD completo de tareas con estados, integrando:

Usuario → Frontend (Vercel) → Backend (Render) → Base de Datos (Railway MySQL)

🧱 2. Stack Tecnológico
🌐 Frontend

React + Vite

Despliegue: Vercel

🖥️ Backend

Node.js

Express.js

CORS

MySQL2

Despliegue: Render (nuevo, corregido)
👉 Servicio Node.js que ejecuta server.js

🗄️ Base de Datos

MySQL en Railway

🛠️ 3. Requisitos previos

Sin cambios.

🧩 4. Variables de entorno
📌 /backend/.env

(Se mantiene igual porque la BD sigue en Railway)

DB_HOST=trolley.proxy.rlwy.net
DB_PORT=18625
DB_USER=root
DB_PASS=tglcKRfEzZDaEwKMoesbEfUbccfCdoyP
DB_NAME=railway

📌 /frontend/.env

Ahora debe apuntar al backend en Render:

VITE_API_URL=https://trabajo-final-em1b.onrender.com


⚠️ Reemplaza esta URL si Render te generó otra distinta.

🖥️ 5. Ejecutar en local

Sin cambios.

Backend local:

npm start


Frontend local:

npm run dev

🌐 6. Enlaces del Proyecto en Producción
🚀 Frontend (Vercel)

👉 https://todo-app-mysql-git-main-johansebastiantequiaforeros-projects.vercel.app/

🟩 Backend (Render)

👉 https://trabajo-final-em1b.onrender.com/

(o la URL real que Render te dio)

✔ Está en Render
✔ Corre Node.js
✔ Se despliega automáticamente desde GitHub

🗄️ Base de Datos (Railway)

Dashboard: https://railway.com/invite/7sGxinCHPQE

📡 7. Endpoints de la API REST

(Sin cambios porque tu backend sigue igual, solo cambió el hosting)

Base URL ahora es:

https://trabajo-final-em1b.onrender.com


Ejemplos:

Método	Ruta	Función
GET	/todos	Listar
POST	/todos	Crear
PUT	/todos/:id	Editar
DELETE	/todos/:id	Eliminar
🧪 8. Pruebas en Postman

Ahora usar:

https://trabajo-final-em1b.onrender.com/todos

📸 9. Capturas recomendadas

Incluye ahora:

✔ Render mostrando backend corriendo
✔ Railway mostrando la base de datos
✔ Vercel mostrando frontend

🏁 10. Conclusión

El proyecto ahora queda correctamente documentado con:

✔ Backend desplegado en Render
✔ Frontend en Vercel
✔ Base de datos en Railway
✔ CRUD completo y funcional
✔ Documentación lista para entregar