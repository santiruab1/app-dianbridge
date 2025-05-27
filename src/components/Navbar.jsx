import React, { useState } from 'react';
import logo from '../assets/dianbridge-logo.png'; // Ajusta el nombre si es diferente

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="DianBridge Logo" className="h-14" />
          </div>
          {/* Links desktop */}
          <div className="hidden md:flex gap-4">
            <a href="#" className="text-gray-700 hover:text-primary px-2 py-1 rounded transition">Features</a>
            <a href="#" className="text-gray-700 hover:text-primary px-2 py-1 rounded transition">Testimonials</a>
            <a href="#highlights" className="text-gray-700 hover:text-primary px-2 py-1 rounded transition">Por qué elegirnos</a>
            <a href="#" className="text-gray-700 hover:text-primary px-2 py-1 rounded transition">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-primary px-2 py-1 rounded transition">FAQ</a>
            <a href="#" className="text-gray-700 hover:text-primary px-2 py-1 rounded transition">Blog</a>
          </div>
          {/* Botones desktop */}
          <div className="hidden md:flex gap-2">
            <button className="px-4 py-1 rounded text-primary border border-primary hover:bg-primary-light transition">Sign in</button>
            <button className="px-4 py-1 rounded bg-primary text-white hover:bg-primary-dark transition">Sign up</button>
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
            <a href="#" className="py-2 px-2 rounded hover:bg-gray-100 text-gray-700">Features</a>
            <a href="#" className="py-2 px-2 rounded hover:bg-gray-100 text-gray-700">Testimonials</a>
            <a href="#" className="py-2 px-2 rounded hover:bg-gray-100 text-gray-700">Highlights</a>
            <a href="#" className="py-2 px-2 rounded hover:bg-gray-100 text-gray-700">Pricing</a>
            <a href="#" className="py-2 px-2 rounded hover:bg-gray-100 text-gray-700">FAQ</a>
            <a href="#" className="py-2 px-2 rounded hover:bg-gray-100 text-gray-700">Blog</a>
            <div className="mt-4 flex flex-col gap-2">
              <button className="w-full px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark transition">Sign up</button>
              <button className="w-full px-4 py-2 rounded border border-primary text-primary hover:bg-primary-light transition">Sign in</button>
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