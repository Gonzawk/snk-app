
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NavBarCatalogo: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para abrir y cerrar el menú

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-80 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Sneakers Shop
        </h1>

        {/* Icono de menú en dispositivos pequeños */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Cambia el estado de apertura del menú
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

        {/* Menú de navegación */}
        <div
          className={`lg:flex lg:space-x-8 text-lg text-gray-300 ${isMenuOpen ? 'flex flex-col w-full space-y-4 absolute top-16 left-0 bg-gray-800 p-4' : 'hidden'} lg:block`}
        >
          {/* Enlaces de navegación */}
          <Link href="/" className="hover:text-white transition">Inicio</Link>
          <Link href="/catalogo" className="hover:text-white transition">Catálogo</Link>
          <Link href="/catalogo/g5" className="hover:text-white transition">G5</Link>
          <Link href="/catalogo/top-quality" className="hover:text-white transition">Top Quality</Link>
          <Link href="/catalogo/og" className="hover:text-white transition">OG</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBarCatalogo;
