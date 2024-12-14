'use client';

import React, { useEffect, useState } from 'react';
import ProductoCard from '../components/ProductoCard/ProductoCard';  // Asegúrate de tener este archivo correctamente importado
import { getProductos } from '../lib/api';  // Asegúrate de que la función de API esté bien configurada

// Define el tipo Producto
interface Producto {
  model: string;
  color: string;
  img_url: string;
  id?: string;  // Agregamos como opcional
  categoriaNombre?: string;  // Agregamos como opcional
}

// Define un nuevo tipo que incluye id y categoriaNombre
interface ProductoConId extends Producto {
  id: string;
  categoriaNombre: string;
}

const ProductosPage = () => {
  const [productos, setProductos] = useState<ProductoConId[]>([]);
  const [productosFiltrados, setProductosFiltrados] = useState<ProductoConId[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('');  // Estado para la categoría seleccionada
  const [categorias, setCategorias] = useState<string[]>([]);  // Estado para almacenar las categorías

  // Función para generar un hash único utilizando model, color y un contador
  const generateHash = (producto: Producto, index: number) => {
    const jsonString = JSON.stringify({ model: producto.model, color: producto.color, index });
    const encoder = new TextEncoder();
    const data = encoder.encode(jsonString);
    return btoa(String.fromCharCode(...data));  // Convertimos el array de bytes a Base64
  };

  // Función para obtener los productos
  const fetchData = async () => {
    try {
      const fetchedProductos = await getProductos();
      console.log(fetchedProductos);

      let indexCounter = 0;
      const productosList: ProductoConId[] = Object.entries(fetchedProductos).flatMap(([categoriaNombre, productosCategoria]) =>
        productosCategoria.map((producto) => {
          const productoConId: ProductoConId = {
            ...producto,
            categoriaNombre,  // Agregamos el nombre de la categoría
            id: `${generateHash(producto, indexCounter)}-${indexCounter}`, // Usamos el hash único generado + contador
          };
          indexCounter++; // Incrementamos el contador
          return productoConId;
        })
      );

      setProductos(productosList);
      setProductosFiltrados(productosList);

      // Extraemos las categorías únicas para el filtro
      const categoriasList = Object.keys(fetchedProductos);
      setCategorias(categoriasList);
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    } finally {
      setLoading(false);
    }
  };

  // Función para manejar el cambio de categoría
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);

    // Filtrar productos por categoría
    if (category) {
      const filtered = productos.filter((producto) => producto.categoriaNombre === category);
      setProductosFiltrados(filtered);
    } else {
      setProductosFiltrados(productos);
    }
  };

  // useEffect para cargar los productos solo una vez cuando el componente se monta
  useEffect(() => {
    fetchData();
  }, []);  // Aseguramos que esto solo se ejecute una vez al montar el componente

  useEffect(() => {
    // Si la categoría seleccionada cambia, filtramos los productos
    if (selectedCategory) {
      const filtered = productos.filter((producto) => producto.categoriaNombre === selectedCategory);
      setProductosFiltrados(filtered);
    } else {
      setProductosFiltrados(productos);  // Si no hay categoría seleccionada, mostramos todos los productos
    }
  }, [selectedCategory, productos]);  // Solo se ejecuta cuando selectedCategory o productos cambian

  return (
    <div className="productos-container min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Título y logo */}
      <div className="flex flex-wrap items-center justify-between mb-6 px-4 py-4">
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Catálogo</h1>
          <img src="/Data/Logoweb.svg" alt="Logo" className="h-12 sm:h-16" /> {/* Ajusta el tamaño del logo */}
        </div>

        {/* Filtro por categoría */}
        <div className="relative w-full sm:w-auto mt-4 sm:mt-0">
          <select
            className="block w-full sm:w-48 p-3 bg-gray-800 text-white border border-gray-600 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      </div>

      {/* Cargando o mostrando productos */}
      <div className="flex-grow">
        {loading ? (
          <div className="text-center text-xl font-semibold text-gray-300">Cargando productos...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
            {productosFiltrados.length === 0 ? (
              <div className="col-span-full text-center text-lg font-semibold text-red-500">No hay productos para mostrar</div>
            ) : (
              productosFiltrados.map((producto) => (
                <ProductoCard
                  key={producto.id}  // Usamos el ID generado como clave
                  model={producto.model}
                  color={producto.color}
                  img_url={producto.img_url}
                  categoriaNombre={producto.categoriaNombre} // Asegúrate de pasar esta propiedad
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductosPage;
