import Card from '../components/Card';
import TaskForm from '../components/TaskForm';

function NuevaView({ onAgregar, guardando, setVistaActiva }) {
  return (
    <Card>
      <h2 className="section-title">Crear Nueva Tarea</h2>
      <TaskForm onAgregar={onAgregar} guardando={guardando} setVistaActiva={setVistaActiva} />
    </Card>
  );
}
export default NuevaView;