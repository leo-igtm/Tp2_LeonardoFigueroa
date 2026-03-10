// Productolista.jsx
import { useState } from 'react';
import ProductoRaw from '../Mocks/Productos.json';
import SidebarFiltro from './Filtrosidebar';


const productos = ProductoRaw.productos;

const tipos = [...new Set(productos.map(p => p.tipo))];

function Productolista() {
  const [tipoSeleccionado, setTipoSeleccionado] = useState('');

  const productosFiltrados = productos.filter(
    p => tipoSeleccionado === '' || p.tipo === tipoSeleccionado
  );

  return (
    <div>
    <h1>Lista de Productos</h1>
    <select
      value={tipoSeleccionado}
      onChange={e => setTipoSeleccionado(e.target.value)}
    >
      <option value="">Todos los tipos</option>
      {tipos.map(tipo => (
        <option key={tipo} value={tipo}>{tipo}</option>
      ))}
    </select>
    <ul>
      {productosFiltrados.map(producto => (
        <li key={producto.id}>{producto.nombre} - {producto.tipo}</li>
      ))}
    </ul>
  </div>
  );
}

export default Productolista;