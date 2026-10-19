import Card from '../components/Card';

function ResumenView({ total, mostradas, completadas, pendientes, setVistaActiva }) {
  return (
    <>
      <Card>
        <h2 className="section-title">Resumen de Tareas</h2>
        <div className="summary-stats">
          <div className="stat">
            <strong className="stat-num">{total}</strong> 
            <span>Total</span>
          </div>
          <div className="stat">
            <strong className="stat-num">{pendientes}</strong> 
            <span>Pendientes</span>
          </div>
          <div className="stat">
            <strong className="stat-num">{completadas}</strong> 
            <span>Completadas</span>
          </div>
          {/* Nueva tarjeta con formato de fracción */}
          <div className="stat stat-highlight">
            <div className="stat-fraction">
              <span className="numerator">{mostradas}</span>
              <span className="denominator">/ {total}</span>
            </div>
            <span>Mostradas (Filtro)</span>
          </div>
        </div>
      </Card>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <button className="btn btn-primary" onClick={() => setVistaActiva('tareas')}>Ir a Tareas</button>
      </div>
    </>
  );
}
export default ResumenView;