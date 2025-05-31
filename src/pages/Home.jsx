import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Highlights from '../components/Highlights'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export const Home = () => {
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
