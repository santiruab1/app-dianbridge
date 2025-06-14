import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/home/Navbar';
import PrivacyPolicy from '../../components/legal/PrivacyPolicy';
import Footer from '../../components/home/Footer';

export const PrivacyPage = () => {
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
        <PrivacyPolicy />
      </div>
      <Footer onSectionClick={handleNavigation} />
    </>
  );
};
