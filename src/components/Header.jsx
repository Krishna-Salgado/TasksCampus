function Header({ vistaActiva, setVistaActiva }) {
  return (
    <header className="header">
      <h1>TaskCampus</h1>
      <p>Gestor de Tareas Académicas</p>
      <nav className="main-nav">
        <button className={`nav-link ${vistaActiva === 'resumen' ? 'active' : ''}`} onClick={() => setVistaActiva('resumen')}>Resumen</button>
        <button className={`nav-link ${vistaActiva === 'tareas' ? 'active' : ''}`} onClick={() => setVistaActiva('tareas')}>Tareas</button>
        <button className={`nav-link ${vistaActiva === 'nueva' ? 'active' : ''}`} onClick={() => setVistaActiva('nueva')}>Nueva Tarea</button>
      </nav>
    </header>
  );
}

export default Header;