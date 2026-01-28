import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import Productolista from '@components/Productolista';
import heroOne from '../assets/images 1.webp';
import heroTwo from '../assets/images 2.webp';
import heroThree from '../assets/images 3.avif';

export default function Inicio() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <picture>
            <source srcSet={heroOne} type="image/webp" />
            <img
              className="d-block w-100"
              src={heroOne}
              alt="Menú destacado"
              loading="lazy"
            />
          </picture>
          <Carousel.Caption>
            <h3>Menú de temporada</h3>
            <p>Ingredientes frescos y locales cada semana.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source srcSet={heroTwo} type="image/webp" />
            <img
              className="d-block w-100"
              src={heroTwo}
              alt="Plato principal"
              loading="lazy"
            />
          </picture>
          <Carousel.Caption>
            <h3>Platos favoritos</h3>
            <p>Sabores clásicos con un giro moderno.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source srcSet={heroThree} type="image/avif" />
            <img
              className="d-block w-100"
              src={heroThree}
              alt="Postre artesanal"
              loading="lazy"
            />
          </picture>
          <Carousel.Caption>
            <h3>Postres artesanales</h3>
            <p>Dulces ligeros para cerrar la experiencia.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="my-5">
        <h2 className="mb-4">Nuestros Productos</h2>
        <Productolista />
      </Container>
    </>
  );
}




