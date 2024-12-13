// src/lib/api.ts

export const getProductos = async () => {
  const response = await fetch('https://web-production-4ea6.up.railway.app/productos'); // Cambié a la URL pública de Railway
  if (!response.ok) {
    throw new Error('Error al obtener productos');
  }
  return response.json();
};

export const getCategorias = async () => {
  const response = await fetch('https://web-production-4ea6.up.railway.app/categorias'); // Cambié a la URL pública de Railway
  if (!response.ok) {
    throw new Error('Error al obtener categorías');
  }
  return response.json();
};
