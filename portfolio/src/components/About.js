import React from 'react';
import './About.css';
import profilePic from '../assets/derp.JPG';

const About = () => (
  <section id="about">
    <div className="about-content">
      <div className="main-info">
        <div className="info-tile">
          <div className="image-container">
            <img src={profilePic} alt="Harlan Ferguson" className="profile-image" />
          </div>
          <div className="text-container">
            <h1>Hi,</h1>
            <h2>I'm Harlan Ferguson</h2>
            <h4>Full-Stack Software Engineer</h4>
          </div>
        </div>
      </div>
      <div className="additional-info">
        <div className="info-item">
          <i className="fas fa-graduation-cap"></i>
          <p>Graduated with honours with an Advanced Diploma in Computer Programming and Analysis from George Brown College, Toronto Canada</p>
        </div>
        <div className="info-item">
          <i className="fas fa-trophy"></i>
          <p>Top 29% in IEEEXtreme 2023 international programming competition with over 4,231 teams</p>
        </div>
        <div className="info-item">
          <i className="fas fa-running"></i>
          <p>Outside of coding, I enjoy video games, brazilian jiu jitsu, and walking my dog, Mango</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
