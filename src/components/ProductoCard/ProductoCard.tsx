"use client";

import React, { FC, useState } from "react";
import { useCart } from "../../context/CartContext";

interface ProductoCardProps {
  model: string;
  color: string;
  img_url: string;
  categoriaNombre: string;
}

const ProductoCard: FC<ProductoCardProps> = ({ model, color, img_url, categoriaNombre }) => {
  const { addToCart } = useCart();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: `${model}-${color}-${categoriaNombre}`, // id generado de forma simple
      model,
      color,
      talle: categoriaNombre, // usaremos la categoría como talle
      quantity: 1,
      img_url,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
      <img
        src={img_url}
        alt={model}
        className="w-full h-64 object-contain cursor-pointer"
        onClick={() => setIsImageModalOpen(true)}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{model}</h3>
        <p className="text-blue-600 text-sm">{color}</p>
        <p className="text-gray-500 text-sm mt-2">{categoriaNombre}</p>
        <button
          onClick={handleAddToCart}
          className="mt-auto bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-center"
        >
          Agregar al carrito
        </button>
        {added && (
          <p className="mt-2 text-green-600 font-semibold text-center">
            Agregado exitosamente
          </p>
        )}
      </div>

      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={img_url}
              alt={model}
              className="max-w-full max-h-screen object-contain"
            />
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
              aria-label="Cerrar imagen"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductoCard;
