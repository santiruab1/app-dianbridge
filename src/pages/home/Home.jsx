import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../../components/home/Hero'
import Navbar from '../../components/home/Navbar'
import Highlights from '../../components/home/Highlights'
import Features from '../../components/home/Features'
import Pricing from '../../components/home/Pricing'
import FAQ from '../../components/home/FAQ'
import Footer from '../../components/home/Footer'

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
