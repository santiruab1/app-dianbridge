import React, { useState } from "react";
import { MdOutlineCardGiftcard, MdWorkspacePremium } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import freeImg from "../assets/free.jpg";
import monthImg from "../assets/month.jfif";
import anualImg from "../assets/anual.jfif";

const items = [
  {
    icon: <MdOutlineCardGiftcard className="text-3xl text-primary" />,
    title: "Membresía Gratuita",
    description:
      "Ideal para pequeñas empresas que están comenzando su proceso de facturación electrónica.",
    image: freeImg,
  },
  {
    icon: <HiOutlineDocumentText className="text-3xl text-primary" />,
    title: "Membresía Mensual",
    description:
      "Diseñada para medianas empresas que buscan eficiencia operativa.",
    image: monthImg,
  },
  {
    icon: <MdWorkspacePremium className="text-3xl text-primary" />,
    title: "Membresía Anual",
    description:
      "Solución robusta para empresas que necesitan escalabilidad y control total.",
    image: anualImg,
  },
];

export default function Features() {
  const [selected, setSelected] = useState(0);

  return (
    <section id="features" className="py-12 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Comparación de membresías
          </h2>
          <p className="text-gray-600">
            Compara las características y beneficios de cada plan para elegir la
            opción ideal para tu empresa.
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
                  ${
                    selected === idx
                      ? "bg-primary-light border-primary shadow"
                      : "bg-white border-gray-200 hover:bg-gray-50"
                  }`}
              >
                <div>{item.icon}</div>
                <div className="text-left">
                  <div className="font-semibold text-lg text-gray-900">
                    {item.title}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {item.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
          {/* Imagen/preview */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-md aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow border flex items-center justify-center">
              <img
                src={items[selected].image}
                alt={items[selected].title}
                className="object-cover w-[95%] h-[95%] rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}