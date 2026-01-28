import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export default function AuthProvider( {children} ){

    const [is_logueado, setIsLogueado] = useState(false);
    const [usuario_actual, setUsuarioActual] = useState(null);

    // Cargar usuario del localStorage al iniciar
    useEffect(() => {
        const usuarioGuardado = localStorage.getItem('usuario_logueado');
        if (usuarioGuardado) {
            setUsuarioActual(usuarioGuardado);
            setIsLogueado(true);
        }
    }, []);

    const registro = (email, password) => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        
        // Verificar si el email ya existe
        if (usuarios.some(u => u.email === email)) {
            throw new Error('El email ya está registrado');
        }

        // Validaciones básicas
        if (!email || !password) {
            throw new Error('Email y contraseña son requeridos');
        }
        if (password.length < 6) {
            throw new Error('La contraseña debe tener al menos 6 caracteres');
        }

        // Agregar nuevo usuario
        usuarios.push({ email, password });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        return true;
    };

    const login = (email, password) => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        const usuario = usuarios.find(u => u.email === email && u.password === password);
        
        if (!usuario) {
            throw new Error('Email o contraseña incorrectos');
        }

        setIsLogueado(true);
        setUsuarioActual(email);
        localStorage.setItem('usuario_logueado', email);
        return true;
    };

    const logout = () => {
        setIsLogueado(false);
        setUsuarioActual(null);
        localStorage.removeItem('usuario_logueado');
    };

    return (
        <AuthContext.Provider value={ {is_logueado, usuario_actual, login, logout, registro} }>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(AuthContext);
}