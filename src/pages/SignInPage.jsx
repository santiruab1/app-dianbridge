import React from 'react'
import Navbar from '../components/Navbar'
import SignIn from '../components/SignIn'
import Footer from '../components/Footer'

export const SignInPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <SignIn />
      </div>
      <Footer />
    </>
  )
}
