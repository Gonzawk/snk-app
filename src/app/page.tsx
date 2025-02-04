// pages/HomePage.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import NavBar from '../components/NavBar'; // Importar el NavBar
import RedesSociales from '../components/RedesSociales'; // Importar el componente RedesSociales
import Footer from '@/components/Footer';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Usamos NavBar sin parámetros */}
      <NavBar />

    {/* Sección Inicio */}
<section id="inicio" className="h-screen pt-24 flex flex-col items-center justify-center text-center px-6 py-20 space-y-4">
  {/* Logo con tamaño dinámico */}
  <div className="mb-4 flex justify-center">
    <Image 
      src="/3.png" 
      alt="Sneakers Shop Logo" 
      width={200} 
      height={200} 
      priority 
      className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48"
    />
  </div>

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
            <p className="text-gray-300">Pares Clasicos, Exclusivos y Modernos, de la mejor calidad!</p>
          </Link>
          <Link
            href="/catalogo/top-quality"
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition text-center"
          >
            <h3 className="text-2xl font-semibold mb-2 text-green-500">Top Quality</h3>
            <p className="text-gray-300">Pares de buena calidad y con diseños modernos.</p>
          </Link>
          <Link
            href="/catalogo/og"
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition text-center"
          >
            <h3 className="text-2xl font-semibold mb-2 text-yellow-500">OG</h3>
            <p className="text-gray-300">Pares clasicos y exclusivos 100% Originales para los verdaderos fanáticos.</p>
          </Link>
        </div>

        
      </section>

     {/* Sección Sobre Nosotros (Contáctanos) */}
<section id="nosotros" className="min-h-screen pt-24 bg-gray-800 px-6 py-12 text-center text-white">
  <div className="max-w-5xl mx-auto">
    {/* Logo del negocio */}
    {/* <div className="mb-8 flex justify-center">
      <Image 
        src="/3.png" 
        alt="Sneakers Shop Logo" 
        width={100} 
        height={100} 
        priority 
        className="h-auto"
      />
    </div> */}

    <h2 className="text-4xl font-bold mb-6">Contáctanos</h2>
    {/* <p className="text-lg text-gray-300 mb-8">
      ¿Tienes preguntas? Escríbenos y estaremos encantados de ayudarte.
    </p> */}

    {/* Datos del negocio */}
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      {/* <h3 className="text-2xl font-semibold mb-4">Datos de Contacto</h3> */}
      <div className="flex flex-col sm:flex-row sm:justify-between text-gray-300">
        <div className="mb-4 sm:mb-0">
          <p className="text-lg">📍 Cordoba, Cordoba Capital.</p>
          <p className="text-lg">📞 Teléfono: +54 9 351 555 2099</p>
          <p className="text-lg">📧 Email: sneakerscta@hotmail.com</p>
        </div>
        <div>
          <p className="text-lg">⏰ Horario: Lunes a Viernes - 10:00 a 20:00</p>
          <p className="text-lg">📦 Envíos a todo el país</p>
        </div>
      </div>
    </div>

    {/* Localidades de Sucursales */}
    <div className="mt-12">
      <h3 className="text-3xl font-semibold mb-6">Nuestros Puntos de Retiro</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-blue-400">📌 Recreo</h4>
          <p className="text-gray-300">Felipe Varela s/n</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-green-400">📌 Catamarca</h4>
          <p className="text-gray-300">Rivadavia 750</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold text-yellow-400">📌 San Antonio</h4>
          <p className="text-gray-300">9 de Julio s/n</p>
        </div>
      </div>
    </div>

    {/* Redes Sociales */}
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-4">Síguenos en Redes</h3>
      <RedesSociales />
    </div>
  </div>
</section>



      <Footer />
    </div>
  );
};

export default HomePage;
