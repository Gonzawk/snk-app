// src/app/page.tsx

'use client';

import { FC, useEffect, useState } from 'react';
import { getProductos, getCategorias } from '../lib/api';
import ProductoCard from '../components/ProductoCard/ProductoCard';

const ProductosPage: FC = () => {
  const [productos, setProductos] = useState<any[]>([]);
  const [categorias, setCategorias] = useState<any[]>([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>('');
  const [productosFiltrados, setProductosFiltrados] = useState<any[]>([]);

  // Obtener productos y categorías
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosData = await getProductos();
        setProductos(productosData);
        const categoriasData = await getCategorias();
        setCategorias(categoriasData);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  // Filtrar productos por categoría
  useEffect(() => {
    if (categoriaSeleccionada) {
      setProductosFiltrados(
        productos.filter((producto) => producto.category === categoriaSeleccionada)
      );
    } else {
      setProductosFiltrados(productos); // Si no hay filtro, mostrar todos los productos
    }
  }, [categoriaSeleccionada, productos]);

  // Obtener nombre de la categoría
  const getCategoryName = (categoryId: string) => {
    const category = categorias.find((cat) => cat.id === categoryId);
    return category ? category.category_name : 'Categoría desconocida';
  };

  return (
    <div className="min-h-screen p-8 bg-black text-white">
      {/* Título "Catálogo" centrado */}
      <h2 className="text-4xl font-semibold mb-6 text-center text-white">Catálogo</h2>

      {/* Filtro por categoría */}
      <div className="mb-6 flex justify-center">
        <div className="flex items-center bg-gray-800 p-3 rounded-md shadow-lg w-full sm:w-auto">
          <label className="text-lg font-medium mr-4">Filtrar por categoría</label>
          <select
            className="p-2 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            value={categoriaSeleccionada}
          >
            <option value="">Todas las categorías</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.category_name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Contenedor de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productosFiltrados.map((producto) => (
          <ProductoCard
            key={producto.id}
            model={producto.model}
            color={producto.color}
            img_url={producto.img_url}
            category={getCategoryName(producto.category)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductosPage;
