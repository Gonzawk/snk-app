// pages/HomePage.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import RedesSociales from '../components/RedesSociales';
import Footer from '@/components/Footer';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />

      {/* Sección Inicio: Logo, texto de bienvenida y botones */}
      <section
        id="inicio"
        className="min-h-screen pt-24 flex flex-col items-center justify-center text-center px-6 py-20"
      >
        <div className="flex justify-center">
          {/* Para modificar manualmente el tamaño de la imagen en móviles y computadoras, ajusta las clases "max-w-[...]" */}
          <Image 
            src="/3.png" 
            alt="Logo" 
            width={500} 
            height={500} 
            priority 
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[500px] rounded-full shadow border border-white object-contain"
          />
        </div>
        <p className="text-lg sm:text-xl text-white leading-relaxed max-w-3xl mt-6">
          Bienvenidos a nuestra tienda online. Descubre modelos exclusivos y clasicos, de diferentes calidades y precios.
        </p>
        <div className="space-x-4 mt-6">
          <Link
            href="/catalogo"
            className="px-6 py-3 border border-white bg-transparent hover:bg-white hover:text-black rounded-md text-lg shadow transition transform hover:scale-105"
          >
            Ver Catálogo
          </Link>
          <Link
            href="#nosotros"
            className="px-6 py-3 border border-white bg-transparent hover:bg-white hover:text-black rounded-md text-lg shadow transition transform hover:scale-105"
          >
            Contáctanos
          </Link>
        </div>
      </section>

      {/* Divisor entre secciones */}
      <hr className="w-full border-t border-white my-10" />

      {/* Sección Contáctanos */}
      <section id="nosotros" className="min-h-screen pt-24 bg-black px-6 py-12 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Contáctanos</h2>
          <div className="bg-black p-6 rounded-lg shadow border border-white">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <p className="text-lg">📍 Córdoba Capital.</p>
                <p className="text-lg">📞 +54 9 351 555 2099</p>
                <p className="text-lg">📧 sneakerscta@hotmail.com</p>
              </div>
              <div>
                <p className="text-lg">⏰ Lunes a Viernes - 10:00 a 20:00</p>
                <p className="text-lg">📦 Envíos a todo el país</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-3xl font-semibold mb-6">Nuestros Puntos de Retiro</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-black p-4 rounded-lg shadow border border-white">
                <h4 className="text-xl font-semibold">📌 Recreo</h4>
                <p className="text-lg">Felipe Varela s/n</p>
              </div>
              <div className="bg-black p-4 rounded-lg shadow border border-white">
                <h4 className="text-xl font-semibold">📌 Catamarca</h4>
                <p className="text-lg">Rivadavia 750</p>
              </div>
              <div className="bg-black p-4 rounded-lg shadow border border-white">
                <h4 className="text-xl font-semibold">📌 San Antonio</h4>
                <p className="text-lg">9 de Julio s/n</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-50">Síguenos en Redes</h3>
            <RedesSociales />
          </div>
        </div>
        <div className="mb-6"></div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
