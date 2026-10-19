import Card from './Card';
import Button from './Button';

function Modal({ mensaje, onConfirmar, onCancelar }) {
  return (
    <div className="modal-overlay">
      <Card className="modal-content">
        <h3>Confirmar Acción</h3>
        <p>{mensaje}</p>
        <div className="modal-actions">
          <Button label="Cancelar" onClick={onCancelar} variant="secondary" />
          <Button label="Confirmar" onClick={onConfirmar} variant="danger" />
        </div>
      </Card>
    </div>
  );
}

export default Modal;