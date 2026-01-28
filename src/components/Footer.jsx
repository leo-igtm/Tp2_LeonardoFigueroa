import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>SILUX</h5>
            <p className="text-muted">
              Disfruta de los mejores platos con ingredientes frescos y locales.
            </p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-white">Inicio</Link></li>
              <li><Link to="/Productolista" className="text-decoration-none text-white">Productos</Link></li>
              <li><Link to="/login" className="text-decoration-none text-white">Acceder</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contacto</h5>
            <p className="text-muted">
              Email: info@silux.com<br />
              Teléfono: +34 123 456 789<br />
              Dirección: Calle Principal, 123
            </p>
          </Col>
        </Row>
        <Row className="mt-4 pt-4 border-top border-secondary">
          <Col md={12} className="text-center text-muted">
            <p>&copy; 2026 SILUX. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
