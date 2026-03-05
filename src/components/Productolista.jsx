import { useState } from 'react';
import Productoitem, { productos } from './Productoitem';

function Productolista() {
  const [filtro, setFiltro] = useState('');
  const productosFiltrados = productos
    .filter(p => p.titulo.toLowerCase().includes(filtro.toLowerCase()))
    .sort((a, b) => a.titulo.localeCompare(b.titulo));  
  
    return (
      <div>
        <h1>Lista de Productos</h1>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={filtro}
          onChange={e => setFiltro(e.target.value)}
        />
        <div className="producto-lista">
          {productosFiltrados.map((producto, index) => (
            <Productoitem key={index} producto={producto} />
          ))}
        </div>
      </div>
    );
  }





export default Productolista;