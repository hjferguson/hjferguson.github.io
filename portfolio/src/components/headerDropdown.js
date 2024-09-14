import React, { useState } from 'react';
import './headerDropdown.css'; 

const NavDropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-dropdown">
      <button onClick={toggleDropdown} className="nav-dropdown-button">
        Resumes
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className="nav-dropdown-menu">
          {options.map((option, index) => (
            <li key={index} className="nav-dropdown-item">
              <a href={option.link} target="_blank" rel="noopener noreferrer">
                <i className={option.icon}></i> {option.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavDropdown;
