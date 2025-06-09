import React from "react";
import {
  FaCogs,
  FaTools,
  FaThumbsUp,
  FaMagic,
  FaHeadset,
  FaChartLine,
} from "react-icons/fa";

const items = [
  {
    icon: <FaCogs className="text-3xl text-primary/70" />,
    title: "Adaptabilidad inteligente",
    description:
      "DianBridge se ajusta fácilmente a las necesidades y procesos de tu empresa, mejorando la eficiencia operativa y facilitando tus tareas administrativas.",
  },
  {
    icon: <FaTools className="text-3xl text-primary/70" />,
    title: "Automatización confiable",
    description:
      "Reduce los errores humanos y ahorra tiempo con un sistema que automatiza la descarga y organización de tus facturas electrónicas, integrándose sin complicaciones con tus sistemas contables.",
  },
  {
    icon: <FaThumbsUp className="text-3xl text-primary/70" />,
    title: "Interfaz intuitiva",
    description:
      "Nuestra plataforma está diseñada para que cualquier usuario, sin importar su nivel técnico, pueda gestionarla de forma simple, rápida y eficiente.",
  },
  {
    icon: <FaMagic className="text-3xl text-primary/70" />,
    title: "Funcionalidad innovadora",
    description:
      "Obtén reportes en tiempo real, seguimiento de actividades y mejoras constantes que impulsan tu toma de decisiones y te preparan para los retos del futuro.",
  },
  {
    icon: <FaHeadset className="text-3xl text-primary/70" />,
    title: "Soporte eficiente",
    description:
      "Nuestro equipo de atención ofrece soluciones claras, rápidas y ajustadas a tus necesidades específicas, garantizando una experiencia de servicio confiable y cercana.",
  },
  {
    icon: <FaChartLine className="text-3xl text-primary/70" />,
    title: "Precisión en cada detalle",
    description:
      "Desde la gestión de datos hasta la generación de informes, cada parte de DianBridge ha sido pensada para ofrecerte exactitud y control en tu operación diaria.",
  },
];

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="pt-8 md:pt-24 pb-16 md:pb-32 bg-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-8">
        <div className="w-full md:w-5/5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Descubre por qué DianBridge marca la diferencia</h2>
          <p className="text-gray-400">
            DianBridge se ajusta fácilmente a las necesidades y procesos de tu empresa, mejorando la eficiencia operativa y facilitando tus tareas administrativas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col gap-3 h-full shadow"
            >
              <div>{item.icon}</div>
              <div>
                <div className="font-semibold text-lg mb-1">{item.title}</div>
                <div className="text-gray-400 text-sm">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}