import React from 'react';
import './Hero.css';
import profilePic from '../../assets/profile_pic.png';

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="hero-content">
      <img src={profilePic} alt="Harlan Ferguson" className="profile-image" />
      <h1>Harlan Ferguson</h1>
      <h4>Full Stack Software Developer</h4>
      <p>Building web and mobile apps with a focus on fun!</p>
      <button className="cta-button">View My Resume</button>
    </div>
  </section>
);

export default Hero;
