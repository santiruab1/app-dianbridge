import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from 'sweetalert2';

export default function SignUp() {
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [allowEmails, setAllowEmails] = useState(false);
  const [termsError, setTermsError] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state?.email]);

  const validate = () => {
    let valid = true;
    if (!username.trim()) {
      setNameError("El nombre de usuario es requerido.");
      valid = false;
    } else {
      setNameError("");
    }
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
    if (!allowEmails) {
      setTermsError("Debes aceptar los términos y condiciones para continuar.");
      valid = false;
    } else {
      setTermsError("");
    }
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        // Convertir username y email a minúsculas antes de enviar
        const payload = {
          username: username.toLowerCase(),
          email: email.toLowerCase(),
          password
        };
        const response = await fetch('http://localhost:8080/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!response.ok) {
          setEmailError('Error al registrarse');
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo completar el registro.',
            confirmButtonColor: '#2563eb', // primary
            background: '#fff',
            color: '#1e293b',
          });
          return;
        }
        Swal.fire({
          icon: 'success',
          title: '¡Registro exitoso!',
          text: 'Tu cuenta ha sido creada correctamente.',
          confirmButtonColor: '#2563eb', // primary
          background: '#fff',
          color: '#1e293b',
        });
      } catch (error) {
        setEmailError('Error de red o del servidor');
        Swal.fire({
          icon: 'error',
          title: 'Error de red',
          text: 'No se pudo conectar con el servidor.',
          confirmButtonColor: '#2563eb',
          background: '#fff',
          color: '#1e293b',
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="text-3xl font-bold text-primary">Registrarse</div>
          <div className="text-gray-500 text-sm">Crea tu cuenta para comenzar.</div>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
              Nombre de usuario
            </label>
            <input
              id="username"
              type="text"
              autoComplete="username"
              placeholder="JohnDoe123"
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${nameError ? "border-red-500" : "border-gray-300"}`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {nameError && <div className="text-red-500 text-xs mt-1">{nameError}</div>}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Correo electrónico
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
              autoComplete="new-password"
              placeholder="••••••••"
              className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${passwordError ? "border-red-500" : "border-gray-300"}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {passwordError && <div className="text-red-500 text-xs mt-1">{passwordError}</div>}
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={allowEmails}
                onChange={() => {
                  setAllowEmails(!allowEmails);
                  if (!allowEmails) setTermsError("");
                }}
                className={`accent-primary ${!allowEmails && termsError ? "ring-2 ring-red-500" : ""}`}
              />
              Acepto términos y condiciones
            </label>
            {termsError && <div className="text-red-500 text-xs mt-1">{termsError}</div>}
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded bg-primary text-white font-semibold hover:bg-primary-dark transition"
          >
            Registrarse
          </button>
          <div className="relative flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
        </form>
        <div className="text-center text-sm text-gray-600">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/signin" className="text-primary hover:underline font-medium">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}