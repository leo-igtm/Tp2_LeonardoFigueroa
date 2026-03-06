import img1 from '../assets/images 1.webp';
import img2 from '../assets/images 2.webp';
import img3 from '../assets/images 3.webp';
import data from '../Mocks/Productos.json';

const imageMap = {
  'images 1.webp': img1,
  'images 2.webp': img2,
  'images 3.webp': img3,
};

export const productos = data.productos.map((p) => {
  const src = imageMap[p.url_imagen_referencia];
  if (!src && import.meta.env.DEV) {
    console.warn(`[Productoitem] No se encontró imagen para "${p.url_imagen_referencia}" (id: ${p.id})`);
  }
  return {
    src: src || img1,
    alt: p.nombre,
    titulo: p.nombre,
    texto: `${p.estilo || ''} — ${p.color_montura || ''} / ${p.color_lente || ''}`.trim(),
  };
});

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