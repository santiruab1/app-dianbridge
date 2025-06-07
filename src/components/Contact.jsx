import React from 'react';
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin
} from 'react-icons/fa';

export default function Contact() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573022309731', '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contáctanos</h1>
      
      <div className="text-center mb-12">
        <p className="text-gray-600 max-w-2xl mx-auto">
          Estamos aquí para ayudarte. No dudes en contactarnos a través de cualquiera 
          de nuestros canales de comunicación.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
        {/* Tarjeta de Llamadas */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 h-[280px] flex flex-col">
          <div className="flex flex-col h-full">
            <div className="text-center mb-auto">
              <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                <FaPhone className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 h-[56px] flex items-center justify-center">Llámanos</h3>
              <p className="text-gray-600 mb-4 h-[48px] flex items-center justify-center">Atención personalizada</p>
            </div>
            <div className="text-center">
              <a 
                href="tel:+573046678624" 
                className="text-primary hover:underline font-medium"
              >
                +57 304 667 8624
              </a>
            </div>
          </div>
        </div>

        {/* Tarjeta de WhatsApp */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 h-[280px] flex flex-col">
          <div className="flex flex-col h-full">
            <div className="text-center mb-auto">
              <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                <FaWhatsapp className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 h-[56px] flex items-center justify-center">WhatsApp</h3>
              <p className="text-gray-600 mb-4 h-[48px] flex items-center justify-center">Respuesta inmediata</p>
            </div>
            <div className="text-center">
              <button 
                onClick={handleWhatsAppClick}
                className="text-primary hover:underline font-medium"
              >
                +57 302 230 9731
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta de Email */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 h-[280px] flex flex-col">
          <div className="flex flex-col h-full">
            <div className="text-center mb-auto">
              <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                <FaEnvelope className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 h-[56px] flex items-center justify-center">Correo Electrónico</h3>
              <p className="text-gray-600 mb-4 h-[48px] flex items-center justify-center">Soporte técnico</p>
            </div>
            <div className="text-center">
              <a 
                href="mailto:soporte@dianbridge.com" 
                className="text-primary hover:underline font-medium"
              >
                soporte@dianbridge.com
              </a>
            </div>
          </div>
        </div>

        {/* Tarjeta de Ubicación */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 h-[280px] flex flex-col">
          <div className="flex flex-col h-full">
            <div className="text-center mb-auto">
              <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                <FaMapMarkerAlt className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 h-[56px] flex items-center justify-center">Ubicación</h3>
              <p className="text-gray-600 mb-4 h-[48px] flex items-center justify-center">Oficina principal</p>
            </div>
            <div className="text-center">
              <a 
                href="https://www.google.com/maps?q=Medellin+Colombia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Medellín, Colombia
              </a>
            </div>
          </div>
        </div>

        {/* Tarjeta de LinkedIn */}
        <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 h-[280px] flex flex-col">
          <div className="flex flex-col h-full">
            <div className="text-center mb-auto">
              <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                <FaLinkedin className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 h-[56px] flex items-center justify-center">LinkedIn</h3>
              <p className="text-gray-600 mb-4 h-[48px] flex items-center justify-center">Síguenos</p>
            </div>
            <div className="text-center">
              <a 
                href="https://www.linkedin.com/company/dianbridge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                DianBridge
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Formulario de Contacto */}
      <div className="mt-16 w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="text-3xl font-bold text-gray-900">Envíanos un mensaje</div>
          <div className="text-gray-500 text-sm">Completa el formulario y te responderemos pronto.</div>
        </div>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="ejemplo@correo.com"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
              Mensaje
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="¿En qué podemos ayudarte?"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded bg-primary text-white font-semibold hover:bg-primary-dark transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
