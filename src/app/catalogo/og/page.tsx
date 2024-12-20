'use client';

import React, { useEffect, useState } from 'react';
import ProductoCard from '../../../components/ProductoCard/ProductoCard';
import { getProductosOG } from '../../../lib/api';
import NavBarCatalogo from '../../../components/NavBarCatalogo';

interface Producto {
  model: string;
  color: string;
  img_url: string;
  id?: string;
  categoriaNombre?: string;
}

interface ProductoConId extends Producto {
  id: string;
  categoriaNombre: string;
}

const OGPage = () => {
  const [productos, setProductos] = useState<ProductoConId[]>([]);
  const [productosFiltrados, setProductosFiltrados] = useState<ProductoConId[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [categorias, setCategorias] = useState<string[]>([]);

  const generateHash = (producto: Producto, index: number) => {
    const jsonString = JSON.stringify({ model: producto.model, color: producto.color, index });
    const encoder = new TextEncoder();
    const data = encoder.encode(jsonString);
    return btoa(String.fromCharCode(...data));
  };

  const fetchData = async () => {
    try {
      const fetchedProductos = await getProductosOG();
      let indexCounter = 0;
      const productosList: ProductoConId[] = Object.entries(fetchedProductos).flatMap(([categoriaNombre, productosCategoria]) =>
        productosCategoria.map((producto) => {
          const productoConId: ProductoConId = {
            ...producto,
            categoriaNombre,
            id: `${generateHash(producto, indexCounter)}-${indexCounter}`,
          };
          indexCounter++;
          return productoConId;
        })
      );

      setProductos(productosList);
      setProductosFiltrados(productosList);

      const categoriasList = Object.keys(fetchedProductos);
      setCategorias(categoriasList);
    } catch (error) {
      console.error('Error al obtener los productos de OG:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category) {
      const filtered = productos.filter((producto) => producto.categoriaNombre === category);
      setProductosFiltrados(filtered);
    } else {
      setProductosFiltrados(productos);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-15">
      <NavBarCatalogo />
      <header className="flex flex-col items-center justify-center text-center px-6 py-20 space-y-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Catálogo de Zapatillas OG
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Explora la linea OG con lo mejor de sneakers 100% originales!
        </p>
      </header>

      <div className="w-full flex justify-center mb-6 px-4">
        <select
          className="block w-full sm:w-64 p-3 bg-gray-800 text-white border border-gray-600 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <option value="">Filtrar por categoría</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full px-4">
        {loading ? (
          <div className="text-center text-xl font-semibold text-gray-300">Cargando productos...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
            {productosFiltrados.length === 0 ? (
              <div className="col-span-full text-center text-lg font-semibold text-red-500">
                No hay productos para mostrar
              </div>
            ) : (
              productosFiltrados.map((producto) => (
                <ProductoCard
                  key={producto.id}
                  model={producto.model}
                  color={producto.color}
                  img_url={producto.img_url}
                  categoriaNombre={producto.categoriaNombre}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OGPage;
