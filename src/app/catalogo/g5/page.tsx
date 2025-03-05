'use client';

import React, { useEffect, useState } from 'react';
import ProductoCard from '../../../components/ProductoCard/ProductoCard';
import { getProductos } from '../../../lib/api';
import NavBarCatalogo from '../../../components/NavBarCatalogo';
import Link from 'next/link';

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

const G5Page = () => {
  const [productos, setProductos] = useState<ProductoConId[]>([]);
  const [productosFiltrados, setProductosFiltrados] = useState<ProductoConId[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // Filtra por talle (categoria)
  const [modelFilter, setModelFilter] = useState<string>(''); // Filtra por modelo
  const [categorias, setCategorias] = useState<string[]>([]);

  const generateHash = (producto: Producto, index: number) => {
    const jsonString = JSON.stringify({ model: producto.model, color: producto.color, index });
    const encoder = new TextEncoder();
    const data = encoder.encode(jsonString);
    return btoa(String.fromCharCode(...data));
  };

  const fetchData = async () => {
    try {
      const fetchedProductos = await getProductos();
      let indexCounter = 0;
      const productosList: ProductoConId[] = Object.entries(fetchedProductos).flatMap(
        ([categoriaNombre, productosCategoria]) =>
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
      console.error('Error al obtener los productos de G5:', error);
    } finally {
      setLoading(false);
    }
  };

  // Función para actualizar el filtro de talle (categoría)
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  // Combinar ambos filtros (talle y modelo) cada vez que cambien
  useEffect(() => {
    const filtered = productos.filter((producto) => {
      const matchesCategory =
        selectedCategory === '' || producto.categoriaNombre === selectedCategory;
      const matchesModel =
        modelFilter === '' ||
        producto.model.toLowerCase().includes(modelFilter.toLowerCase());
      return matchesCategory && matchesModel;
    });
    setProductosFiltrados(filtered);
  }, [selectedCategory, modelFilter, productos]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-10">
      <NavBarCatalogo />

      <header className="flex flex-col items-center justify-center text-center px-6 py-10 space-y-6">
       {/*  <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide text-white">
           G5
        </h1> */}
        <p className="text-lg sm:text-xl text-gray-300 mt-4">
          Explora la línea G5, y descubrí pares clásicos, exclusivos y modernos al mejor precio!
        </p>
        <p className="text-lg sm:text-xl text-gray-300">
          Todos los modelos a $130.000 
        </p>
        <p className="text-lg sm:text-xl text-gray-300">
          El precio incluye el envio.
        </p>
        <p className="text-lg sm:text-xl text-gray-300">
          Consultar precios de camperas, remeras, buzos, ojotas, perfumes y talles para niños con una foto del producto y talle por WhatsApp.
        </p>
        <p className="text-lg sm:text-xl text-gray-300 font-bold text-yellow-400">
          ¡PRECIOS EN EFECTIVO O TRANSFERENCIA!
        </p>
      </header>

      {/* Sección de filtros: búsqueda por modelo y por talle */}
      <div className="w-full flex flex-col sm:flex-row justify-center mb-6 px-4 gap-4">
        <input
          type="text"
          placeholder="Filtrar por modelo"
          className="block w-full sm:w-64 p-3 bg-black text-white border border-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-white"
          value={modelFilter}
          onChange={(e) => setModelFilter(e.target.value)}
        />
        <select
          className="block w-full sm:w-64 p-3 bg-black text-white border border-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-white"
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <option value="">Filtrar por talle</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>
      
      

      <div className="w-full px-4">
        {loading ? (
          <div className="text-center text-xl font-semibold text-gray-300">
            Cargando productos...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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

      <Link
  href="/catalogo"
  className="fixed bottom-4 left-4 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg z-50"
  aria-label="Volver al catálogo"
>
  ←
</Link>



    </div>
  );
};



export default G5Page;
