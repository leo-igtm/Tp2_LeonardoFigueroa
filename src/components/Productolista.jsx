import img1 from '../assets/images 1.webp';
import img2 from '../assets/images 2.webp';
import img3 from '../assets/images 3.webp';

function Productolista() {
  const productos = [
    { src: img1, alt: 'Producto 1', titulo: 'Producto 1', texto: 'Descripción breve del producto 1.' },
    { src: img2, alt: 'Producto 2', titulo: 'Producto 2', texto: 'Descripción breve del producto 2.' },
    { src: img3, alt: 'Producto 3', titulo: 'Producto 3', texto: 'Descripción breve del producto 3.' },
    { src: img1, alt: 'Producto 4', titulo: 'Producto 4', texto: 'Descripción breve del producto 4.' },
    { src: img2, alt: 'Producto 2', titulo: 'Producto 2', texto: 'Descripción breve del producto 2.' },
    { src: img3, alt: 'Producto 3', titulo: 'Producto 3', texto: 'Descripción breve del producto 3.' },
    { src: img1, alt: 'Producto 1', titulo: 'Producto 1', texto: 'Descripción breve del producto 1.' },
    { src: img2, alt: 'Producto 2', titulo: 'Producto 2', texto: 'Descripción breve del producto 2.' },
    
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {productos.map((p, idx) => (
        <article key={idx} className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-slate-900 dark:shadow-slate-900/20">
          <img
            className="h-40 w-full object-cover"
            src={p.src}
            alt={p.alt}
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{p.titulo}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.texto}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Productolista;