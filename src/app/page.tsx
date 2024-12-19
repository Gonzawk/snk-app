'use client';

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center px-6 py-20 space-y-6">
        {/* <img
          src="/Data/Logoweb.svg"
          alt="Logo"
          className="h-16 sm:h-24"
        /> */}
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Bienvenido al Catálogo de Zapatillas
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Explora nuestros modelos más recientes y encuentra el par perfecto para ti.
        </p>
        <div className="space-x-4">
          <Link
            href="/catalogo"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg shadow-lg transition transform hover:scale-105"
          >
            Ver Catálogo
          </Link>
          <Link
            href="#contacto"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md text-lg shadow-lg transition transform hover:scale-105"
          >
            Contáctanos
          </Link>
        </div>
      </header>

      {/* Sección de Presentación */}
      <section className="px-6 py-12 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Nuestros Modelos</h2>
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

      {/* {/* Sección de Contacto *
      <footer id="contacto" className="bg-gray-800 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Contáctanos</h2>
          <p className="text-gray-400 mb-8">
            ¿Tienes preguntas? Escríbenos y estaremos encantados de ayudarte.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/Data/facebook-icon.svg"
                alt="Facebook"
                className="h-10 w-10 hover:scale-110 transform transition"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/Data/instagram-icon.svg"
                alt="Instagram"
                className="h-10 w-10 hover:scale-110 transform transition"
              />
            </a>
            <a href="mailto:contacto@zapatillas.com">
              <img
                src="/Data/email-icon.svg"
                alt="Correo"
                className="h-10 w-10 hover:scale-110 transform transition"
              />
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default HomePage;
