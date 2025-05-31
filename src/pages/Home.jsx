import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Highlights from '../components/Highlights'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Limpiar el state después de usarlo
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  )
}
