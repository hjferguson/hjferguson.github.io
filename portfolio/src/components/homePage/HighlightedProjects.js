import React from 'react';
import { Link } from 'react-router-dom';
import './HighlightedProjects.css';

const HighlightedProjects = () => {
  const highlightedProjects = [
    {
      title: "Emotion Detection with EfficientNet",
      description: "A machine learning project aimed at identifying human emotions using PyTorch.",
      link: "/projects/emotion-detection",
      image: "path_to_emotion_detection_image",
    },
    {
      title: "My-Game: A Sports Social Media Web App",
      description: "A comprehensive social media platform for sports teams.",
      link: "/projects/my-game",
      image: "path_to_my_game_image",
    },
    // Add more highlighted projects as needed
  ];

  return (
    <section id="highlighted-projects" className="highlighted-projects-section">
      <div className="carousel">
        {highlightedProjects.map((project, index) => (
          <div key={index} className="carousel-item">
            <img src={project.image} alt={project.title} className="carousel-image" />
            <div className="carousel-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={project.link} className="project-link">Learn More</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="see-all-projects">
        <Link to="/projects" className="see-all-button">See All Projects</Link>
      </div>
    </section>
  );
};

export default HighlightedProjects;