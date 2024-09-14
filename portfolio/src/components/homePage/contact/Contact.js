import React, { useState } from 'react';
import './Contact.css';
import Modal from '../../Modal';
import ContactForm from '../../ContactForm';

const ContactSection = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-content">
        <h1 data-aos="fade-up">Contact Me</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <button onClick={toggleModal} className="cta-button-dark">
          Get in Touch
        </button>
      </div>

      {/* Modal that opens on button click */}
      <Modal showModal={showModal} closeModal={toggleModal}>
        <ContactForm closeModal={toggleModal} />
      </Modal>
    </section>
  );
};

export default ContactSection;
