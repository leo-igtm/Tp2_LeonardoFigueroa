import { useEffect, useMemo, useState } from 'react';
import Productolista from '@components/Productolista';
import heroOne from '../assets/images 1.webp';
import heroTwo from '../assets/images 2.webp';
import heroThree from '../assets/images 3.webp';

export default function Inicio() {
  const slides = useMemo(
    () => [
      {
        src: heroOne,
        title: 'Menú de temporada',
        text: 'Ingredientes frescos y locales cada semana.',
      },
      {
        src: heroTwo,
        title: 'Platos favoritos',
        text: 'Sabores clásicos con un giro moderno.',
      },
      {
        src: heroThree,
        title: 'Postres artesanales',
        text: 'Dulces ligeros para cerrar la experiencia.',
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(id);
  }, [slides.length]);

  const goTo = (index) => {
    setActiveIndex(index);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <section className="group relative">
        <div className="relative h-[360px] overflow-hidden sm:h-[420px]">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={index !== activeIndex}
            >
              <img
                className="h-full w-full object-cover"
                src={slide.src}
                alt={slide.title}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-slate-900/40 dark:bg-slate-950/50" />
              <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-center px-4 text-white">
                <h1 className="text-3xl font-semibold sm:text-4xl">{slide.title}</h1>
                <p className="mt-2 max-w-xl text-sm text-slate-100 sm:text-base">
                  {slide.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => goTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeIndex
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Ir a ${slide.title}`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:bg-slate-900 dark:shadow-slate-900/20">
          <img className="h-56 w-full object-cover" src={heroTwo} alt="Plato principal" loading="lazy" />
          <div className="p-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Platos favoritos</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Sabores clásicos con un giro moderno.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:bg-slate-900 dark:shadow-slate-900/20">
          <img className="h-56 w-full object-cover" src={heroThree} alt="Postre artesanal" loading="lazy" />
          <div className="p-5">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Postres artesanales</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Dulces ligeros para cerrar la experiencia.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Nuestros Productos</h2>
        <div className="mt-6">
          <Productolista />
        </div>
      </section>
    </>
  );
}

/**/ 


