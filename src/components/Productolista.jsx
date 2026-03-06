// Productolista.jsx
import { useState } from 'react';
import ProductoData from '../Mocks/Productos.json';
import SidebarFiltro from './Filtrosidebar';

const categorias = [...new Set(ProductoData.map(p => p.categoria))];

function Productolista() {
  const [filtro, setFiltro] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  const productosFiltrados = ProductoData
    .filter(p =>
      p.titulo.toLowerCase().includes(filtro.toLowerCase()) &&
      (categoriaSeleccionada === '' || p.categoria === categoriaSeleccionada)
    )
    .sort((a, b) => a.titulo.localeCompare(b.titulo));

  return (
    <div style={{ display: 'flex' }}>
      <SidebarFiltro
        categorias={categorias}
        categoriaSeleccionada={categoriaSeleccionada}
        setCategoriaSeleccionada={setCategoriaSeleccionada}
      />
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
    </div>
  );
}

export default Productolista;