'use client';

import React from 'react';
import NavBarCatalogo from '../../components/NavBarCatalogo'; // Importar el componente
import Link from 'next/link'; // Agrega esta línea al inicio de tu archivo

const CatalogoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Barra de Navegación */}
      <NavBarCatalogo />

      {/* Contenedor principal con un padding-top para evitar que el contenido se sobreponga al NavBar */}
      <div className="pt-20"> {/* Se agrega un padding-top de 24 unidades */}
        {/* Hero Section */}
        <header className="flex flex-col items-center justify-center text-center px-6 py-10 space-y-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Catálogo de Zapatillas
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Explora nuestras categorías para encontrar tus zapatillas ideales. Diseños clásicos y exclusivos, ¡consúltanos por tu par preferido!
          </p>
        </header>

        {/* Sección Categorías */}
        <section id="categorias" className="h-screen pt-5 px-6 py-12 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Nuestras Categorias</h2>
          <p className="text-lg text-gray-400 mb-8">
            Descubre nuestras líneas exclusivas: <span className="text-blue-500 font-semibold">G5</span>, <span className="text-green-500 font-semibold">Top Quality</span>, y <span className="text-yellow-500 font-semibold">OG</span>. Cada línea está diseñada para ofrecer comodidad, estilo y rendimiento.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/catalogo/g5"
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition text-center"
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-500">G5</h3>
              <p className="text-gray-300">Zapatillas de alta gama, pensadas para quienes buscan calidad superior. Estas se envían entre 48-72 horas una vez confirmada tu compra. ¡Perfectas para quienes desean un producto premium a un precio accesible!</p>
            </Link>
            <Link
              href="/catalogo/top-quality"
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition text-center"
            >
              <h3 className="text-2xl font-semibold mb-2 text-green-500">Top Quality</h3>
              <p className="text-gray-300">Zapatillas de buena calidad y con diseños modernos. Las Top Quality se envían entre 24-48 horas luego de confirmar tu compra. ¡Son una opción ideal para quienes buscan lo mejor sin gastar de más!</p>
            </Link>
            <Link
              href="/catalogo/og"
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition text-center"
            >
              <h3 className="text-2xl font-semibold mb-2 text-yellow-500">OG</h3>
              <p className="text-gray-300">Las Originales son los modelos 100% auténticos. Con la garantía de calidad y los mejores diseños del mercado. Estas zapatillas se envían en las primeras 24 horas después de realizar tu compra. ¡La opción perfecta para los verdaderos fanáticos de las marcas!</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CatalogoPage;
