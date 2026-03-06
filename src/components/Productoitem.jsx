import wayfarer from '../assets/wayfere classic.webp';
import clubmaster from '../assets/Clubmaster Classic.jpg';
import aviator from '../assets/aviator optics.jpg';

export const productos = [
  { src: wayfarer, alt: 'Original Wayfarer Classic', titulo: 'Original Wayfarer Classic', texto: 'Estilo icónico retro en acetato negro brillante con lentes de cristal verde G-15.' },
  { src: clubmaster, alt: 'Clubmaster Classic', titulo: 'Clubmaster Classic', texto: 'Estilo retro-intelectual con montura de acetato y metal, lentes verde G-15.' },
  { src: aviator, alt: 'Aviator Classic', titulo: 'Aviator Classic', texto: 'Estilo piloto atemporal en metal dorado con lentes de cristal verde G-15.' },
  { src: clubmaster, alt: 'Clubmaster Optics', titulo: 'Clubmaster Optics', texto: 'Estructura clásica apta para lentes recetados, montura negro brillante.' },
  { src: aviator, alt: 'Aviator Optics', titulo: 'Aviator Optics', texto: 'Montura ligera en metal dorado, apta para lentes recetados progresivos.' },
];

function ProductoItem({ producto }) {
  return (
    <div className="producto-item">
      <img src={producto.src} alt={producto.alt} />
      <h2>{producto.titulo}</h2>
      <p>{producto.texto}</p>
    </div>
  );
}

export default ProductoItem;