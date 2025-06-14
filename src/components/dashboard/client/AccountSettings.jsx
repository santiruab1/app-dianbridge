import React, { useState } from 'react';
import { FiSave, FiLock, FiMail, FiBell } from 'react-icons/fi';
import Swal from 'sweetalert2';

const AccountSettings = () => {
  const [profile, setProfile] = useState({
    name: 'Juan Pérez',
    email: 'juan@ejemplo.com',
    phone: '+57 300 123 4567',
    company: 'Empresa Demo S.A.',
    notifications: {
      email: true,
      reportGenerated: true,
      updates: false,
      news: true
    }
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleProfileChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
    // Limpiar error cuando el usuario empieza a escribir
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleNotificationChange = (setting) => {
    setProfile(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [setting]: !prev.notifications[setting]
      }
    }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswordForm(prev => ({
      ...prev,
      [field]: value
    }));
    if (field === 'confirmPassword' || field === 'newPassword') {
      validatePasswords(value, field === 'newPassword' ? passwordForm.confirmPassword : passwordForm.newPassword);
    }
  };

  const validatePasswords = (newPassword, confirmPassword) => {
    if (newPassword !== confirmPassword) {
      setErrors(prev => ({ ...prev, password: 'Las contraseñas no coinciden' }));
    } else {
      setErrors(prev => ({ ...prev, password: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Cambios guardados correctamente.',
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      background: '#fff',
      color: '#85C8F2',
      customClass: {
        popup: 'shadow-lg rounded-xl'
      }
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Configuración de Cuenta</h2>
        <p className="mt-1 text-sm text-gray-500">
          Administra tu información personal y preferencias
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Información Personal */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Información Personal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleProfileChange('name', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => handleProfileChange('email', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => handleProfileChange('phone', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Empresa
              </label>
              <input
                type="text"
                value={profile.company}
                onChange={(e) => handleProfileChange('company', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Cambiar Contraseña */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Cambiar Contraseña
          </h3>
          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña actual
              </label>
              <input
                type="password"
                value={passwordForm.currentPassword}
                onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nueva contraseña
              </label>
              <input
                type="password"
                value={passwordForm.newPassword}
                onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirmar nueva contraseña
              </label>
              <input
                type="password"
                value={passwordForm.confirmPassword}
                onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
            </div>
          </div>
        </div>

        {/* Notificaciones */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Preferencias de Notificación
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailNotifications"
                checked={profile.notifications.email}
                onChange={() => handleNotificationChange('email')}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="emailNotifications" className="ml-2 text-sm text-gray-700">
                Recibir notificaciones por email
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="reportGenerated"
                checked={profile.notifications.reportGenerated}
                onChange={() => handleNotificationChange('reportGenerated')}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="reportGenerated" className="ml-2 text-sm text-gray-700">
                Notificar cuando se genere un reporte
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="updates"
                checked={profile.notifications.updates}
                onChange={() => handleNotificationChange('updates')}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="updates" className="ml-2 text-sm text-gray-700">
                Actualizaciones del sistema
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="news"
                checked={profile.notifications.news}
                onChange={() => handleNotificationChange('news')}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="news" className="ml-2 text-sm text-gray-700">
                Noticias y novedades
              </label>
            </div>
          </div>
        </div>

        {/* Botón de guardar */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark flex items-center"
          >
            <FiSave className="mr-2" />
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountSettings;
