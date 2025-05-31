import React from 'react'
import Navbar from '../components/Navbar'
import SignUp from '../components/SingUp'
import Footer from '../components/Footer'

export const SignUpPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <SignUp />
      </div>
      <Footer />
    </>
  )
}
