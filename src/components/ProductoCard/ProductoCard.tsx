"use client";

import { FC } from "react";

interface ProductoCardProps {
  model: string;
  color: string;
  img_url: string;
  categoriaNombre: string;
}

const ProductoCard: FC<ProductoCardProps> = ({ model, color, img_url, categoriaNombre }) => {
  const numeroWhatsApp = "5493515552099"; // Reemplaza con tu número de WhatsApp
  const usuarioInstagram = "sneakeers_shop_"; // Reemplaza con tu usuario de Instagram

  const mensaje = `Hola, estoy interesado en el siguiente producto:
  📌 Modelo: ${model}
  🎨 Color: ${color}
  📂 Categoría: ${categoriaNombre}
  
  ¿Está disponible?`;

  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  const linkInstagram = `https://ig.me/m/${usuarioInstagram}/`; // O usar https://ig.me/m/tu_usuario

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
      <img
        src={img_url}
        alt={model}
        className="w-full h-64 object-contain"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{model}</h3>
        <p className="text-blue-600 text-sm">{color}</p>
        <p className="text-gray-500 text-sm mt-2">{categoriaNombre}</p>

        {/* Botón de WhatsApp */}
        <a
          href={linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-center"
        >
          Pedir por WhatsApp
        </a>

        {/* Botón de Instagram */}
        <a
          href={linkInstagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 text-white font-bold py-2 px-4 rounded-lg text-center"
        >
          Pedir por Instagram
        </a>
      </div>
    </div>
  );
};

export default ProductoCard;
