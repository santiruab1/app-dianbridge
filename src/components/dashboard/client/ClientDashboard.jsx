import React from 'react';
import { FiFileText, FiDownload, FiClock, FiCheckCircle } from 'react-icons/fi';

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

const RecentReports = ({ reports }) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h3 className="text-lg font-medium text-gray-900 mb-4">Reportes Recientes</h3>
    <div className="space-y-4">
      {reports.map((report, index) => (
        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <FiFileText className="h-5 w-5 text-primary" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">{report.name}</p>
              <p className="text-xs text-gray-500">{report.date}</p>
            </div>
          </div>
          <button
            onClick={() => {/* Lógica de descarga */}}
            className="flex items-center px-3 py-1 text-sm text-primary hover:bg-primary/10 rounded-lg transition-colors"
          >
            <FiDownload className="h-4 w-4 mr-1" />
            Descargar
          </button>
        </div>
      ))}
    </div>
  </div>
);

const ClientDashboard = () => {
  // Datos de ejemplo - estos deberían venir de tu API
  const stats = [
    {
      icon: FiFileText,
      title: 'Reportes Totales',
      value: '143',
      description: '12 este mes'
    },
    {
      icon: FiDownload,
      title: 'Descargas',
      value: '89',
      description: 'En los últimos 30 días'
    },
    {
      icon: FiClock,
      title: 'Último Acceso',
      value: 'Hoy',
      description: '10:30 AM'
    },
    {
      icon: FiCheckCircle,
      title: 'Estado de Cuenta',
      value: 'Activa',
      description: 'Plan Premium'
    }
  ];

  const recentReports = [
    {
      name: 'Reporte Mensual - Mayo 2025',
      date: '01/06/2025',
      size: '2.4 MB'
    },
    {
      name: 'Reporte Semanal - Semana 22',
      date: '31/05/2025',
      size: '1.1 MB'
    },
    {
      name: 'Reporte Especial - Q2',
      date: '30/05/2025',
      size: '3.7 MB'
    },
    {
      name: 'Reporte de Actividad - Mayo',
      date: '29/05/2025',
      size: '1.8 MB'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Mi Panel</h2>
        <p className="mt-1 text-sm text-gray-500">
          Resumen de tu actividad y reportes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <RecentReports reports={recentReports} />
    </div>
  );
};

export default ClientDashboard;
