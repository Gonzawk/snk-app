// pages/HomePage.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import NavBar from '../components/NavBar'; // Importar el NavBar
import RedesSociales from '../components/RedesSociales'; // Importar el componente RedesSociales
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Usamos NavBar sin parámetros */}
      <NavBar />

      {/* Sección Inicio */}
      <section id="inicio" className="h-screen pt-24 flex flex-col items-center justify-center text-center px-6 py-20 space-y-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          SNEAKERS SHOP
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          ¡Bienvenidos a Sneakers Shop! 👟✨<br />
          Nos alegra darles la bienvenida a nuestro emprendimiento, donde encontrarán la más grande variedad de zapatillas para todos los gustos y presupuestos. <br /><br />
          En Sneakers Shop nos esforzamos por ofrecerte modelos exclusivos y de calidad, para que puedas encontrar el par perfecto, ¡sin importar lo que estés buscando!<br /><br />
          <strong>🔸 ¿Qué nos hace diferentes?</strong><br />
          Trabajamos con 3 categorías de zapatillas para que tengas opciones para todos los gustos y necesidades: <br />
          ¡Explora nuestras opciones y encuentra el par ideal para ti!<br /><br />
        </p>
        <div className="space-x-4">
          <Link
            href="/catalogo"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg shadow-lg transition transform hover:scale-105"
          >
            Ver Catálogo
          </Link>
          <Link
            href="#nosotros"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md text-lg shadow-lg transition transform hover:scale-105"
          >
            Contáctanos
          </Link>
        </div>
      </section>

      {/* Sección Categorías */}
      <section id="categorias" className="h-screen pt-24 px-6 py-12 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Nuestras Categorias </h2>
        <p className="text-lg text-gray-400 mb-8">
          Descubre nuestras líneas exclusivas: <span className="text-blue-500 font-semibold">G5</span>, <span className="text-green-500 font-semibold">Top Quality</span>, y <span className="text-yellow-500 font-semibold">OG</span>. Cada línea está diseñada para ofrecer comodidad, estilo y rendimiento.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
            <p className="text-gray-300">Zapatillas de buena calidad y con diseños modernos.</p>
          </Link>
          <Link
            href="/catalogo/og"
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition text-center"
          >
            <h3 className="text-2xl font-semibold mb-2 text-yellow-500">OG</h3>
            <p className="text-gray-300">Modelos 100% auténticos para los verdaderos fanáticos.</p>
          </Link>
        </div>
      </section>

      {/* Sección Sobre Nosotros (Contáctanos) */}
      <section id="nosotros" className="h-screen pt-24 bg-gray-800 px-6 py-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
        <p className="text-lg text-gray-400 mb-8">
          ¿Tienes preguntas? Escríbenos y estaremos encantados de ayudarte.
        </p>

        {/* Agregamos el componente RedesSociales aquí */}
        <RedesSociales />
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
