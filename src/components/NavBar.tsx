'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para abrir y cerrar el menú

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-90 shadow border-b border-black z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center relative">
        <h1 className="text-xl font-extrabold text-black text-center">
          Sneakers Shop
        </h1>

        {/* Icono de menú en dispositivos pequeños */}
        <button
          className="absolute right-6 lg:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>
      {/* Menú de navegación */}
      <div
        className={`${
          isMenuOpen
            ? 'flex flex-col items-center space-y-4 bg-white p-4 border-t border-black'
            : 'hidden'
        } lg:flex lg:space-x-8 lg:justify-center text-lg text-black font-bold`}
      >
        <Link href="#inicio" className="hover:text-gray-600 transition text-center">Inicio</Link>
        <Link href="/catalogo" className="hover:text-gray-600 transition text-center">Catalogo</Link>
        <Link href="#nosotros" className="hover:text-gray-600 transition text-center">Contáctanos</Link>
      </div>
    </nav>
  );
};

export default NavBar;
