"use client";

import { FC } from 'react';

interface ProductoCardProps {
  model: string;
  color: string;
  img_url: string;
  category: string;
}

const ProductoCard: FC<ProductoCardProps> = ({ model, color, img_url, category }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={img_url}
        alt={model}
        className="w-full h-64 object-contain"
      />
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{model}</h3>
        <p className="text-blue-600 text-sm">{color}</p>
        <p className="text-gray-500 text-sm mt-2">{category}</p>
      </div>
    </div>
  );
};

export default ProductoCard;
