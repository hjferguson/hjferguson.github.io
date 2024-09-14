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
    { label: 'AI/ML Python', link: '/assets/resumes/Harlan_Ferguson_Resumeml.pdf', icon: 'fab fa-python' },
    { label: 'JavaScript', link: '/assets/resumes/Harlan_Ferguson_Resumejs.pdf', icon: 'fab fa-js' },
    { label: 'Systems Integrator', link: '/assets/resumes/Harlan_Ferguson_Resume_SI.pdf', icon: 'fas fa-file-alt' },
    { label: 'Microsoft Dynamics365', link: '/assets/resumes/Harlan_Ferguson_Resumed365.pdf', icon: 'fab fa-microsoft' }    
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
