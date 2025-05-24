import React from "react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="w-full bg-white py-16"
        >
            <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
                <div className="flex flex-col items-center w-full sm:w-3/4 gap-4">
                    <h1 className="text-4xl sm:text-5xl font-bold text-center flex flex-col sm:flex-row items-center justify-center text-gray-900">
                        Dian
                        <span className="text-primary">Bridge</span>
                    </h1>
                    <p className="text-gray-800 text-center max-w-2xl">
                        Explore our cutting-edge dashboard, delivering high-quality solutions tailored to your needs. Elevate your experience with top-tier features and services.
                    </p>
                    <form
                        className="flex flex-col sm:flex-row gap-2 w-full sm:w-[350px] pt-2"
                        onSubmit={e => e.preventDefault()}
                    >
                        <label htmlFor="email-hero" className="sr-only">
                            Email
                        </label>
                        <input
                            id="email-hero"
                            type="email"
                            autoComplete="off"
                            aria-label="Enter your email address"
                            placeholder="Your email address"
                            className="flex-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-gray-900"
                            required
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 rounded bg-primary text-white font-semibold hover:bg-primary-dark transition"
                        >
                            Start now
                        </button>
                    </form>
                    <span className="text-xs text-gray-600 text-center mt-1">
                        By clicking "Start now" you agree to our{" "}
                        <a href="#" className="text-primary hover:underline">
                            Terms &amp; Conditions
                        </a>
                        .
                    </span>
                </div>
                {/* Imagen destacada */}
                <div
                    className="w-full h-56 sm:h-[400px] md:h-[700px] mt-10 rounded-2xl border border-gray-200 shadow-lg bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://mui.com/static/screenshots/material-ui/getting-started/templates/dashboard.jpg')",
                        outline: "6px solid hsla(220, 25%, 80%, 0.2)",
                        boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
                    }}
                />
            </div>
        </section>
    );
}