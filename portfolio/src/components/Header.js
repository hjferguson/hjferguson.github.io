import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Harlan Ferguson</Link>
      </div>
      <div className="nav-links">
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <a href="/docs/assets/Harlan_Ferguson_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="nav-social">
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
    </nav>
  </header>
);

export default Header;
