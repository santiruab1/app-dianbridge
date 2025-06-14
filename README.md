# DianBridge

DianBridge es una plataforma web que facilita la gestión y el cumplimiento de obligaciones tributarias, proporcionando una interfaz moderna y fácil de usar para empresas y contadores.

## Características Principales

- 🔐 Autenticación segura y gestión de usuarios
- 📊 Panel de control personalizado para clientes y administradores
- 📋 Gestión de reportes y documentos tributarios
- 📱 Diseño responsive y moderno
- 🔔 Sistema de notificaciones para obligaciones pendientes
- 📈 Seguimiento en tiempo real de procesos tributarios

## Tecnologías Utilizadas

- ⚛️ React
- 🛠️ Vite
- 🎨 Tailwind CSS
- 🔄 React Router DOM
- 📦 Otros paquetes:
  - React Icons
  - PostCSS
  - ESLint

## Estructura del Proyecto

```
src/
  ├── components/          # Componentes reutilizables
  │   ├── auth/           # Componentes de autenticación
  │   ├── dashboard/      # Componentes del panel de control
  │   ├── home/           # Componentes de la página principal
  │   └── legal/          # Componentes de páginas legales
  ├── layouts/            # Layouts de la aplicación
  ├── pages/              # Páginas principales
  └── assets/             # Recursos estáticos
```

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/dianbridge.git
cd dianbridge
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea la versión de producción
- `npm run lint` - Ejecuta el linter
- `npm run preview` - Vista previa de la versión de producción

## Configuración de Desarrollo

El proyecto utiliza:
- Vite para un desarrollo rápido con HMR (Hot Module Replacement)
- ESLint para mantener la calidad del código
- Prettier para formateo consistente
- Tailwind CSS para estilos modernos y responsivos

## Entorno de Producción

Para construir la versión de producción:

```bash
npm run build
```

Esto generará una carpeta `dist` con los archivos optimizados listos para producción.

## Contribución

1. Fork el proyecto
2. Crea una rama para tu función: `git checkout -b feature/nueva-funcion`
3. Commit tus cambios: `git commit -m 'Añade nueva función'`
4. Push a la rama: `git push origin feature/nueva-funcion`
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

- Email: soporte@dianbridge.com
- LinkedIn: [DianBridge](https://www.linkedin.com/company/dianbridge)
- Sitio web: [https://www.dianbridge.com](https://www.dianbridge.com)
