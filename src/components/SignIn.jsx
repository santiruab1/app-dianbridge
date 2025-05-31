import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [forgotOpen, setForgotOpen] = useState(false);

  const validate = () => {
    let valid = true;
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Por favor, ingresa un correo electrónico válido.");
      valid = false;
    } else {
      setEmailError("");
    }
    if (password.length < 6) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres.");
      valid = false;
    } else {    
      setPasswordError("");
    }
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Aquí iría tu lógica de autenticación
      alert("¡Inicio de sesión exitoso!");
    }
  };
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-gray-50 py-8 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="text-3xl font-bold text-primary">Iniciar Sesión</div>
          <div className="text-gray-500 text-sm">¡Bienvenido de vuelta! Por favor, ingresa tus datos.</div>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="ejemplo@correo.com"
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${emailError ? "border-red-500" : "border-gray-300"}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <div className="text-red-500 text-xs mt-1">{emailError}</div>}
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${passwordError ? "border-red-500" : "border-gray-300"}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {passwordError && <div className="text-red-500 text-xs mt-1">{passwordError}</div>}
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="accent-primary" />
              Recordarme
            </label>
            <button
              type="button"
              className="text-primary text-sm hover:underline bg-transparent border-none p-0 m-0"
              onClick={() => setForgotOpen(true)}
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded bg-primary text-white font-semibold hover:bg-primary-dark transition"
          >
            Iniciar Sesión
          </button>
          
          <div className="relative flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
        
        </form>
        <div className="text-center text-sm text-gray-600">
          ¿No tienes una cuenta?{" "}
          <Link to="/signup" className="text-primary hover:underline font-medium">
            Regístrate aquí
          </Link>
        </div>
        <ForgotPassword open={forgotOpen} handleClose={() => setForgotOpen(false)} />
      </div>
    </div>
  );
}