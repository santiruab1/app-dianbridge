import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/home/Navbar';
import TermsAndConditions from '../../components/legal/TermsAndConditions';
import Footer from '../../components/home/Footer';

export const TermsPage = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
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
        <TermsAndConditions />
      </div>
      <Footer onSectionClick={handleNavigation} />
    </>
  );
};
