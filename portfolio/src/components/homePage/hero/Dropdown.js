import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        View My Resume 
        <div className="arrow-container">
          <span className="arrow">{isOpen ? '▲' : '▼'}</span>
        </div>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li key={index} className="dropdown-item">
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

export default Dropdown;