// src/lib/api.ts

interface Producto {
  model: string;
  color: string;
  img_url: string;
}

interface Categoria {
  id: string;
  nombre: string;
}

// Función para obtener los productos desde el JSON
export const getProductos = async (): Promise<Record<string, Producto[]>> => {
  const response = await fetch('/Data/todos_productos.json'); // Ruta pública al JSON
  if (!response.ok) {
    throw new Error('Error al obtener productos desde el JSON');
  }
  return response.json(); // Retorna un objeto con las categorías como claves y los productos como valores
};

// Función para obtener las categorías
export const getCategorias = async (): Promise<Categoria[]> => {
  const productos = await getProductos(); // Reutiliza la lógica de productos
  if (!productos || Object.keys(productos).length === 0) return []; // Asegura que haya productos

  // Extrae las categorías únicas de las claves del objeto
  const categoriasUnicas = Object.keys(productos).map((nombre) => ({ id: nombre, nombre }));

  return categoriasUnicas;
};
