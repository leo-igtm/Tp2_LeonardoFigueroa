import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { useTheme } from '@context/ThemeContext';

/*
function SubMenu(p_is_logueado){
    if( p_is_logueado ){
        return <Nav.Link as={Link} to="/dashboard"> Dashboard </Nav.Link>
    }else{
        return <Nav.Link as={Link} to="/login"> Login </Nav.Link>
    }
}

   <Nav.Link as={Link} to="/candidatos"> Votación </Nav.Link>
   <Nav.Link as={Link} to="/productos"> Tarea </Nav.Link>
   <Nav.Link as={Link} to="/pokemones"> Pokemones </Nav.Link>
*/

export default function Menu() {

    const {is_logueado, logout} = useAuth();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate("/login");
    }

    return (
        <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                <Link to="/" className="text-lg font-semibold tracking-wide text-slate-900 dark:text-slate-100">
                    SILUX
                </Link>

                <nav className="hidden items-center gap-4 lg:flex">
                    <Link className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white" to="/">
                        Inicio
                    </Link>
                    <Link className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white" to="/Productolista">
                        Productos
                    </Link>
                    <Link className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white" to="/Productoitem">
                        Secciones 
                    </Link>                          
                    {is_logueado ? (
                        <>
                            <Link className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white" to="/dashboard">
                                Dashboard
                            </Link>
                            <button
                                onClick={handleLogout}
                                type="button"
                                className="rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-700"
                            >
                                Cerrar sesión
                            </button>
                        </>
                    ) : (
                        <Link className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white" to="/login">
                            Ingresa
                        </Link>
                    )}
                    <button
                        onClick={toggleTheme}
                        type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                        aria-label="Cambiar tema"
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </nav>

                <div className="flex items-center gap-2 lg:hidden">
                    <button
                        onClick={toggleTheme}
                        type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-lg text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                        aria-label="Cambiar tema"
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                        aria-label="Abrir menú"
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            <div className={`border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4">
                    <Link className="text-sm font-medium text-slate-700 dark:text-slate-200" to="/" onClick={() => setIsOpen(false)}>
                        Inicio
                    </Link>
                    <Link className="text-sm font-medium text-slate-700 dark:text-slate-200" to="/Productolista" onClick={() => setIsOpen(false)}>
                        Productos
                    </Link>
                    {is_logueado ? (
                        <>
                            <Link className="text-sm font-medium text-slate-700 dark:text-slate-200" to="/dashboard" onClick={() => setIsOpen(false)}>
                                Dashboard
                            </Link>
                            <button
                                onClick={(e) => {
                                    handleLogout(e);
                                    setIsOpen(false);
                                }}
                                type="button"
                                className="w-full rounded-md bg-rose-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-700"
                            >
                                Cerrar sesión
                            </button>
                        </>
                    ) : (
                        <Link className="text-sm font-medium text-slate-700 dark:text-slate-200" to="/login" onClick={() => setIsOpen(false)}>
                            Ingresa
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );

}