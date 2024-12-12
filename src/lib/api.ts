// src/lib/api.ts

export const getProductos = async () => {
    const response = await fetch('http://127.0.0.1:8000/productos');
    if (!response.ok) {
      throw new Error('Error al obtener productos');
    }
    return response.json();
  };
  
  export const getCategorias = async () => {
    const response = await fetch('http://127.0.0.1:8000/categorias');
    if (!response.ok) {
      throw new Error('Error al obtener categorías');
    }
    return response.json();
  };
  