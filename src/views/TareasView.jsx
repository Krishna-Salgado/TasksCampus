import TaskList from '../components/TaskList';

function TareasView({ tareas, filtro, setFiltro, busqueda, setBusqueda, onActualizar, onEliminar, guardando, totalTareas, totalPendientes, totalCompletadas }) {
  return (
    <TaskList 
      tareas={tareas} 
      filtro={filtro}
      setFiltro={setFiltro}
      busqueda={busqueda}
      setBusqueda={setBusqueda}
      onActualizar={onActualizar} 
      onEliminar={onEliminar} 
      guardando={guardando}
      totalTareas={totalTareas}
      totalPendientes={totalPendientes}
      totalCompletadas={totalCompletadas}
    />
  );
}
export default TareasView;