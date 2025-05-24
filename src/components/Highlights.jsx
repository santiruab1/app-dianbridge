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
    icon: <FaCogs className="text-3xl text-blue-400 opacity-70" />,
    title: "Adaptable performance",
    description:
      "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.",
  },
  {
    icon: <FaTools className="text-3xl text-blue-400 opacity-70" />,
    title: "Built to last",
    description:
      "Experience unmatched durability that goes above and beyond with lasting investment.",
  },
  {
    icon: <FaThumbsUp className="text-3xl text-blue-400 opacity-70" />,
    title: "Great user experience",
    description:
      "Integrate our product into your routine with an intuitive and easy-to-use interface.",
  },
  {
    icon: <FaMagic className="text-3xl text-blue-400 opacity-70" />,
    title: "Innovative functionality",
    description:
      "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
  },
  {
    icon: <FaHeadset className="text-3xl text-blue-400 opacity-70" />,
    title: "Reliable support",
    description:
      "Count on our responsive customer support, offering assistance that goes beyond the purchase.",
  },
  {
    icon: <FaChartLine className="text-3xl text-blue-400 opacity-70" />,
    title: "Precision in every detail",
    description:
      "Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.",
  },
];

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="pt-8 md:pt-24 pb-16 md:pb-32 bg-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-8">
        <div className="w-full md:w-3/5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Highlights</h2>
          <p className="text-gray-400">
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer support and
            precision in every detail.
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