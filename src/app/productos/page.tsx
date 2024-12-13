// src/app/productos/page.tsx
'use client';

import { FC, useEffect, useState } from 'react';
import ProductoCard from '../../components/ProductoCard/ProductoCard';
import { getProductos, getCategorias } from '../../lib/api';

// Define los tipos adecuados para Producto y Categoria
interface Producto {
  id: string;
  model: string;
  color: string;
  img_url: string;
  category: string;
}

interface Categoria {
  id: string;
  category_name: string;
}

const ProductosPage: FC = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const fetchData = async () => {
      try {
        const fetchedProductos = await getProductos();
        const fetchedCategorias = await getCategorias();
        setProductos(fetchedProductos);
        setCategorias(fetchedCategorias);
      } catch (error) {
        console.error('Error al obtener productos o categorías:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getCategoryName = (categoryId: string): string => {
    const category = categorias.find((cat) => cat.id === categoryId);
    return category ? category.category_name : 'Categoría desconocida';
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="min-h-screen p-8 bg-black text-white">
      <h2 className="text-4xl font-semibold mb-6 text-center text-white">Catálogo</h2>

      <div suppressHydrationWarning={true}>
        {isClient ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productos.map((producto) => (
              <ProductoCard
                key={producto.id}
                model={producto.model}
                color={producto.color}
                img_url={producto.img_url}
                category={getCategoryName(producto.category)}
              />
            ))}
          </div>
        ) : (
          <div>Cargando productos...</div>
        )}
      </div>
    </div>
  );
};

export default ProductosPage;
