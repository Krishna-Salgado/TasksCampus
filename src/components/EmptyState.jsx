function EmptyState({ icon, mensaje }) {
  return (
    <div className="empty-state">
      <span className="empty-icon">{icon}</span>
      <p>{mensaje}</p>
    </div>
  );
}

export default EmptyState;