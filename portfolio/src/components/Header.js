import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import NavDropdown from './headerDropdown';  // Correct import of the custom NavDropdown

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Define the options for the dropdown
  const resumeOptions = [
    { label: 'AI/ML Python', link: '/assets/resumes/Harlan_Ferguson_Resumeml.pdf', icon: 'fab fa-python' },
    { label: 'JavaScript', link: '/assets/resumes/Harlan_Ferguson_Resumejs.pdf', icon: 'fab fa-js' },
    { label: 'Systems Integrator', link: '/assets/resumes/Harlan_Ferguson_Resume_SI.pdf', icon: 'fas fa-file-alt' },
    { label: 'Microsoft Dynamics365', link: '/assets/resumes/Harlan_Ferguson_Resumed365.pdf', icon: 'fab fa-microsoft' }
  ];

  return (
    <header>
      <nav id="navbar" className="navbar">
        <div className="nav-logo">
          <Link to="/">Harlan Ferguson</Link>
        </div>
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/projects" onClick={toggleMobileMenu}>Projects</Link>
          <NavDropdown options={resumeOptions} /> {/* Use the custom NavDropdown */}
          <Link to="https://hjferguson.github.io/#contact" onClick={toggleMobileMenu}>Contact</Link>
        </div>
        <div className={`nav-social ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="https://www.linkedin.com/in/harlan-ferguson-09b55010b/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/hjferguson" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/harlerino/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
