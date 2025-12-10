import React, { useEffect, useState } from 'react';
import { listTodos, createTodo, updateTodo, deleteTodo } from './services/api';

export default function App(){
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  async function load(){
    setLoading(true);
    try{
      const data = await listTodos();
      setTodos(data);
    }catch(e){
      alert('Error cargando todos: ' + e.message);
    } finally { setLoading(false); }
  }

  useEffect(()=>{ load(); },[]);

  async function handleCreate(){
    if(!title.trim()) return alert('Agregar título');
    await createTodo({ title: title.trim(), description });
    setTitle(''); setDescription('');
    await load();
  }

  async function toggleStatus(todo){
    const newStatus = todo.status === 'pendiente' ? 'completada' : 'pendiente';
    await updateTodo(todo.id, { status: newStatus });
    await load();
  }

  async function handleDelete(id){
    if(!confirm('Eliminar?')) return;
    await deleteTodo(id);
    await load();
  }

  return (
    <div style={{maxWidth:800, margin:'2rem auto', fontFamily:'Arial, sans-serif'}}>
      <h1>Todo App</h1>

      <div style={{marginBottom:16}}>
        <input placeholder="Título" value={title} onChange={e=>setTitle(e.target.value)} />
        <input placeholder="Descripción (opcional)" value={description} onChange={e=>setDescription(e.target.value)} />
        <button onClick={handleCreate}>Crear</button>
      </div>

      {loading ? <p>Cargando...</p> : (
        <ul>
          {todos.map(t => (
            <li key={t.id} style={{marginBottom:8}}>
              <strong style={{textDecoration: t.status==='completada' ? 'line-through' : 'none'}}>{t.title}</strong>
              {' — '}
              <small>{t.description}</small>
              {' '}
              <button onClick={()=>toggleStatus(t)}>{t.status==='pendiente' ? 'Marcar completada' : 'Marcar pendiente'}</button>
              <button onClick={()=>handleDelete(t.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
