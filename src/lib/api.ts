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

// Función para obtener los productos desde el JSON para todos los productos
export const getProductos = async (): Promise<Record<string, Producto[]>> => {
  const response = await fetch('public\Data\todos_productos.json'); // Ruta pública al JSON de todos los productos  
  if (!response.ok) {
    throw new Error('Error al obtener productos desde el JSON');
  }
  return response.json(); // Retorna un objeto con las categorías como claves y los productos como valores
};

/* // Función para obtener los productos de G5
export const getProductosG5 = async (): Promise<Record<string, Producto[]>> => {
  const response = await fetch('/Data/g5_productos.json'); // Ruta pública al JSON de G5
  if (!response.ok) {
    throw new Error('Error al obtener productos de G5');
  }
  return response.json(); // Retorna los productos específicos de G5
}; */

// Función para obtener los productos de Top Quality
export const getProductosTopQuality = async (): Promise<Record<string, Producto[]>> => {
  const response = await fetch('/Data/top_quality_productos.json'); // Ruta pública al JSON de Top Quality
  if (!response.ok) {
    throw new Error('Error al obtener productos de Top Quality');
  }
  return response.json(); // Retorna los productos específicos de Top Quality
};

// Función para obtener los productos de OG
export const getProductosOG = async (): Promise<Record<string, Producto[]>> => {
  const response = await fetch('/Data/og_productos.json'); // Ruta pública al JSON de OG
  if (!response.ok) {
    throw new Error('Error al obtener productos de OG');
  }
  return response.json(); // Retorna los productos específicos de OG
};

// Función para obtener las categorías generales
export const getCategorias = async (): Promise<Categoria[]> => {
  const productos = await getProductos(); // Reutiliza la lógica de productos
  if (!productos || Object.keys(productos).length === 0) return []; // Asegura que haya productos

  // Extrae las categorías únicas de las claves del objeto
  const categoriasUnicas = Object.keys(productos).map((nombre) => ({ id: nombre, nombre }));

  return categoriasUnicas;
};
