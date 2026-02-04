import { useAuth } from '@context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Registro() {

    const {registro} = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegistro = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validar que las contraseñas coincidan
        if (password !== passwordConfirm) {
            setError('Las contraseñas no coinciden');
            return;
        }

        try {
            registro(email, password);
            setSuccess('¡Registro exitoso! Redirigiendo al login...');
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <section className="mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center px-4 py-10">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm dark:bg-slate-900 dark:shadow-slate-900/30">
                <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Registro</h1>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Crea tu cuenta en minutos.</p>

                {error && (
                    <div className="mt-4 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                        {success}
                    </div>
                )}

                <form onSubmit={handleRegistro} className="mt-6 space-y-4">
                    <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="registro-email">
                            Email
                        </label>
                        <input
                            id="registro-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu@email.com"
                            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="registro-password">
                            Contraseña
                        </label>
                        <input
                            id="registro-password"
                            type="password"
                            placeholder="Mínimo 6 caracteres"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                            required
                        />
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Mínimo 6 caracteres</p>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="registro-password-confirm">
                            Confirmar Contraseña
                        </label>
                        <input
                            id="registro-password-confirm"
                            type="password"
                            placeholder="Confirma tu contraseña"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
                    >
                        Registrarse
                    </button>
                </form>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                    ¿Ya tienes cuenta?{' '}
                    <Link className="font-medium text-slate-900 hover:underline dark:text-white" to="/login">
                        Inicia sesión aquí
                    </Link>
                </p>
            </div>
        </section>
    )
}
