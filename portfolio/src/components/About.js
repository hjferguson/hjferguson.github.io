import React from 'react';
import './About.css';
import profilePic from '../assets/img/derp.JPG';

const About = () => (
  <section id="about">
    <div className="about-content">
      <div className="info-tile">
        <div className="image-container">
          <img src={profilePic} alt="Harlan Ferguson" className="profile-image" />
        </div>
        <div className="text-container">
          <h1>Hi, </h1>
          <br></br>
          <h2>I'm Harlan Ferguson</h2>
          <h4>Full-Stack Software Engineer</h4>
          <p>I just graduated with an Advanced Diploma in Computer Programming and Analysis</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;