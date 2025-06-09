import React, { useState } from 'react';
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573022309731', '_blank');
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));

    // Limpiar errores mientras escriben
    switch (id) {
      case 'name':
        setNameError('');
        break;
      case 'email':
        setEmailError('');
        break;
      case 'message':
        setMessageError('');
        break;
      default:
        break;
    }

    // Guardar en localStorage mientras escriben
    localStorage.setItem('contactForm', JSON.stringify({
      ...formData,
      [id]: value
    }));
  };

  const validate = () => {
    let valid = true;
    
    // Validar nombre
    if (!formData.name.trim()) {
      setNameError("El nombre es requerido.");
      valid = false;
    } else if (formData.name.length < 3) {
      setNameError("El nombre debe tener al menos 3 caracteres.");
      valid = false;
    } else {
      setNameError("");
    }

    // Validar email
    if (!formData.email) {
      setEmailError("El correo electrónico es requerido.");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setEmailError("Por favor, ingresa un correo electrónico válido.");
      valid = false;
    } else {
      setEmailError("");
    }

    // Validar mensaje
    if (!formData.message.trim()) {
      setMessageError("El mensaje es requerido.");
      valid = false;
    } else if (formData.message.length < 10) {
      setMessageError("El mensaje debe tener al menos 10 caracteres.");
      valid = false;
    } else {
      setMessageError("");
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulamos un envío a un servicio
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Aquí iría la llamada real a tu API
      // const response = await fetch('tu-api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // Guardamos en localStorage como respaldo
      localStorage.setItem('lastContactSubmission', JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString()
      }));

      // Limpiamos el formulario y errores
      setFormData({ name: '', email: '', message: '' });
      setNameError('');
      setEmailError('');
      setMessageError('');
      localStorage.removeItem('contactForm');
      
      setSubmitStatus('success');
        // Abrir Gmail con el mensaje precompuesto
      const subject = encodeURIComponent(`Nuevo mensaje de contacto de ${formData.name}`);
      const body = encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\nMensaje: ${formData.message}`);
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=soporte@dianbridge.com&su=${subject}&body=${body}`;
      window.open(gmailLink, '_blank');

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
            </div>            <div className="text-center">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=soporte@dianbridge.com" 
                target="_blank"
                rel="noopener noreferrer"
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
        <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${nameError ? "border-red-500" : "border-gray-300"}`}
              required
            />
            {nameError && <div className="text-red-500 text-xs mt-1">{nameError}</div>}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="ejemplo@correo.com"
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${emailError ? "border-red-500" : "border-gray-300"}`}
              required
            />
            {emailError && <div className="text-red-500 text-xs mt-1">{emailError}</div>}
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
              Mensaje
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              placeholder="¿En qué podemos ayudarte?"
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${messageError ? "border-red-500" : "border-gray-300"}`}
              required
            ></textarea>
            {messageError && <div className="text-red-500 text-xs mt-1">{messageError}</div>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 rounded bg-primary text-white font-semibold transition ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark'
            }`}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          {/* Mensajes de estado */}
          {submitStatus === 'success' && (
            <div className="text-green-600 text-center text-sm">
              ¡Mensaje enviado con éxito! Te contactaremos pronto.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="text-red-600 text-center text-sm">
              Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
