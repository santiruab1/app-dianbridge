import React, { useState } from 'react';
import { FiDownload, FiFilter, FiSearch, FiCalendar } from 'react-icons/fi';

const ReportManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  // Datos de ejemplo - estos deberían venir de tu API
  const reports = [
    {
      id: 1,
      name: 'Reporte General Q2 2025',
      type: 'trimestral',
      date: '2025-06-01',
      size: '4.2 MB',
      downloads: 45,
      status: 'completado'
    },
    {
      id: 2,
      name: 'Reporte Mensual Mayo 2025',
      type: 'mensual',
      date: '2025-06-01',
      size: '2.8 MB',
      downloads: 32,
      status: 'completado'
    },
    {
      id: 3,
      name: 'Reporte Semanal S22',
      type: 'semanal',
      date: '2025-06-07',
      size: '1.5 MB',
      downloads: 12,
      status: 'en_proceso'
    },
    // ... más reportes
  ];

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || report.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Gestión de Reportes</h2>
        <p className="mt-1 text-sm text-gray-500">
          Administra y supervisa todos los reportes generados
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        {/* Filtros */}
        <div className="p-6 border-b">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar reportes..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <select
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">Todos los tipos</option>
              <option value="semanal">Semanal</option>
              <option value="mensual">Mensual</option>
              <option value="trimestral">Trimestral</option>
            </select>
            <select
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <option value="all">Todos los períodos</option>
              <option value="current_month">Este mes</option>
              <option value="last_month">Mes anterior</option>
              <option value="last_quarter">Último trimestre</option>
            </select>
          </div>
        </div>

        {/* Lista de reportes */}
        <div className="divide-y divide-gray-200">
          {filteredReports.map((report) => (
            <div key={report.id} className="p-6 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FiCalendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{report.name}</h3>
                  <div className="flex items-center mt-1 space-x-2 text-sm text-gray-500">
                    <span>{report.date}</span>
                    <span>•</span>
                    <span>{report.size}</span>
                    <span>•</span>
                    <span>{report.downloads} descargas</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  report.status === 'completado'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {report.status === 'completado' ? 'Completado' : 'En proceso'}
                </span>
                <button
                  className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                  title="Descargar reporte"
                >
                  <FiDownload className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportManagement;
