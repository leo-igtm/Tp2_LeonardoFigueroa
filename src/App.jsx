import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
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

function AppContent() {
  const { theme } = useTheme();

  return (
    <div data-bs-theme={theme}>
      <BrowserRouter>
        <Menu />
        <Container>
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
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
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