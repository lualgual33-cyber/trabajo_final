# 📋 Todo App MySQL — Proyecto Final Integrador

Aplicación fullstack para gestión de tareas (**Todo App**), desarrollada como proyecto final integrador. Incluye **frontend en React + Vite**, **backend en Node.js + Express**, y **base de datos MySQL** desplegada en la nube.

## 📸 Vista Previa


- Interfaz limpia y moderna
- Diseño responsivo
- CRUD completo de tareas
- API REST funcional

---

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** - Librería UI
- **Vite** - Build tool
- **CSS3** - Estilos personalizados
- **Axios** - Cliente HTTP

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **MySQL** (`mysql2/promise`) - Driver y base de datos
- **CORS** - Seguridad entre dominios
- **Dotenv** - Variables de entorno

### DevOps & Deploy
- **Vercel** - Hosting Frontend
- **Render** - Hosting Backend
- **GitHub** - Código Fuente

---

## ✅ Requisitos Previos

### Sistema
- **Node.js** v18+ o superior
- **npm** v9+ o superior
- **Git**

### Verificar instalación
```bash
node --version    # v18.x.x
npm --version     # v9.x.x
git --version     # v2.x.x
````

-----

## 🚀 Ejecución en Local

### 1️⃣ Clonar Repositorio

```bash
git clone [https://github.com/JohanSebastianTequiaForero/Trabajo_Final.git](https://github.com/JohanSebastianTequiaForero/Trabajo_Final.git)
cd Trabajo_Final
```

### 2️⃣ Frontend - React + Vite

#### Instalación

```bash
cd frontend
npm install
```

#### Variables de Entorno

```bash
cp .env.example .env
```

Edita `frontend/.env`:

```env
# URL de la API Backend (Local)
VITE_API_URL=http://localhost:3000

# URL de la API Backend (Producción)
# VITE_API_URL=[https://trabajo-final-em1b.onrender.com](https://trabajo-final-em1b.onrender.com)
```

#### Ejecutar en Desarrollo

```bash
npm run dev
```

Frontend estará en: **http://localhost:5173** (o similar)

#### Build para Producción

*(Instrucción no aplica/no provista en el original)*

-----

### 3️⃣ Backend - Node.js + Express

#### Instalación

```bash
cd backend
npm install
```

#### Variables de Entorno

```bash
cp .env.example .env
```

Edita `backend/.env`:

```env
# Credenciales de MySQL
DB_HOST=trolley.proxy.rlwy.net
DB_PORT=18625
DB_USER=root
DB_PASS=tglcKRfEzZDaEwKMoesbEfUbccfCdoyP
DB_NAME=railway
```

#### Base de Datos

La base de datos se conecta a una instancia remota de MySQL.

**Opción 1: Usar Credenciales Remotas (Recomendado)**
*Asegúrate de que las credenciales en el archivo `.env` sean las correctas para tu base de datos desplegada (Railway/Render).*

**Opción 2: MySQL Local (Opcional)**
*Si usas una base de datos local, actualiza las credenciales `DB_HOST`, `DB_PORT`, etc., a `localhost`.*

#### Ejecutar en Desarrollo

```bash
node index.js
```

Backend estará corriendo en: **http://localhost:3000**

-----

## 🌍 URLs de Producción

### ✨ Frontend - Vercel

📱 **https://www.google.com/search?q=https://todo-app-mysql-git-main-johansebastiantequiaforeros-projects.vercel.app/**

  - Interfaz de usuario final
  - Consume la API desplegada en Render

### 🔌 Backend - Render

🖥️ **https://trabajo-final-em1b.onrender.com**

  - API REST funcional
  - Conexión a Base de Datos MySQL

### 📂 Repositorio

🤖 **https://github.com/JohanSebastianTequiaForero/Trabajo\_Final**

-----

## 📚 Documentación de API

### Base URL

```
http://localhost:3000             (Desarrollo)
[https://trabajo-final-em1b.onrender.com](https://trabajo-final-em1b.onrender.com)  (Producción)
```

### 1\. GET /todos

Obtiene todas las tareas.

**Request:**

```bash
curl [https://trabajofinal-production-4e79.up.railway.app/todos](https://trabajofinal-production-4e79.up.railway.app/todos)
```

**Response (200 OK):**

```json
[
  {
    "id": 1,
    "titulo": "Comprar pan",
    "descripcion": "Pan integral",
    "estado": "pendiente",
    "fecha_creacion": "2025-02-01T10:30:00.000Z"
  }
]
```

-----

### 2\. POST /todos

Crea una nueva tarea.

**Request:**

```bash
curl -X POST [https://trabajofinal-production-4e79.up.railway.app/todos](https://trabajofinal-production-4e79.up.railway.app/todos) \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Hacer ejercicio",
    "descripcion": "30 minutos"
  }'
```

**Body esperado:**

```json
{
  "titulo": "texto",           // Requerido (string)
  "descripcion": "texto"       // Opcional (string)
}
```

**Response (201 Created):**

```json
{
  "id": 2,
  "titulo": "Hacer ejercicio",
  "descripcion": "30 minutos",
  "estado": "pendiente",
  "fecha_creacion": "2025-02-01T12:00:00.000Z"
}
```

**Errores:**

```json
// 400 Bad Request - Falta título
{
  "error": "El título es obligatorio"
}
```

-----

### 3\. PUT /todos/:id

Actualiza una tarea existente.

**Request:**

```bash
curl -X PUT [https://trabajofinal-production-4e79.up.railway.app/todos/1](https://trabajofinal-production-4e79.up.railway.app/todos/1) \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Comprar pan integral",
    "descripcion": "Pan sin azúcar",
    "estado": "completada"
  }'
```

**Body esperado:**

```json
{
  "titulo": "texto",      // Opcional
  "descripcion": "texto", // Opcional
  "estado": "pendiente | completada"                  // Opcional
}
```

**Response (200 OK):**

```json
{
  "id": 1,
  "titulo": "Comprar pan integral",
  "descripcion": "Pan sin azúcar",
  "estado": "completada"
}
```

**Errores:**

```json
// 404 Not Found
{
  "error": "Tarea no encontrada"
}
```

-----

### 4\. DELETE /todos/:id

Elimina una tarea.

**Request:**

```bash
curl -X DELETE [https://trabajofinal-production-4e79.up.railway.app/todos/1](https://trabajofinal-production-4e79.up.railway.app/todos/1)
```

**Response (200 OK):**

```json
{
  "mensaje": "Tarea eliminada correctamente"
}
```

**Errores:**

```json
// 404 Not Found
{
  "error": "Tarea no encontrada"
}
```

-----

## 📊 Códigos de Estado HTTP

| Código | Significado | Ejemplo |
|--------|-------------|---------|
| **200** | OK | GET, PUT, DELETE exitosos |
| **201** | Created | POST exitoso |
| **400** | Bad Request | Datos inválidos o incompletos |
| **404** | Not Found | Recurso no existe |
| **500** | Server Error | Error en el servidor |

-----

## 🔧 Variables de Entorno

### Frontend (.env)

```env
# API Backend URL
VITE_API_URL=http://localhost:3000

# Para Vercel (producción):
# VITE_API_URL=[https://trabajo-final-em1b.onrender.com](https://trabajo-final-em1b.onrender.com)
```

### Backend (.env)

```env
# Credenciales de MySQL
DB_HOST=trolley.proxy.rlwy.net
DB_PORT=18625
DB_USER=root
DB_PASS=tglcKRfEzZDaEwKMoesbEfUbccfCdoyP
DB_NAME=railway
```

-----

## 📁 Estructura del Proyecto

```
Trabajo_Final/
├── frontend/                    # React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── ToDoList.jsx
│   │   │   ├── TodoForm.jsx
│   │   │   └── TodoItem.jsx
│   │   ├── api/
│   │   │   └── lista.js           # Cliente Axios
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── .env.example
│
├── backend/                     # Node.js + Express
│   ├── index.js                 # Punto de entrada y lógica
│   ├── conexion.js              # Conexión MySQL
│   ├── package.json
│   └── .env.example
│
└── README.md                    # Este archivo
```

-----

## 🐛 Troubleshooting

### "CORS Error"

  - Verifica que `cors()` esté habilitado en el backend
  - Revisa que `VITE_API_URL` en frontend sea correcto

### "Error de conexión a MySQL"

  - Revisa las credenciales en el archivo `.env`
  - Asegura que MySQL está en funcionamiento

### "Cannot GET /"

  - Recuerda que la API responde solo a rutas `/todos`

-----

## 📞 Contacto & Créditos

**Autores**:

  - **Johan Sebastián Tequia Forero**
  - **Ana María Guzmán**
  - **Alixon Guzmán**
      
    **Repositorio**: https://github.com/JohanSebastianTequiaForero/Trabajo\_Final

-----

## 📄 Licencia

Proyecto académico — Uso educativo.

```
```