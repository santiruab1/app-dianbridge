import React from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonStyle: "border-blue-600 text-blue-600 hover:bg-blue-50",
    buttonType: "outline",
  },
  {
    title: "Professional",
    subheader: "Recommended",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
      "Dedicated team",
      "Best deals",
    ],
    buttonText: "Start now",
    buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
    buttonType: "solid",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonStyle: "border-blue-600 text-blue-600 hover:bg-blue-50",
    buttonType: "outline",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-8">
        <div className="w-full md:w-3/5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Pricing</h2>
          <p className="text-gray-600">
            Quickly build an effective pricing table for your potential customers with this layout.<br />
            It's built with default Material UI components with little customization.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {tiers.map((tier, idx) => (
            <div
              key={tier.title}
              className={`flex flex-col rounded-2xl shadow-lg border p-6 gap-4 transition
                ${tier.title === "Professional"
                  ? "bg-gradient-to-b from-blue-900/80 to-blue-950/90 border-none shadow-2xl text-white relative"
                  : "bg-white border-gray-200"
                }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-lg font-semibold ${tier.title === "Professional" ? "text-white" : "text-gray-900"}`}>
                  {tier.title}
                </span>
                {tier.title === "Professional" && (
                  <span className="flex items-center gap-1 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    <FaStar className="text-yellow-300" /> {tier.subheader}
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className={`text-4xl font-bold ${tier.title === "Professional" ? "text-white" : "text-gray-900"}`}>
                  ${tier.price}
                </span>
                <span className={`text-base ${tier.title === "Professional" ? "text-gray-200" : "text-gray-600"}`}>
                  per month
                </span>
              </div>
              <hr className={`my-2 ${tier.title === "Professional" ? "border-blue-400/40" : "border-gray-200"}`} />
              <ul className="flex-1 flex flex-col gap-2 mb-4">
                {tier.description.map((line) => (
                  <li key={line} className="flex items-center gap-2">
                    <FaCheckCircle
                      className={`w-5 h-5 ${tier.title === "Professional" ? "text-blue-300" : "text-blue-600"}`}
                    />
                    <span className={tier.title === "Professional" ? "text-gray-100" : "text-gray-700"}>
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-lg font-semibold border transition
                  ${tier.buttonType === "solid"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"}
                `}
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