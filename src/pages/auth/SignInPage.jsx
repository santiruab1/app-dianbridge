import React, { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/home/Navbar'
import SignIn from '../../components/auth/SignIn'
import Footer from '../../components/home/Footer'

export const SignInPage = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleNavigation = (sectionId) => {
    navigate('/', { state: { scrollTo: sectionId } });
  };

  return (
    <>
      <Navbar onSectionClick={handleNavigation} />
      <div className="mt-16">
        <SignIn />
      </div>
      <Footer onSectionClick={handleNavigation} />
    </>
  )
}
