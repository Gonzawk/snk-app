// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 bg-opacity-80 text-white py-4 text-center">
      <p className="text-sm">
        &copy; 2024 GonzaDev. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
