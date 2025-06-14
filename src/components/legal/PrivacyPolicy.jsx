import React from 'react';
import { 
  FaUserShield, 
  FaClipboardList, 
  FaShieldAlt, 
  FaShareAlt,
  FaCookie,
  FaUserLock,
  FaDatabase,
  FaBell,
  FaEnvelope
} from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
      
      <div className="space-y-8 text-gray-600">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaClipboardList className="text-2xl text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">1. Información que Recopilamos</h2>
          </div>
          <p className="mb-4">
            En DianBridge, recopilamos la siguiente información para proporcionar y mejorar nuestros servicios:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Información de registro (nombre, correo electrónico, contraseña)</li>
            <li>Información de la empresa (razón social, NIT, dirección)</li>
            <li>Datos de facturación y transacciones</li>
            <li>Información de uso del servicio</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaUserShield className="text-2xl text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">2. Uso de la Información</h2>
          </div>
          <p className="mb-4">
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Proporcionar y mantener nuestros servicios de gestión tributaria</li>
            <li>Personalizar su experiencia y las funcionalidades ofrecidas</li>
            <li>Enviar notificaciones importantes sobre su cuenta y obligaciones tributarias</li>
            <li>Mejorar nuestros servicios y desarrollar nuevas características</li>
            <li>Cumplir con requisitos legales y regulatorios</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaShieldAlt className="text-2xl text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">3. Protección de Datos</h2>
          </div>
          <p className="mb-4">
            Implementamos medidas de seguridad robustas para proteger su información:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Encriptación de datos sensibles</li>
            <li>Acceso restringido a la información</li>
            <li>Monitoreo continuo de seguridad</li>
            <li>Copias de seguridad regulares</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaShareAlt className="text-2xl text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">4. Compartir Información</h2>
          </div>
          <p className="mb-4">
            No vendemos ni compartimos su información personal con terceros, excepto:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Cuando sea necesario para proporcionar nuestros servicios</li>
            <li>Con su consentimiento explícito</li>
            <li>Cuando sea requerido por ley o autoridades competentes</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaCookie className="text-2xl text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">5. Cookies y Tecnologías Similares</h2>
          </div>
          <p className="mb-4">
            Utilizamos cookies y tecnologías similares para mejorar su experiencia, recordar sus preferencias
            y analizar el uso de nuestros servicios. Puede configurar su navegador para rechazar cookies,
            pero esto podría afectar algunas funcionalidades de DianBridge.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaUserLock className="text-2xl text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">6. Sus Derechos</h2>
          </div>
          <p className="mb-4">
            Usted tiene derecho a:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Acceder a su información personal</li>
            <li>Corregir datos inexactos</li>
            <li>Solicitar la eliminación de sus datos</li>
            <li>Oponerse al procesamiento de su información</li>
            <li>Exportar sus datos en un formato estructurado</li>
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaDatabase className="text-2xl text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">7. Retención de Datos</h2>
          </div>
          <p className="mb-4">
            Mantenemos su información mientras su cuenta esté activa o sea necesaria para proporcionar
            nuestros servicios. Si solicita la eliminación de su cuenta, eliminaremos o anonimizaremos
            su información, excepto cuando debamos conservarla por obligaciones legales.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaBell className="text-2xl text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">8. Cambios en la Política</h2>
          </div>
          <p className="mb-4">
            Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento.
            Los cambios serán notificados a través de nuestro sitio web o por correo electrónico.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-2xl text-primary" />
            <h2 className="text-xl font-semibold text-gray-800">9. Contacto</h2>
          </div>
          <p>
            Si tiene preguntas sobre nuestra política de privacidad o el manejo de sus datos,
            contáctenos en privacidad@dianbridge.com o a través de nuestro formulario de contacto.
          </p>
        </section>
      </div>
    </div>
  );
}
