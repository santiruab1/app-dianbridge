import React from 'react';
import {
  FaHandshake,
  FaInfoCircle,
  FaUserCog,
  FaShieldAlt,
  FaCreditCard,
  FaUndoAlt,
  FaEdit,
  FaEnvelope
} from 'react-icons/fa';

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Términos y Condiciones</h1>
      
      <div className="space-y-8 text-gray-600">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaHandshake className="text-2xl text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">1. Aceptación de los Términos</h2>
          </div>
          <p className="mb-4">
            Al acceder y utilizar DianBridge, usted acepta estos términos y condiciones en su totalidad. 
            Si no está de acuerdo con estos términos, por favor no utilice nuestros servicios.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaInfoCircle className="text-2xl text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">2. Descripción del Servicio</h2>
          </div>
          <p className="mb-4">
            DianBridge es una plataforma que facilita la gestión y el cumplimiento de obligaciones tributarias. 
            Nuestros servicios incluyen, pero no se limitan a:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Automatización de procesos tributarios</li>
            <li>Generación de reportes e informes</li>
            <li>Seguimiento de obligaciones fiscales</li>
            <li>Alertas y notificaciones personalizadas</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaUserCog className="text-2xl text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">3. Uso del Servicio</h2>
          </div>
          <p className="mb-4">
            El usuario se compromete a:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Proporcionar información precisa y actualizada</li>
            <li>Mantener la confidencialidad de sus credenciales de acceso</li>
            <li>Utilizar el servicio de manera ética y legal</li>
            <li>No realizar actividades que puedan dañar o interrumpir el servicio</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaShieldAlt className="text-2xl text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">4. Privacidad y Protección de Datos</h2>
          </div>
          <p className="mb-4">
            Nos comprometemos a proteger su información personal de acuerdo con nuestra política de privacidad. 
            Los datos proporcionados serán utilizados únicamente para los fines específicos del servicio.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaCreditCard className="text-2xl text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">5. Planes y Pagos</h2>
          </div>
          <p className="mb-4">
            Los servicios de DianBridge están disponibles a través de diferentes planes de suscripción. 
            Los precios y características de cada plan se detallan en nuestra sección de precios.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaUndoAlt className="text-2xl text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">6. Cancelación y Reembolsos</h2>
          </div>
          <p className="mb-4">
            Los usuarios pueden cancelar su suscripción en cualquier momento. Los reembolsos se manejarán 
            de acuerdo con nuestra política de reembolsos y las leyes aplicables.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaEdit className="text-2xl text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">7. Modificaciones</h2>
          </div>
          <p className="mb-4">
            DianBridge se reserva el derecho de modificar estos términos y condiciones en cualquier momento. 
            Los cambios serán notificados a los usuarios y entrarán en vigor inmediatamente después de su publicación.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-2xl text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">8. Contacto</h2>
          </div>
          <p>
            Si tiene alguna pregunta sobre estos términos y condiciones, puede contactarnos a través de 
            nuestro formulario de contacto o enviando un correo electrónico a soporte@dianbridge.com
          </p>
        </section>
      </div>
    </div>
  );
}
