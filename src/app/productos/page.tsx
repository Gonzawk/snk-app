// src/app/productos/page.tsx
import { FC } from 'react';
import ProductoCard from '../../components/ProductoCard/ProductoCard';

// Definir el tipo para un producto
interface Producto {
  id: string;
  model: string;
  color: string;
  img_url: string;
  category: string;
}

// Función para obtener productos en el servidor (SSR)
export const fetchProductos = async (): Promise<Producto[]> => {
  const response = await fetch('http://127.0.0.1:8000/productos', {
    cache: 'no-store', // Evitar que los datos se cacheen en producción
  });
  if (!response.ok) {
    throw new Error('Error al obtener productos');
  }
  return response.json();
};

// Componente de página
const ProductosPage: FC<{ productos: Producto[] }> = ({ productos }) => {
  return (
    <div className="min-h-screen p-8">
      <h2 className="text-3xl font-semibold mb-6">Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productos.map((producto) => (
          <ProductoCard
            key={producto.id}
            model={producto.model}
            color={producto.color}
            img_url={producto.img_url}
            category={producto.category}
          />
        ))}
      </div>
    </div>
  );
};

// Renderizado del lado del servidor
export async function getServerSideProps() {
  const productos = await fetchProductos();
  return {
    props: {
      productos,
    },
  };
}

export default ProductosPage;
