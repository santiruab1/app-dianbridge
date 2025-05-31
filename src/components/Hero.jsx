import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/dianbridge-logo.png";
import UI from "../assets/dianbridge-UI.jpg"

export default function Hero() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            navigate('/signup', { state: { email } });
        }
    };

    return (
        <section
            id="hero"
            className="w-full bg-white py-16 mt-20"
        >
            <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
                <img src={logo} alt="DianBridge Logo" className="h-32" />
                <div className="flex flex-col items-center w-full gap-4">
                    <h1 className="text-4xl sm:text-5xl font-bold text-center flex flex-col sm:flex-row items-center justify-center text-gray-900">
                        Dian
                        <span className="text-primary">Bridge</span>
                    </h1>
                    <p className="text-gray-800 text-center max-w-2xl">
                        Automatizamos la integración entre los sistemas contables y la DIAN.
                    </p>
                    <form
                        className="flex flex-col sm:flex-row gap-2 w-full max-w-2xl pt-2 justify-center items-center"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="email-hero" className="sr-only">
                            Email
                        </label>
                        <input
                            id="email-hero"
                            type="email"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label="Enter your email address"
                            placeholder="Ingresa tu correo electrónico"
                            className="w-60 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 text-center placeholder:text-center"
                            required
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 rounded bg-primary text-white font-semibold hover:bg-primary-dark transition whitespace-nowrap"
                        >
                            Comenzar&nbsp;ahora
                        </button>
                    </form>
                    <span className="text-xs text-gray-600 text-center mt-1">
                        Al hacer clic en "Comenzar ahora", acepta los términos y condiciones.
                        </span>
                </div>
                {/* Imagen destacada */}
                <img src={UI} alt="User Interface DianBridge" 
                className="w-full h-40 sm:h-[300px] md:h-[525px] mt-10 bg-cover bg-center"
                />
                
            </div>
        </section>
    );
}