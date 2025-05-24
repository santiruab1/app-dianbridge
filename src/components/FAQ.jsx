import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    id: "panel1",
    question: "How do I contact customer support if I have a question or issue?",
    answer: (
      <>
        You can reach our customer support team by emailing&nbsp;
        <a href="mailto:support@email.com" className="text-blue-700 underline">support@email.com</a>
        &nbsp;or calling our toll-free number. We're here to assist you promptly.
      </>
    ),
  },
  {
    id: "panel2",
    question: "Can I return the product if it doesn't meet my expectations?",
    answer: (
      <>
        Absolutely! We offer a hassle-free return policy. If you're not completely satisfied, you can return the product within [number of days] days for a full refund or exchange.
      </>
    ),
  },
  {
    id: "panel3",
    question: "What makes your product stand out from others in the market?",
    answer: (
      <>
        Our product distinguishes itself through its adaptability, durability, and innovative features. We prioritize user satisfaction and continually strive to exceed expectations in every aspect.
      </>
    ),
  },
  {
    id: "panel4",
    question: "Is there a warranty on the product, and what does it cover?",
    answer: (
      <>
        Yes, our product comes with a [length of warranty] warranty. It covers defects in materials and workmanship. If you encounter any issues covered by the warranty, please contact our customer support for assistance.
      </>
    ),
  },
];

export default function FAQ() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="faq" className="py-12 md:py-20 bg-white flex flex-col items-center">
      <div className="max-w-3xl w-full px-4 flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
          Frequently asked questions
        </h2>
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              onMouseEnter={() => setHovered(faq.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <button
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 hover:bg-gray-100 transition text-left"
                aria-expanded={hovered === faq.id}
                aria-controls={`${faq.id}-content`}
                id={`${faq.id}-header`}
                tabIndex={-1}
                type="button"
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <FaChevronDown
                  className={`ml-2 transition-transform duration-200 ${
                    hovered === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`${faq.id}-content`}
                className={`px-4 pb-3 text-gray-700 text-sm transition-all duration-200 ${
                  hovered === faq.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
                aria-labelledby={`${faq.id}-header`}
              >
                {hovered === faq.id && <div>{faq.answer}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}