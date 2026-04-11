// SidebarFiltro.jsx
import React from 'react';

function SidebarFiltro({ categorias, categoriaSeleccionada, setCategoriaSeleccionada }) {
  return (
    <aside className="sidebar-filtro">
      <h3>Filtrar por categoría</h3>
      <ul>
        <li>
          <button onClick={() => setCategoriaSeleccionada('')}>Todas</button>
        </li>
        {categorias.map(cat => (
          <li key={cat}>
            <button
              onClick={() => setCategoriaSeleccionada(cat)}
              className={categoriaSeleccionada === cat ? 'activo' : ''}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SidebarFiltro;