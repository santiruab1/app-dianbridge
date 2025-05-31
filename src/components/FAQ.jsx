import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
	{
		id: "panel1",
		question: "¿Qué es DIANBridge?",
		answer: (
			<>
				DIANBridge es una solución tecnológica innovadora que permite integrar
				sistemas contables con la plataforma de la DIAN. Facilita la gestión de
				facturas electrónicas, garantizando eficiencia operativa y cumplimiento
				con la normativa fiscal.
			</>
		),
	},
	{
		id: "panel2",
		question: "¿Cuáles son los beneficios de usar DIANBridge?",
		answer: (
			<>
				DIANBridge automatiza procesos, reduce errores, asegura el cumplimiento de
				las regulaciones fiscales y ahorra tiempo en la gestión de facturas
				electrónicas. Además, se integra fácilmente con sistemas contables
				existentes.
			</>
		),
	},
	{
		id: "panel3",
		question: "¿Qué planes de licencia ofrece DIANBridge?",
		answer: (
			<>
				Ofrecemos tres planes:
				<br />
				<strong>Plan gratuito:</strong> integración esencial para pequeñas
				empresas.
				<br />
				<strong>Plan mensual:</strong> ideal para medianas empresas, incluye
				Soporte y reportes.
				<br />
				<strong>Plan anual:</strong> solución avanzada con soporte prioritario y
				herramientas personalizadas.
			</>
		),
	},
	{
		id: "panel4",
		question: "¿Cómo puedo obtener soporte personalizado?",
		answer: (
			<>
				Puedes contactarnos por correo electrónico, chat o línea directa. Nuestro
				equipo técnico está disponible para ayudarte y ofrecerte orientación
				adaptada a las necesidades específicas de tu empresa.
			</>
		),
	},
	{
		id: "panel5",
		question: "¿DIANBridge es compatible con mi sistema contable?",
		answer: (
			<>
				Sí. DIANBridge es compatible con una amplia variedad de sistemas
				contables. Si tu sistema no aparece en nuestra lista, podemos trabajar
				contigo para lograr una integración personalizada.
			</>
		),
	},
];

export default function FAQ() {
	const [hovered, setHovered] = useState(null);
	const [open, setOpen] = useState(null);

	// Detecta si es dispositivo móvil
	const isMobile =
		typeof window !== "undefined" &&
		window.matchMedia &&
		window.matchMedia("(pointer: coarse)").matches;

	const handleEnter = (id) => {
		if (!isMobile) setHovered(id);
	};
	const handleLeave = () => {
		if (!isMobile) setHovered(null);
	};
	const handleClick = (id) => {
		setOpen(open === id ? null : id);
	};

	return (
		<section
			id="faq"
			className="py-12 md:py-20 bg-white flex flex-col items-center"
		>
			<div className="max-w-3xl w-full px-4 flex flex-col items-center gap-8">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
					Preguntas frecuentes
				</h2>
				<div className="w-full flex flex-col gap-4">
					{faqs.map((faq) => {
						const isOpen =
							open === faq.id || (!isMobile && hovered === faq.id);
						return (
							<div
								key={faq.id}
								className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
								onMouseEnter={() => handleEnter(faq.id)}
								onMouseLeave={handleLeave}
							>
								<button
									className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 transition text-left"
									aria-expanded={isOpen}
									aria-controls={`${faq.id}-content`}
									id={`${faq.id}-header`}
									tabIndex={0}
									type="button"
									onClick={() => handleClick(faq.id)}
								>
									<span className="font-medium text-gray-800">
										{faq.question}
									</span>
									<FaChevronDown
										className={`ml-2 transition-transform duration-200 ${
											isOpen
												? "rotate-180 text-primary"
												: "text-gray-400"
										}`}
									/>
								</button>
								<div
									id={`${faq.id}-content`}
									className={`px-4 pb-3 text-gray-700 text-sm transition-all duration-200 ${
										isOpen
											? "max-h-96 opacity-100"
											: "max-h-0 opacity-0 overflow-hidden"
									}`}
									aria-labelledby={`${faq.id}-header`}
								>
									{isOpen && <div>{faq.answer}</div>}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}