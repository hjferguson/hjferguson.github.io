import React from 'react';
import './About.css';
import mechanicPic from '../../../assets/bike_mech.png';

const About = () => (
  <section id="about" className="about-section">
    <div className="about-content">
      <h1 data-aos="fade-up">About Me</h1>
      <p data-aos="fade-up" data-aos-delay="200">
        I'm a maintenance worker for a residential building trying to start a career in web or mobile development.
      </p>

      <p data-aos="fade-up" data-aos-delay="300">
        I started out as a bicycle mechanic and taught myself Python to automate a task at work. 
        That sparked my interest in programming and motivated me to go to school for it.
      </p>

      <p data-aos="fade-up" data-aos-delay="300">
        In June of 2024 I graduated with honours from George Brown College with an Advanced Diploma in Computer Programming and Analysis.
      </p>

    </div>

    <div className="about-image" data-aos="slide-left" data-aos-delay="400">
      <img src={mechanicPic} alt="About me" />
    </div>
  </section>
);

export default About;
