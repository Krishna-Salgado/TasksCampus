import Card from './Card';

function TaskSummary({ total, mostradas, completadas }) {
  return (
    <Card>
      <h2 className="section-title">Resumen de Tareas</h2>
      <div className="summary-stats">
        <div className="stat"><strong>{total}</strong> <span>Total</span></div>
        <div className="stat"><strong>{completadas}</strong> <span>Completadas</span></div>
        <div className="stat"><strong>{mostradas}</strong> <span>Mostrando</span></div>
      </div>
    </Card>
  );
}

export default TaskSummary;