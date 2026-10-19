import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { useTareas } from './hooks/useTareas';
import ResumenView from './views/ResumenView';
import TareasView from './views/TareasView';
import NuevaView from './views/NuevaView';

function App() {
  const { tareas, cargando, error, guardando, agregarTarea, actualizarTarea, eliminarTarea } = useTareas();
  const [vistaActiva, setVistaActiva] = useState('resumen');
  const [filtro, setFiltro] = useState('todas');
  const [busqueda, setBusqueda] = useState('');

  // Cálculos derivados para totales (Estado derivado)
  const totalTareas = tareas.length;
  const totalPendientes = tareas.filter(t => !t.completed).length;
  const totalCompletadas = tareas.filter(t => t.completed).length;

  const tareasFiltradas = tareas
    .filter((t) => {
      if (filtro === 'pendientes') return !t.completed;
      if (filtro === 'completadas') return t.completed;
      return true;
    })
    .filter((t) => t.title.toLowerCase().includes(busqueda.toLowerCase()));

  return (
    <div className="app-container">
      <Header vistaActiva={vistaActiva} setVistaActiva={setVistaActiva} />
      
      {cargando && <p>Cargando tareas...</p>}
      {error && <p className="error-msg">Error: {error}</p>}

      {!cargando && !error && (
        <>
          {vistaActiva === 'resumen' && (
            <ResumenView 
              total={totalTareas} 
              mostradas={tareasFiltradas.length} 
              completadas={totalCompletadas} 
              pendientes={totalPendientes} 
              setVistaActiva={setVistaActiva}
            />
          )}
          
          {vistaActiva === 'tareas' && (
            <TareasView 
              tareas={tareasFiltradas} 
              filtro={filtro} 
              setFiltro={setFiltro} 
              busqueda={busqueda} 
              setBusqueda={setBusqueda} 
              onActualizar={actualizarTarea} 
              onEliminar={eliminarTarea} 
              guardando={guardando}
              totalTareas={totalTareas}
              totalPendientes={totalPendientes}
              totalCompletadas={totalCompletadas}
            />
          )}

          {vistaActiva === 'nueva' && (
            <NuevaView 
              onAgregar={agregarTarea} 
              guardando={guardando} 
              setVistaActiva={setVistaActiva}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;