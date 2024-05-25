import React from 'react';
import './About.css';
import profilePic from '../assets/img/profile_no_background.png';

const About = () => (
  <section id="about">
    <div className="about-content">
      <div className="image-container">
        <img src={profilePic} alt="Harlan Ferguson" className="profile-image" />
      </div>
      <div className="info-tile">
        <h1>Hi, I'm Harlan Ferguson</h1>
        <h4>Full-Stack Software Engineer</h4>
        <p>High level experience in web design and development knowledge, producing quality work.</p>
        <button className="contact-button">Contact Me</button>
      </div>
    </div>
    <div className="about-description">
      <p>
        I'm Harlan Ferguson, a full-stack software developer. I graduated with an Advanced Diploma in Computer
        Programming and Analysis at George Brown College, Toronto. I enjoy programming projects primarily in JavaScript and Python but I also have a large knowledge of many
        different languages and tech stacks. I'm eager to start working in the industry.
      </p>
      <p>
        My journey in tech is marked by a diverse portfolio of projects—from creating a social media site,
        to leveraging AI for enhancing email security. I've worked in industries that constantly require problem solving
        and I'm passionate about learning and improving my skillset.
        My ability to rapidly adapt and deliver under tight deadlines doesn’t just reflect my technical
        proficiency but also underscores my passion for making a tangible impact through code.
      </p>
      <p>
        As I navigate the beginnings of my career, I'm eager to collaborate with forward-thinking teams,
        contribute to meaningful projects, and grow into a role where I can blend technical innovation
        with strategic insight. Below, you’ll find some of my recent projects that showcase not just
        what I’ve learned, but what I love doing.
      </p>
    </div>
  </section>
);

export default About;
