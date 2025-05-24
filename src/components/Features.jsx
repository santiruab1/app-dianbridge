import React, { useState } from "react";
import { FaThLarge, FaMobileAlt, FaLaptop } from "react-icons/fa";

const items = [
  {
    icon: <FaThLarge className="text-3xl text-primary" />,
    title: "Dashboard",
    description:
      "Snapshot de los datos y métricas más importantes de tu producto.",
    image: "https://mui.com/static/images/templates/templates-images/dash-light.png",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-primary" />,
    title: "Integración móvil",
    description:
      "Información sobre la versión móvil de tu producto.",
    image: "https://mui.com/static/images/templates/templates-images/mobile-light.png",
  },
  {
    icon: <FaLaptop className="text-3xl text-primary" />,
    title: "Disponible en todas las plataformas",
    description:
      "Disponible en web, móvil y escritorio.",
    image: "https://mui.com/static/images/templates/templates-images/devices-light.png",
  },
];

export default function Features() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="features" className="py-12 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Comparación de Membresías</h2>
          <p className="text-gray-600">
            Compara las características y beneficios de cada membresía para elegir la mejor opción para ti.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Opciones/features */}
          <div className="flex-1 flex flex-col gap-4">
            {items.map((item, idx) => (
              <button
                key={item.title}
                onClick={() => setSelected(idx)}
                className={`flex items-start gap-4 p-4 rounded-lg border transition
                  ${selected === idx
                    ? "bg-primary-light border-primary shadow"
                    : "bg-white border-gray-200 hover:bg-gray-50"}`}
              >
                <div>{item.icon}</div>
                <div className="text-left">
                  <div className="font-semibold text-lg text-gray-900">{item.title}</div>
                  <div className="text-gray-600 text-sm">{item.description}</div>
                </div>
              </button>
            ))}
          </div>
          {/* Imagen/preview */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-md aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow border">
              <img
                src={items[selected].image}
                alt={items[selected].title}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}