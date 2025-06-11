import React, { useState } from 'react';
import { FiSave, FiRefreshCw } from 'react-icons/fi';

const SystemSettings = () => {
  const [settings, setSettings] = useState({
    reportGeneration: {
      maxConcurrent: 5,
      timeout: 30,
      retryAttempts: 3
    },
    email: {
      notificationsEnabled: true,
      dailyDigest: true,
      errorAlerts: true
    },
    security: {
      sessionTimeout: 30,
      maxLoginAttempts: 5,
      requireTwoFactor: false
    },
    maintenance: {
      enableMaintenanceMode: false,
      maintenanceMessage: 'Sistema en mantenimiento. Por favor, intente más tarde.'
    }
  });

  const handleChange = (category, setting, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar la configuración
    alert('Configuración guardada');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Configuración del Sistema</h2>
        <p className="mt-1 text-sm text-gray-500">
          Administra la configuración general del sistema
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Generación de Reportes */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Generación de Reportes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Máx. Reportes Concurrentes
              </label>
              <input
                type="number"
                value={settings.reportGeneration.maxConcurrent}
                onChange={(e) => handleChange('reportGeneration', 'maxConcurrent', parseInt(e.target.value))}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tiempo de Espera (segundos)
              </label>
              <input
                type="number"
                value={settings.reportGeneration.timeout}
                onChange={(e) => handleChange('reportGeneration', 'timeout', parseInt(e.target.value))}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Intentos de Reintento
              </label>
              <input
                type="number"
                value={settings.reportGeneration.retryAttempts}
                onChange={(e) => handleChange('reportGeneration', 'retryAttempts', parseInt(e.target.value))}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Notificaciones por Email */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Notificaciones por Email
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="notificationsEnabled"
                checked={settings.email.notificationsEnabled}
                onChange={(e) => handleChange('email', 'notificationsEnabled', e.target.checked)}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="notificationsEnabled" className="ml-2 text-sm text-gray-700">
                Habilitar notificaciones por email
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="dailyDigest"
                checked={settings.email.dailyDigest}
                onChange={(e) => handleChange('email', 'dailyDigest', e.target.checked)}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="dailyDigest" className="ml-2 text-sm text-gray-700">
                Enviar resumen diario
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="errorAlerts"
                checked={settings.email.errorAlerts}
                onChange={(e) => handleChange('email', 'errorAlerts', e.target.checked)}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="errorAlerts" className="ml-2 text-sm text-gray-700">
                Alertas de error
              </label>
            </div>
          </div>
        </div>

        {/* Seguridad */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Seguridad
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tiempo de Sesión (minutos)
              </label>
              <input
                type="number"
                value={settings.security.sessionTimeout}
                onChange={(e) => handleChange('security', 'sessionTimeout', parseInt(e.target.value))}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Máx. Intentos de Login
              </label>
              <input
                type="number"
                value={settings.security.maxLoginAttempts}
                onChange={(e) => handleChange('security', 'maxLoginAttempts', parseInt(e.target.value))}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="requireTwoFactor"
                checked={settings.security.requireTwoFactor}
                onChange={(e) => handleChange('security', 'requireTwoFactor', e.target.checked)}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="requireTwoFactor" className="ml-2 text-sm text-gray-700">
                Requerir autenticación de dos factores
              </label>
            </div>
          </div>
        </div>

        {/* Mantenimiento */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Modo Mantenimiento
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="enableMaintenanceMode"
                checked={settings.maintenance.enableMaintenanceMode}
                onChange={(e) => handleChange('maintenance', 'enableMaintenanceMode', e.target.checked)}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="enableMaintenanceMode" className="ml-2 text-sm text-gray-700">
                Activar modo mantenimiento
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje de Mantenimiento
              </label>
              <textarea
                value={settings.maintenance.maintenanceMessage}
                onChange={(e) => handleChange('maintenance', 'maintenanceMessage', e.target.value)}
                rows="3"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center"
          >
            <FiRefreshCw className="mr-2" />
            Recargar
          </button>
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

export default SystemSettings;
