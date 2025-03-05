'use client';

import React from 'react';
import NavBarCatalogo from '../../components/NavBarCatalogo';
import Link from 'next/link';

const CategoryCard = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="relative">
      <Link
        href={link}
        className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition text-center border border-white block"
      >
        <div className="flex items-center justify-center">
          <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault(); // Evita que se active el link al pulsar el botón
              setShowModal(true);
            }}
            className="ml-2 text-white hover:text-gray-300"
            aria-label="Más información"
          >
            ℹ️
          </button>
        </div>
      </Link>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-black border border-white rounded-lg p-6 max-w-lg mx-auto">
            <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
            <p className="text-white">{description}</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const CatalogoPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Barra de Navegación */}
      <NavBarCatalogo />

      {/* Contenedor principal con un padding-top para evitar que el contenido se sobreponga al NavBar */}
      <div className="pt-20">
        {/* Hero Section */}
        <header className="flex flex-col items-center justify-center text-center px-6 py-10 space-y-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide text-white">
            Catálogo
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Explora nuestras categorías para encontrar tus zapatillas ideales.
            Diseños clásicos y exclusivos, ¡consúltanos por tu par preferido!
          </p>
        </header>

        {/* Sección Categorías */}
        <section
          id="categorias"
          className="h-screen pt-5 px-6 py-12 max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Nuestras Categorias
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Descubre nuestras líneas exclusivas:{' '}
            <span className="text-white font-semibold">G5</span>,{' '}
            <span className="text-white font-semibold">Top Quality</span>, y{' '}
            <span className="text-white font-semibold">OG</span>.Estas pueden ofrecer comodidad, estilo y rendimiento al mejor precio.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <CategoryCard
              title="G5"
              description="Zapatillas de alta gama, pensadas para quienes buscan calidad superior. Estas se envían entre 48-72 horas una vez confirmada tu compra. ¡Perfectas para quienes desean un producto premium a un precio accesible!"
              link="/catalogo/g5"
            />
            <CategoryCard
              title="Top Quality"
              description="Zapatillas de buena calidad y con diseños modernos. Las Top Quality se envían entre 24-48 horas luego de confirmar tu compra. ¡Son una opción ideal para quienes buscan lo mejor sin gastar de más!"
              link="/catalogo/top-quality"
            />
            <CategoryCard
              title="OG"
              description="Las OG son los modelos 100% auténticos. Con la garantía de calidad y los mejores diseños del mercado. Estas zapatillas se envían en las primeras 24 horas después de realizar tu compra. Se entregan con su correspondiente ticket de compra. ¡La opción perfecta para los verdaderos fanáticos de las marcas!"
              link="/catalogo/og"
            />
          </div>
        </section>
      </div>

      <Link
  href="/"
  className="fixed bottom-4 left-4 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg z-50"
  aria-label="Volver al catálogo"
>
  ←
</Link>
      
    </div>
  );
};

export default CatalogoPage;
