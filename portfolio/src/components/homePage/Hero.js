import React from 'react';
import './Hero.css';
import profilePic from '../../assets/profile_pic.jpg';

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="hero-content">
      <img src={profilePic} alt="Harlan Ferguson" className="profile-image" />
      <h1>Harlan Ferguson</h1>
      <h4>Full-Stack Software Engineer</h4>
      <p>Building innovative web solutions with a focus on performance and scalability.</p>
      <button className="cta-button">View My Resume</button>
    </div>
  </section>
);

export default Hero;
