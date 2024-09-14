import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

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

    const mediaQuery = window.matchMedia('(min-width: 769px)');
    if (mediaQuery.matches) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav id="navbar" className="navbar">
        <div className="nav-logo">
          <Link to="/">Harlan Ferguson</Link>
        </div>
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          
          <Link to="/projects" onClick={toggleMobileMenu}>Projects</Link>
          <a href="/docs/assets/Harlan_Ferguson_Resume.pdf" target="_blank" rel="noreferrer" onClick={toggleMobileMenu}>Resume</a>
          <Link to="#contact" onClick={toggleMobileMenu}>Contact</Link>
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
