// src/components/ProductoCard.tsx

import { FC } from 'react';

interface ProductoCardProps {
  model: string;
  color: string;
  img_url: string;
  category: string;  // Nueva prop para la categoría
}

const ProductoCard: FC<ProductoCardProps> = ({ model, color, img_url, category }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Imagen del producto */}
      <img
        src={img_url}
        alt={model}
        className="w-full h-64 object-contain"  // Asegura que la imagen no se distorsione
      />
      <div className="p-4">
        {/* Nombre del producto */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{model}</h3>
        {/* Color del producto */}
        <p className="text-blue-600 text-sm">{color}</p>
        {/* Nombre de la categoría */}
        <p className="text-gray-500 text-sm mt-2">{category}</p>
      </div>
    </div>
  );
};

export default ProductoCard;
