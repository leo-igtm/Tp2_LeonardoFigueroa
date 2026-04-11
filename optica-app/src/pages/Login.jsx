import { useAuth } from '@context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {

    const {login} = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        try {
            login(email, password);
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <section className="mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center px-4 py-10">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm dark:bg-slate-900 dark:shadow-slate-900/30">
                <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Login</h1>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Accede con tu correo y contraseña.</p>

                {error && (
                    <div className="mt-4 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="mt-6 space-y-4">
                    <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="login-email">
                            Email
                        </label>
                        <input
                            id="login-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu@email.com"
                            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="login-password">
                            Password
                        </label>
                        <input
                            id="login-password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                    >
                        Iniciar sesión
                    </button>
                </form>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                    ¿No tienes cuenta?{' '}
                    <Link className="font-medium text-slate-900 hover:underline dark:text-white" to="/registro">
                        Regístrate aquí
                    </Link>
                </p>
            </div>
        </section>
    )

}