import Card from './Card';
import TaskItem from './TaskItem';
import EmptyState from './EmptyState';

function TaskList({ tareas, filtro, setFiltro, busqueda, setBusqueda, onActualizar, onEliminar, guardando, totalTareas, totalPendientes, totalCompletadas }) {
  return (
    <Card>
      <h2 className="section-title">Listado de Tareas</h2>
      
      <div className="list-controls">
        <div className="filtros-container">
          <button className={filtro === 'todas' ? 'btn active' : 'btn'} onClick={() => setFiltro('todas')}>
            Todas <span className="btn-count">{totalTareas}</span>
          </button>
          <button className={filtro === 'pendientes' ? 'btn active' : 'btn'} onClick={() => setFiltro('pendientes')}>
            Pendientes <span className="btn-count">{totalPendientes}/{totalTareas}</span>
          </button>
          <button className={filtro === 'completadas' ? 'btn active' : 'btn'} onClick={() => setFiltro('completadas')}>
            Completadas <span className="btn-count">{totalCompletadas}/{totalTareas}</span>
          </button>
        </div>
        <input 
          type="text" 
          placeholder="🔍 Buscar tarea por título..." 
          value={busqueda} 
          onChange={(e) => setBusqueda(e.target.value)} 
          className="form-input search-input"
        />
      </div>

      {tareas.length === 0 ? (
        <EmptyState icon="🔍" mensaje="No se encontraron tareas que coincidan con tu búsqueda." />
      ) : (
        <div className="task-list">
          {tareas.map((tarea) => (
            <TaskItem key={tarea.id} tarea={tarea} onActualizar={onActualizar} onEliminar={onEliminar} guardando={guardando} />
          ))}
        </div>
      )}
    </Card>
  );
}
export default TaskList;