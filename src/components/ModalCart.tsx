"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext"; // Ajusta la ruta según tu estructura

interface ShippingInfo {
  fullName: string;
  dni: string;
  city: string;
  province: string;
  postalCode: string;
}

const ModalCart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  // Estados para método de pago y entrega
  const [paymentMethod, setPaymentMethod] = useState<string>(""); // "Efectivo" o "Transferencia"
  const [deliveryMethod, setDeliveryMethod] = useState<string>(""); // "Retiro" o "Envío a domicilio"
  const [selectedBranch, setSelectedBranch] = useState<string>(""); // Si es Retiro
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    fullName: "",
    dni: "",
    city: "",
    province: "",
    postalCode: "",
  });

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Genera el mensaje para WhatsApp con la información del carrito, método de pago y entrega
  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return "";
    let message = "Hola, me gustaría realizar el siguiente pedido:\n\n";
    cart.forEach((item, index) => {
      message += `Producto ${index + 1}:\n`;
      message += `Modelo: ${item.model}\n`;
      message += `Color: ${item.color}\n`;
      message += `Talle: ${item.talle}\n`;
      message += `Cantidad: ${item.quantity}\n\n`;
    });

    message += `Método de pago: ${paymentMethod || "No especificado"}\n\n`;

    message += `Entrega: `;
    if (deliveryMethod === "Retiro") {
      message += `Retiro en ${selectedBranch || "sucursal no seleccionada"}\n\n`;
    } else if (deliveryMethod === "Envío a domicilio") {
      message += `Envío a domicilio\n`;
      message += `Nombre: ${shippingInfo.fullName}\n`;
      message += `DNI: ${shippingInfo.dni}\n`;
      message += `Ciudad: ${shippingInfo.city}\n`;
      message += `Provincia: ${shippingInfo.province}\n`;
      message += `Código Postal: ${shippingInfo.postalCode}\n\n`;
    } else {
      message += "No especificado\n\n";
    }

    message += "Por favor, confirmar mi pedido.";
    return message;
  };

  const handlePedido = () => {
    const message = generateWhatsAppMessage();
    const phoneNumber = "5493515552099"; // Actualiza este número si es necesario
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Botón flotante para abrir el carrito */}
      <button
        onClick={handleOpen}
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
        aria-label="Abrir carrito"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9"
          />
        </svg>
      </button>

      {/* Modal del carrito */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="bg-black border border-white rounded-lg p-6 max-w-2xl w-full mx-4 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4 text-white text-center">
              Tu Carrito
            </h2>
            {cart.length === 0 ? (
              <p className="text-white text-center">No hay productos en el carrito.</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center border border-white p-4 rounded-lg"
                  >
                    <img
                      src={item.img_url}
                      alt={item.model}
                      className="w-16 h-16 object-contain mr-4"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-white">{item.model}</p>
                      <p className="text-white">Color: {item.color}</p>
                      <p className="text-white">Talle: {item.talle}</p>
                      <p className="text-white">Cantidad: {item.quantity}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 px-3 py-1 border border-white text-white rounded hover:bg-white hover:text-black transition"
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            )}

             {/* Sección de método de pago */}
             <div className="mt-6">
              <h3 className="text-xl font-bold text-white text-center">
                Método de Pago
              </h3>
              <div className="flex justify-center space-x-4 mt-2">
                <button
                  onClick={() => setPaymentMethod("Efectivo")}
                  className={`px-4 py-2 border border-white rounded transition ${
                    paymentMethod === "Efectivo"
                      ? "bg-white text-black"
                      : "bg-transparent text-white"
                  }`}
                >
                  Efectivo
                </button>
                <button
                  onClick={() => setPaymentMethod("Transferencia")}
                  className={`px-4 py-2 border border-white rounded transition ${
                    paymentMethod === "Transferencia"
                      ? "bg-white text-black"
                      : "bg-transparent text-white"
                  }`}
                >
                  Transferencia
                </button>
              </div>
            </div>

              {/* Sección de entrega */}
              <div className="mt-6">
              <h3 className="text-xl font-bold text-white text-center">Entrega</h3>
              <div className="flex justify-center space-x-4 mt-2">
                <button
                  onClick={() => {
                    setDeliveryMethod("Retiro");
                    setShippingInfo({
                      fullName: "",
                      dni: "",
                      city: "",
                      province: "",
                      postalCode: "",
                    });
                  }}
                  className={`px-4 py-2 border border-white rounded transition ${
                    deliveryMethod === "Retiro"
                      ? "bg-white text-black"
                      : "bg-transparent text-white"
                  }`}
                >
                  Retiro
                </button>
                <button
                  onClick={() => {
                    setDeliveryMethod("Envío a domicilio");
                    setSelectedBranch("");
                  }}
                  className={`px-4 py-2 border border-white rounded transition ${
                    deliveryMethod === "Envío a domicilio"
                      ? "bg-white text-black"
                      : "bg-transparent text-white"
                  }`}
                >
                  Envío a domicilio
                </button>
              </div>

              {deliveryMethod === "Retiro" && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white text-center">
                    Puntos de Retiro
                  </h4>
                  <div className="flex justify-center space-x-2 mt-2">
                    <button
                      onClick={() => setSelectedBranch("Recreo")}
                      className={`px-2 py-1 text-sm border border-white rounded transition ${
                        selectedBranch === "Recreo"
                          ? "bg-white text-black"
                          : "bg-transparent text-white"
                      }`}
                    >
                      Recreo
                    </button>
                    <button
                      onClick={() => setSelectedBranch("Cordoba")}
                      className={`px-2 py-1 text-sm border border-white rounded transition ${
                        selectedBranch === "Cordoba"
                          ? "bg-white text-black"
                          : "bg-transparent text-white"
                      }`}
                    >
                      Córdoba
                    </button>
                    <button
                      onClick={() => setSelectedBranch("Catamarca")}
                      className={`px-2 py-1 text-sm border border-white rounded transition ${
                        selectedBranch === "Catamarca"
                          ? "bg-white text-black"
                          : "bg-transparent text-white"
                      }`}
                    >
                      Catamarca
                    </button>
                    <button
                      onClick={() => setSelectedBranch("San Antonio")}
                      className={`px-2 py-1 text-sm border border-white rounded transition ${
                        selectedBranch === "San Antonio"
                          ? "bg-white text-black"
                          : "bg-transparent text-white"
                      }`}
                    >
                      San Antonio
                    </button>
                  </div>
                </div>
              )}

              {deliveryMethod === "Envío a domicilio" && (
                <div className="mt-4 space-y-2">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    value={shippingInfo.fullName}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, fullName: e.target.value })
                    }
                    className="w-full p-2 bg-black border border-white rounded text-white"
                  />
                  <input
                    type="text"
                    placeholder="DNI"
                    value={shippingInfo.dni}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, dni: e.target.value })
                    }
                    className="w-full p-2 bg-black border border-white rounded text-white"
                  />
                  <input
                    type="text"
                    placeholder="Ciudad"
                    value={shippingInfo.city}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, city: e.target.value })
                    }
                    className="w-full p-2 bg-black border border-white rounded text-white"
                  />
                  <input
                    type="text"
                    placeholder="Provincia"
                    value={shippingInfo.province}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, province: e.target.value })
                    }
                    className="w-full p-2 bg-black border border-white rounded text-white"
                  />
                  <input
                    type="text"
                    placeholder="Código Postal"
                    value={shippingInfo.postalCode}
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, postalCode: e.target.value })
                    }
                    className="w-full p-2 bg-black border border-white rounded text-white"
                  />
                </div>
              )}
            </div>

            {/* Botones finales */}
            <div className="mt-6 flex flex-col sm:flex-row sm:justify-end sm:space-x-4">
              <button
                onClick={handlePedido}
                className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition mb-2 sm:mb-0"
              >
                Realizar pedido
              </button>
              <button
                onClick={clearCart}
                className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition mb-2 sm:mb-0"
              >
                Vaciar Carrito
              </button>
              <button
                onClick={handleClose}
                className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCart;
