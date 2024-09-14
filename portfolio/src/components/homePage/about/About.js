import React from 'react';
import './About.css';
import mechanicPic from '../../../assets/bike_mech.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faReact, faJava, faHtml5, faCss3Alt, faDocker, faGithub } from '@fortawesome/free-brands-svg-icons';

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

      <h2 data-aos="fade-up" className="strengths-heading">My Strengths</h2>
      <div className="strengths-icons" data-aos="fade-up" data-aos-delay="400">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faPython} size="3x" title="Python" />
        </div>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faJs} size="3x" title="JavaScript" />
        </div>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faReact} size="3x" title="React" />
        </div>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faJava} size="3x" title="Java" />
        </div>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faHtml5} size="3x" title="HTML5" />
        </div>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faCss3Alt} size="3x" title="CSS3" />
        </div>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faDocker} size="3x" title="Docker" />
        </div>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faGithub} size="3x" title="GitHub" />
        </div>
      </div>
    </div>

    <div className="about-image" data-aos="slide-left" data-aos-delay="400">
      <img src={mechanicPic} alt="About me" />
    </div>
  </section>
);

export default About;
