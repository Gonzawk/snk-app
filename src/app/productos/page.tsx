// src/app/productos/page.tsx
import { FC, useEffect, useState } from 'react';
import { getProductos } from '../../lib/api';
import ProductoCard from '../../components/ProductoCard/ProductoCard';

const ProductosPage: FC = () => {
  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosData = await getProductos();
        setProductos(productosData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-3xl font-semibold mb-6">Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <ProductoCard
            key={producto.id}
            modelo={producto.model}
            color={producto.color}
            img_url={producto.img_url}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductosPage;
