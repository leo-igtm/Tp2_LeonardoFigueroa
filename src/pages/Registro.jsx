import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, Alert } from 'react-bootstrap';
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
        <>
            <h1>Registro</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handleRegistro}>
                <Form.Group as={Row} className="mb-3" controlId="formEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu@email.com"
                            required
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPassword">
                    <Form.Label column sm="2">
                        Contraseña
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                            type="password" 
                            placeholder="Mínimo 6 caracteres"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Form.Text className="text-muted">
                            Mínimo 6 caracteres
                        </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPasswordConfirm">
                    <Form.Label column sm="2">
                        Confirmar Contraseña
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control 
                            type="password" 
                            placeholder="Confirma tu contraseña"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            required
                        />
                    </Col>
                </Form.Group>
                <Button type='submit' variant='success'>Registrarse</Button>
            </Form>
            <p className="mt-3">
                ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
            </p>
        </>
    )
}
