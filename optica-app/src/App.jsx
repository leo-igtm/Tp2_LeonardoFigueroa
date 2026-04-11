import './App.css'
import  AuthProvider  from '@context/AuthContext';
import ThemeProvider, { useTheme } from '@context/ThemeContext';
import ProtectedRoute from '@context/ProtectedRoute';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Inicio from '@pages/Inicio';
import Login from '@pages/Login';
import Registro from '@pages/Registro';
import Dashboard from '@pages/Dashboard';
import Error404 from '@pages/Error404';

import Menu from '@components/Menu';
import Footer from '@components/Footer';
import Productolista from '@components/Productolista';
import { useEffect } from 'react';

function AppContent() {
  const { theme } = useTheme();

  // Aplicar tema al documento
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Menu />
      <main className="mx-auto min-h-[70vh] max-w-6xl px-4 py-6 text-slate-900 dark:text-slate-100">
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/Productolista' element={<Productolista />} />
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default function App() {

  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  )

}