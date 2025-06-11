import {
  FiHome,
  FiUsers,
  FiFileText,
  FiSettings
} from 'react-icons/fi';

export const adminNavigation = [
  {
    name: 'Panel de Control',
    href: '/dashboard/admin',
    icon: FiHome
  },
  {
    name: 'Gestión de Usuarios',
    href: '/dashboard/admin/users',
    icon: FiUsers
  },
  {
    name: 'Reportes',
    href: '/dashboard/admin/reports',
    icon: FiFileText
  },
  {
    name: 'Configuración',
    href: '/dashboard/admin/settings',
    icon: FiSettings
  }
];

export const clientNavigation = [
  {
    name: 'Panel de Control',
    href: '/dashboard/client',
    icon: FiHome
  },
  {
    name: 'Mis Reportes',
    href: '/dashboard/client/reports',
    icon: FiFileText
  },
  {
    name: 'Configuración de Cuenta',
    href: '/dashboard/client/settings',
    icon: FiSettings
  }
];
