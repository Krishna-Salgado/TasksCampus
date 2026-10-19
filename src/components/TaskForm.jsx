import { useState } from 'react';
import Button from './Button';

function TaskForm({ onAgregar, guardando, setVistaActiva }) {
  const [titulo, setTitulo] = useState('');
  const [error, setError] = useState('');
  const [exito, setExito] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (titulo.trim().length < 5) {
      setError('La tarea debe tener al menos 5 caracteres.');
      setExito('');
      return;
    }
    setError('');
    await onAgregar(titulo.trim());
    setExito('¡Tarea agregada exitosamente!');
    setTitulo('');
    setTimeout(() => setVistaActiva('tareas'), 1500); // Vuelve a la lista
  };

  return (
    <div>
      <form className="task-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Escribe una nueva tarea..." value={titulo} onChange={(e) => setTitulo(e.target.value)} className="form-input" disabled={guardando} />
        <Button label={guardando ? 'Guardando...' : 'Agregar Tarea'} type="submit" variant="primary" disabled={guardando} />
      </form>
      {error && <p className="error-form">{error}</p>}
      {exito && <p className="success-form">{exito}</p>}
    </div>
  );
}
export default TaskForm;