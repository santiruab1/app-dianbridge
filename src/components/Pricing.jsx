import React from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const tiers = [
	{
		title: "Gratuita",
		price: "0 COP",
		period: "por 30 días",
		description: [
			"Ideal para pequeñas empresas",
			"Integración básica con la DIAN",
			"Actualizaciones automáticas mensuales",
			"Soporte técnico limitado por correo electrónico",
		],
		buttonText: "Comenzar gratis",
		popular: false,
	},
	{
		title: "Mensual",
		price: "150,000 COP",
		period: "por mes",
		description: [
			"Perfecta para medianas empresas",
			"Integración completa con la DIAN",
			"Soporte por correo electrónico y chat",
			"Envío y recepción automática de facturas",
			"Reportes básicos de facturación",
		],
		buttonText: "Empezar ahora",
		popular: false,
	},
	{
		title: "Anual",
		price: "1,000,000 COP",
		period: "por año",
		description: [
			"Para empresas que buscan eficiencia total",
			"Integración avanzada con la DIAN y sistemas ERP",
			"Soporte técnico prioritario 24/7",
			"Automatización avanzada de procesos administrativos",
			"Reportes personalizados y análisis de datos",
			"Capacitaciones en línea para el equipo",
		],
		buttonText: "Únete hoy",
		popular: true,
	},
];

function getButtonType(tier) {
	return tier.popular ? "solid" : "outline";
}

function getButtonClass(tier) {
	return getButtonType(tier) === "solid"
		? "bg-primary text-white hover:bg-primary-dark border border-primary"
		: "border-primary text-primary hover:bg-primary-light border";
}

export default function Pricing() {
	const navigate = useNavigate();

	const handleTierClick = () => {
		navigate("/signup");
	};

	return (
		<section id="pricing" className="py-12 md:py-20 bg-gray-900 text-white">
			<div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-8">
				<div className="w-full md:w-3/5 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
						Precios
					</h2>
					<p className="text-gray-400">
						Selecciona el plan que mejor se adapte a las necesidades de tu
						empresa.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
					{tiers.map((tier, idx) => (
						<div
							key={tier.title}
							className={`flex flex-col rounded-2xl shadow-lg border p-6 gap-4 transition
                ${
					tier.popular
						? "bg-primary/60 border-none shadow-2xl text-white relative"
						: "bg-gray-800 border-gray-700 text-white"
				}`}
						>
							<div className="flex items-center justify-between mb-2">
								<span
									className={`text-lg font-semibold ${
										tier.popular ? "text-white" : "text-white"
									}`}
								>
									{tier.title}
								</span>
								{tier.popular && (
									<span className="flex items-center gap-1 bg-yellow-400 text-primary text-xs px-2 py-1 rounded-full font-semibold">
										<FaStar className="text-primary" /> Más popular
									</span>
								)}
							</div>
							<div className="flex flex-col items-start gap-0 mb-2">
								<span
									className={`text-4xl font-bold ${
										tier.popular ? "text-white" : "text-white"
									}`}
								>
									${tier.price}
								</span>
								<span
									className={`text-base ${
										tier.popular ? "text-gray-200" : "text-gray-300"
									}`}
								>
									{tier.period}
								</span>
							</div>
							<hr
								className={`my-2 ${
									tier.title === "Professional"
										? "border-primary/40"
										: "border-gray-700"
								}`}
							/>
							<ul className="flex-1 flex flex-col gap-2 mb-4">
								{tier.description.map((line) => (
									<li key={line} className="flex items-center gap-2">
										<span className="inline-flex items-center justify-center w-5 h-5">
											<FaCheckCircle className="w-5 h-5 text-primary" />
										</span>
										<span className="text-gray-100">{line}</span>
									</li>
								))}
							</ul>
							<button
								onClick={handleTierClick}
								className={`w-full py-2 rounded-lg font-semibold transition ${getButtonClass(tier)}`}
							>
								{tier.buttonText}
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}