import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../assets/images 1.webp';
import img2 from '../assets/images 2.webp';
import img3 from '../assets/images 3.webp';

function Productolista() {
  const productos = [
    { src: img1, alt: 'Producto 1', titulo: 'Producto 1', texto: 'Descripción breve del producto 1.' },
    { src: img2, alt: 'Producto 2', titulo: 'Producto 2', texto: 'Descripción breve del producto 2.' },
    { src: img3, alt: 'Producto 3', titulo: 'Producto 3', texto: 'Descripción breve del producto 3.' },
    { src: img1, alt: 'Producto 4', titulo: 'Producto 4', texto: 'Descripción breve del producto 4.' },
    { src: img2, alt: 'Producto 2', titulo: 'Producto 2', texto: 'Descripción breve del producto 2.' },
    { src: img3, alt: 'Producto 3', titulo: 'Producto 3', texto: 'Descripción breve del producto 3.' },
    { src: img1, alt: 'Producto 1', titulo: 'Producto 1', texto: 'Descripción breve del producto 1.' },
    { src: img2, alt: 'Producto 2', titulo: 'Producto 2', texto: 'Descripción breve del producto 2.' },
    
  ];

  return (
    <Row xs={1} sm={2} md={4} className="g-4">
      {productos.map((p, idx) => (
        <Col key={idx}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src={p.src}
              alt={p.alt}
              loading="lazy"
            />
            <Card.Body>
              <Card.Title>{p.titulo}</Card.Title>
              <Card.Text>{p.texto}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Productolista;