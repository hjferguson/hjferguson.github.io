import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';

function ContactForm({ closeModal }) {
  const [state, handleSubmit] = useForm("myzgoweo");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setIsSuccess(true);
      // Auto-close the modal after 2 seconds
      setTimeout(() => {
        closeModal();
      }, 2000);
    }
  }, [state.succeeded, closeModal]);

  return (
    <div className={`contact-form-container ${isSuccess ? 'success' : ''}`}>
      {isSuccess ? (
        <div className="success-message">
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;