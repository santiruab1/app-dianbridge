import React from 'react';
import { FiUsers, FiFileText, FiActivity, FiClock } from 'react-icons/fi';

const StatCard = ({ icon: Icon, title, value, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex items-center">
      <div className="p-3 rounded-full bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        {description && (
          <p className="text-sm text-gray-500">{description}</p>
        )}
      </div>
    </div>
  </div>
);

const AccessLog = ({ logs }) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h3 className="text-lg font-medium text-gray-900 mb-4">Logs de Acceso</h3>
    <div className="space-y-4">
      {logs.map((log, index) => (
        <div key={index} className="flex items-center text-sm">
          <div className="w-2 h-2 rounded-full bg-primary mr-3" />
          <span className="text-gray-500">{log.time}</span>
          <span className="mx-2">·</span>
          <span className="font-medium text-gray-900">{log.user}</span>
          <span className="mx-2">·</span>
          <span className="text-gray-600">{log.action}</span>
        </div>
      ))}
    </div>
  </div>
);

const AdminDashboard = () => {
  // Datos de ejemplo - estos deberían venir de tu API
  const stats = [
    {
      icon: FiUsers,
      title: 'Usuarios Activos',
      value: '2,453',
      description: '+12% desde el mes pasado'
    },
    {
      icon: FiFileText,
      title: 'Reportes Generados',
      value: '12,345',
      description: '85 en las últimas 24 horas'
    },
    {
      icon: FiActivity,
      title: 'Tasa de Éxito',
      value: '98.5%',
      description: 'En los últimos 7 días'
    },
    {
      icon: FiClock,
      title: 'Tiempo Promedio',
      value: '2.4s',
      description: 'De generación de reportes'
    }
  ];

  const recentLogs = [
    {
      time: 'Hace 5 minutos',
      user: 'Juan Pérez',
      action: 'Generó un reporte mensual'
    },
    {
      time: 'Hace 15 minutos',
      user: 'María García',
      action: 'Actualizó su perfil'
    },
    {
      time: 'Hace 30 minutos',
      user: 'Carlos López',
      action: 'Inició sesión'
    },
    {
      time: 'Hace 1 hora',
      user: 'Ana Martínez',
      action: 'Descargó un reporte'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Panel de Control</h2>
        <p className="mt-1 text-sm text-gray-500">
          Monitoreo en tiempo real del sistema
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <AccessLog logs={recentLogs} />
    </div>
  );
};

export default AdminDashboard;
