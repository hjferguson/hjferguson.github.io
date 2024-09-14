import React, { useState } from 'react';
import './Projects.css';
import projectsData from '../assets/projects.json'; // Importing from the JSON file

const categories = [
  'All',
  'AI / ML Python',
  'JavaScript',
  'Mobile Development',
  'Desktop Programs'
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  const getResumeLink = () => {
    switch (selectedCategory) {
      case 'Artificial Intelligence / Machine Learning':
        return 'docs/assets/Harlan_Ferguson_ML_Resume.pdf';
      case 'JavaScript':
        return 'docs/assets/Harlan_Ferguson_JS_Resume.pdf';
      default:
        return 'docs/assets/Harlan_Ferguson_Resume.pdf';
    }
  };

  return (
    <section id="projects">
      <div className="projects-content">
        <h1>Projects</h1>
        <div className="categories">
          {categories.map(category => (
            <button
              key={category}
              className={category === selectedCategory ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-box">
              <h3>{project.title}</h3>
              {project.videoSrc ? (
                <video controls muted loop className="project-image-video">
                  <source src={project.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={project.imgSrc} alt={project.title} className="project-image" />
              )}
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.techStack}</p>
              <a href={project.githubLink} target="_blank" rel="noreferrer">View Project</a>
              {project.youtubeLink && <a href={project.youtubeLink} target="_blank" rel="noreferrer">Code Walkthrough on YouTube</a>}
            </div>
          ))}
        </div>
        <div className="resume-button">
          <a href={getResumeLink()} target="_blank" rel="noreferrer">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
