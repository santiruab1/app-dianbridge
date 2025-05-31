import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Copyright() {
  return (
    <span className="text-xs text-gray-500">
      © {new Date().getFullYear()} DianBridge. Todos los derechos reservados.
    </span>
  );
}

export default function Footer({ onSectionClick }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleSectionClick = (sectionId) => (e) => {
    e.preventDefault();
    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else if (onSectionClick) {
      onSectionClick(sectionId);
    }
  };

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-10 px-4 flex flex-col items-center gap-8">
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between gap-8">
        {/* Newsletter */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4">
          {/* Logo o nombre */}
          <Link to="/" className="text-xl font-bold text-primary">DianBridge</Link>
          <div className="font-semibold text-sm mt-2">Únete al boletín</div>
          <div className="text-xs text-gray-500 mb-2">¡Suscríbete para recibir actualizaciones semanales!</div>
          <form className="flex gap-2 max-w-xs">
            <label htmlFor="email-newsletter" className="sr-only">Correo electrónico</label>
            <input
              id="email-newsletter"
              type="email"
              autoComplete="off"
              aria-label="Ingresa tu correo electrónico"
              placeholder="Tu correo electrónico"
              className="flex-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 rounded bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition"
            >
              Suscribirse
            </button>
          </form>
        </div>
        {/* Enlaces */}
        <div className="hidden sm:flex flex-1 justify-between gap-8">
          <div className="flex flex-col gap-1 min-w-[100px]">
            <div className="font-semibold text-sm mb-1">Producto</div>
            <a href="#highlights" onClick={handleSectionClick('highlights')} className="text-gray-500 text-sm hover:underline">¿Por qué elegirnos?</a>
            <a href="#features" onClick={handleSectionClick('features')} className="text-gray-500 text-sm hover:underline">Membresías</a>
            <a href="#pricing" onClick={handleSectionClick('pricing')} className="text-gray-500 text-sm hover:underline">Precios</a>
            <a href="#faq" onClick={handleSectionClick('faq')} className="text-gray-500 text-sm hover:underline">Preguntas frecuentes</a>
          </div>
          <div className="flex flex-col gap-1 min-w-[100px]">
            <div className="font-semibold text-sm mb-1">Cuenta</div>
            <Link to="/signin" className="text-gray-500 text-sm hover:underline">Iniciar sesión</Link>
            <Link to="/signup" className="text-gray-500 text-sm hover:underline">Registrarse</Link>
            <button onClick={() => document.getElementById('email-newsletter')?.scrollIntoView({ behavior: 'smooth' })} 
                    className="text-left text-gray-500 text-sm hover:underline">
              Boletín
            </button>
          </div>
          <div className="flex flex-col gap-1 min-w-[100px]">
            <div className="font-semibold text-sm mb-1">Legal</div>
            <Link to="/terms" className="text-gray-500 text-sm hover:underline">Términos y condiciones</Link>
            <Link to="/privacy" className="text-gray-500 text-sm hover:underline">Política de privacidad</Link>
            <Link to="/contact" className="text-gray-500 text-sm hover:underline">Contacto</Link>
          </div>
        </div>
      </div>
      {/* Línea y copyright */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-6 gap-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Link to="/privacy" className="hover:underline">Política de privacidad</Link>
          <span className="mx-1 opacity-50">•</span>
          <Link to="/terms" className="hover:underline">Términos y condiciones</Link>
          <Copyright />
        </div>
      </div>
    </footer>
  );
}
