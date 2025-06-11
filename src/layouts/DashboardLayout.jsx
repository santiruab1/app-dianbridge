import React from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { FiMenu, FiLogOut, FiHome } from 'react-icons/fi';
import { useState } from 'react';
import logo from '../assets/dianbridge-logo.png';

const DashboardLayout = ({ role, navigation }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const user = { name: 'Usuario Demo' }; // Esto debería venir de tu contexto de autenticación

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 bg-white border-r transform transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ${isCollapsed ? 'w-16' : 'w-64'} lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo and Toggle */}
          <div className="flex items-center h-12 border-b">
            <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : 'justify-between w-full px-4'}`}>
              {!isCollapsed && (
                <img
                  src={logo}
                  alt="DianBridge"
                  className="h-14"
                />
              )}
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-1.5 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <FiMenu className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 overflow-y-auto">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.href)}
                className={`w-full flex items-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.href
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                } ${isCollapsed ? 'justify-center' : ''}`}
              >
                <item.icon className={`h-4 w-4 ${isCollapsed ? '' : 'mr-2'}`} />
                {!isCollapsed && <span>{item.name}</span>}
              </button>
            ))}
          </nav>

          {/* Navigation Buttons and User Info */}
          <div className="border-t pt-2">
            {/* Navigation Buttons */}
            <div className="p-3">
              <Link
                to="/"
                className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md transition-colors ${
                  isCollapsed ? 'justify-center' : ''
                }`}
              >
                <FiHome className="w-4 h-4" />
                {!isCollapsed && <span>Inicio</span>}
              </Link>
              <button
                onClick={handleLogout}
                className={`w-full flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors mt-2 ${
                  isCollapsed ? 'justify-center' : ''
                }`}
              >
                <FiLogOut className="w-4 h-4" />
                {!isCollapsed && <span>Cerrar Sesión</span>}
              </button>
            </div>

            {/* User Info */}
            {!isCollapsed && (
              <div className="p-3 bg-gray-50 mt-2">
                <div className="flex items-center p-2 bg-white rounded-md shadow-sm">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium">
                    {user.name.charAt(0)}
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs font-medium text-gray-500">{role}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${isCollapsed ? 'lg:pl-16' : 'lg:pl-64'}`}>
        {/* Top bar */}
        <div className="sticky top-0 z-20 flex items-center h-12 bg-white border-b px-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-1.5 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <FiMenu className="h-5 w-5" />
          </button>
        </div>

        {/* Page Content */}
        <main className="p-4">
          <Outlet />
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
