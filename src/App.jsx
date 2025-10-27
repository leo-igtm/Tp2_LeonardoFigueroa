import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import  AuthProvider  from '@context/AuthContext';
import ProtectedRoute from '@context/ProtectedRoute';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Inicio from '@pages/Inicio';
import Login from '@pages/Login';
import Dashboard from '@pages/Dashboard';
import Error404 from '@pages/Error404';

import Menu from '@components/Menu';

export default function App() {

  return (
   <AuthProvider>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  )

}