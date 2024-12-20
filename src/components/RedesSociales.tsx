// components/RedesSociales.tsx
import React from 'react';

const RedesSociales: React.FC = () => {
  // Declaramos el array de enlaces sociales
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61564448078919',
      iconSrc: 'https://i.ibb.co/L0JdjXz/facebook.png',
      altText: 'Facebook Icon',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/message/TUKNIYAMM5HCA1',
      iconSrc: 'https://i.ibb.co/yWCfDVq/whatsapp.png',
      altText: 'WhatsApp Icon',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sneakeers_shop_/',
      iconSrc: 'https://i.ibb.co/GFXbRtn/instagram.png',
      altText: 'Instagram Icon',
    },
  ];

  return (
    <div className="flex justify-center space-x-6 mt-10">
      {/* Recorremos el array y renderizamos cada enlace */}
      {socialLinks.map((link) => (
        <div key={link.name} className="home-hero__social">
          <a
            target="_blank"
            href={link.url}
            className="home-hero__social-icon-link"
            rel="noopener noreferrer"
          >
            <img
              src={link.iconSrc}
              alt={link.altText}
              className="home-hero__social-icon w-10 h-10 transition-transform transform hover:scale-110"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default RedesSociales;
