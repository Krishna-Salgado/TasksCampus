import { useState } from 'react';
import Button from './Button';
import Badge from './Badge';
import Modal from './Modal';

function TaskItem({ tarea, onActualizar, onEliminar, guardando }) {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [editando, setEditando] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState(tarea.title);
  const [errorEdicion, setErrorEdicion] = useState('');

  const toggleCompletada = () => {
    onActualizar(tarea.id, { completed: !tarea.completed });
  };

  const guardarEdicion = () => {
    if (nuevoTitulo.trim().length < 5) {
      setErrorEdicion('El título debe tener al menos 5 caracteres.');
      return;
    }
    setErrorEdicion('');
    onActualizar(tarea.id, { title: nuevoTitulo.trim() });
    setEditando(false);
  };

  const handleBlur = () => {
    if (nuevoTitulo === tarea.title) {
      setEditando(false);
    } else {
      guardarEdicion();
    }
  };

  const handleEliminar = () => {
    setModalAbierto(false);
    onEliminar(tarea.id);
  };

  return (
    <>
      <div className="task-item">
        <div className="task-content">
          {editando ? (
            <div>
              <input type="text" value={nuevoTitulo} onChange={(e) => setNuevoTitulo(e.target.value)} onBlur={handleBlur} onKeyDown={(e) => e.key === 'Enter' && guardarEdicion()} autoFocus className="form-input edit-input" />
              {errorEdicion && <p className="error-form">{errorEdicion}</p>}
            </div>
          ) : (
            <span className={tarea.completed ? 'task-title completed' : 'task-title'} onDoubleClick={() => setEditando(true)} title="Doble clic para editar">
              {tarea.title}
            </span>
          )}
          <Badge estado={tarea.completed ? 'completada' : 'pendiente'} onClick={toggleCompletada} />
        </div>
        <div className="task-actions">
          <Button label={tarea.completed ? 'Desmarcar' : 'Completar'} onClick={toggleCompletada} variant="success" disabled={guardando} />
          <Button label="Eliminar" onClick={() => setModalAbierto(true)} variant="danger" disabled={guardando} />
        </div>
      </div>

      {modalAbierto && (
        <Modal mensaje={`¿Seguro que deseas eliminar la tarea: "${tarea.title}"?`} onConfirmar={handleEliminar} onCancelar={() => setModalAbierto(false)} />
      )}
    </>
  );
}
export default TaskItem;