function Badge({ estado, onClick }) {
  const clase = estado === 'completada' ? 'badge-success' : 'badge-warning';
  return (
    <span className={`badge ${clase}`} onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      {estado}
    </span>
  );
}

export default Badge;