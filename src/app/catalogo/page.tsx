'use client';

import React from 'react';
import Link from 'next/link';

const CatalogoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center px-6 py-10 space-y-6">
        <img
          src="/Data/Logoweb.svg"
          alt="Logo"
          className="h-16 sm:h-24"
        />
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Catálogo de Zapatillas
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Explora nuestras categorías para encontrar tus zapatillas ideales. Diseños clasicos y exclusivos, consultanos por tu par preferido!
        </p>
      </header>

      {/* Sección de Categorías */}
      <section className="px-6 py-12 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Nuestras Categorías</h2>
        <p className="text-lg text-gray-400 mb-8">
          Descubre nuestras líneas exclusivas: <span className="text-blue-500 font-semibold">G5</span>, <span className="text-green-500 font-semibold">Top Quality</span>, y <span className="text-yellow-500 font-semibold">OG</span>. Cada línea está diseñada para ofrecer comodidad, estilo y rendimiento.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link
            href="/catalogo/g5"
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition text-center"
          >
            <h3 className="text-2xl font-semibold mb-2 text-blue-500">G5</h3>
            <p className="text-gray-300">Innovación y estilo para el día a día.</p>
          </Link>
          <Link
            href="/catalogo/top-quality"
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition text-center"
          >
            <h3 className="text-2xl font-semibold mb-2 text-green-500">Top Quality</h3>
            <p className="text-gray-300">Diseñadas para el máximo rendimiento.</p>
          </Link>
          <Link
            href="/catalogo/og"
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition text-center"
          >
            <h3 className="text-2xl font-semibold mb-2 text-yellow-500">OG</h3>
            <p className="text-gray-300">Estilo clásico con un toque moderno.</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CatalogoPage;
