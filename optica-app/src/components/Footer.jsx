import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h5 className="text-lg font-semibold text-slate-900 dark:text-slate-100">SILUX</h5>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Disfruta de los mejores platos con ingredientes frescos y locales.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Enlaces</h5>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/Productolista" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                  Acceder
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Contacto</h5>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Email: info@silux.com<br />
              Teléfono: +34 123 456 789<br />
              Dirección: Calle Principal, 123
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          <p>&copy; 2026 SILUX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
