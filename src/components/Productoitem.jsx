import img1 from '../assets/images 1.webp';
import img2 from '../assets/images 2.webp';
import img3 from '../assets/images 3.webp';

export const productos = [
  { src: img1, alt: 'Producto 1', titulo: 'Producto 1', texto: 'Descripción breve del producto 1.' },
  { src: img2, alt: 'Producto 2', titulo: 'Producto 2', texto: 'Descripción breve del producto 2.' },
  { src: img3, alt: 'Producto 3', titulo: 'Producto 3', texto: 'Descripción breve del producto 3.' },
  { src: img1, alt: 'Producto 4', titulo: 'Producto 4', texto: 'Descripción breve del producto 4.' },
  { src: img2, alt: 'Producto 2', titulo: 'Producto 2', texto: 'Descripción breve del producto 2.' },
  { src: img3, alt: 'Producto 3', titulo: 'Producto 3', texto: 'Descripción breve del producto 3.' },
  { src: img1, alt: 'Producto 1', titulo: 'Producto 1', texto: 'Descripción breve del producto 1.' },
  { src: img2, alt: 'Producto 2', titulo: 'Producto 2', texto: 'Descripción breve del producto 2.' },
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