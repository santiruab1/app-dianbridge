import React from "react"
import Navbar from "./components/Navbar"
import Features from "./components/Features"
import Highlights from "./components/Highlights"
import Pricing from "./components/Pricing"
import Hero from "./components/Hero"
import FAQ from "./components/FAQ"
import SignIn from "./components/SignIn"
import SignUp from "./components/SingUp"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Hero />
      <Navbar />
      <Highlights/>
      <Features />
      <Pricing />
      <FAQ />
      <SignIn />
      <SignUp />
      <Footer />
      {/* Otros componentes */}
    </>
  )
}

export default App