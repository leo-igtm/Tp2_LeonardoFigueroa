import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    // Cargar tema guardado del localStorage
    useEffect(() => {
        const temaGuardado = localStorage.getItem('tema') || 'light';
        setTheme(temaGuardado);
    }, []);

    const toggleTheme = () => {
        const nuevoTema = theme === 'light' ? 'dark' : 'light';
        setTheme(nuevoTema);
        localStorage.setItem('tema', nuevoTema);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    return useContext(ThemeContext);
};
