import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/dianbridge-logo.png';

function Navbar({ onSectionClick }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else if (onSectionClick) {
      onSectionClick(sectionId);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (!isHome) {
      navigate('/', { replace: true });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" onClick={handleLogoClick}>
              <img src={logo} alt="DianBridge Logo" className="h-14" />
            </a>
          </div>
          {/* Links desktop */}
          <div className="hidden md:flex gap-4">
            <a href="#highlights" onClick={(e) => handleClick(e, 'highlights')} className="text-gray-700 hover:text-primary px-2 py-1 rounded transition">Por qué elegirnos</a>
            <a href="#features" onClick={(e) => handleClick(e, 'features')} className="text-gray-700 hover:text-primary px-2 py-1 rounded transition">Membresías</a>
            <a href="#pricing" onClick={(e) => handleClick(e, 'pricing')} className="text-gray-700 hover:text-primary px-2 py-1 rounded transition">Precios</a>
            <a href="#faq" onClick={(e) => handleClick(e, 'faq')} className="text-gray-700 hover:text-primary px-2 py-1 rounded transition">Preguntas frecuentes</a>
          </div>
          {/* Botones desktop */}
          <div className="hidden md:flex gap-2">
            <Link to="/signin" className="px-4 py-1 rounded text-primary border border-primary hover:bg-primary-light transition">Iniciar Sesión</Link>
            <Link to="/signup" className="px-4 py-1 rounded bg-primary text-white hover:bg-primary-dark transition">Registrarse</Link>
          </div>
          {/* Botón menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(true)}
              className="p-2 rounded hover:bg-gray-100 transition"
              aria-label="Open menu"
            >
              {/* Icono menú */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Menú móvil */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
          <div className="w-64 bg-white h-full shadow-lg p-4 flex flex-col">
            <button
              onClick={() => setOpen(false)}
              className="self-end mb-4 p-2 rounded hover:bg-gray-100"
              aria-label="Close menu"
            >
              {/* Icono cerrar */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a href="#highlights" onClick={(e) => { handleClick(e, 'highlights'); setOpen(false); }} className="py-2 px-2 rounded hover:bg-gray-100 text-gray-700">Por qué elegirnos</a>
            <a href="#features" onClick={(e) => { handleClick(e, 'features'); setOpen(false); }} className="py-2 px-2 rounded hover:bg-gray-100 text-gray-700">Membresías</a>
            <a href="#pricing" onClick={(e) => { handleClick(e, 'pricing'); setOpen(false); }} className="py-2 px-2 rounded hover:bg-gray-100 text-gray-700">Precios</a>
            <a href="#faq" onClick={(e) => { handleClick(e, 'faq'); setOpen(false); }} className="py-2 px-2 rounded hover:bg-gray-100 text-gray-700">Preguntas frecuentes</a>
            <div className="mt-4 flex flex-col gap-2">
              <Link to="/signup" className="w-full px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark transition">Sign up</Link>
              <Link to="/signin" className="w-full px-4 py-2 rounded border border-primary text-primary hover:bg-primary-light transition">Sign in</Link>
            </div>
          </div>
          {/* Clic fuera del menú para cerrar */}
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;