import React, { useRef } from "react";

export default function ForgotPassword({ open, handleClose }) {
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar el email de recuperación
    handleClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md mx-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Restablecer contraseña
          </h2>
          <p className="text-gray-700 text-sm">
            Ingresa el correo electrónico de tu cuenta y te enviaremos un enlace
            para restablecer tu contraseña.
          </p>
          <input
            ref={emailRef}
            autoFocus
            required
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-primary text-white hover:bg-primary-dark transition"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}