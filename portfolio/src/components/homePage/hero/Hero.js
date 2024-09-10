import React, { useState } from 'react';
import './Hero.css';
import profilePic from '../../../assets/profile_pic.png';
import Modal from '../../Modal';
import ContactForm from '../../ContactForm';
import Dropdown from './Dropdown';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Define the options for the dropdown
  const resumeOptions = [
    { label: 'Default Resume', link: '/docs/assets/Harlan_Ferguson_Resume.pdf', icon: 'fas fa-file-alt' },
    { label: 'Python Resume', link: '/docs/assets/Harlan_Ferguson_Python_Resume.pdf', icon: 'fab fa-python' },
    { label: 'JavaScript Resume', link: '/docs/assets/Harlan_Ferguson_JS_Resume.pdf', icon: 'fab fa-js' }
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <img src={profilePic} alt="Harlan Ferguson" className="profile-image" />
        <h1>Harlan Ferguson</h1>
        <h4>Full Stack Software Developer</h4>
        <p>Building web and mobile apps with a focus on fun.</p>
        <div className="cta-buttons">
          <Dropdown options={resumeOptions} />
          <button onClick={toggleModal} className="cta-button">
            Contact Me
          </button>
        </div>
      </div>

      <Modal showModal={showModal} closeModal={toggleModal}>
        <ContactForm closeModal={toggleModal} />
      </Modal>
    </section>
  );
};

export default Hero;
