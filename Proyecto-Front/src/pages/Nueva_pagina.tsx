import { Link } from 'react-router-dom';

function NuevaPagina() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Agregar Contenido</h1>
      <Link to="/">
        <button>Volver al Inicio</button>
      </Link>
    </div>
  );
}

export default NuevaPagina;