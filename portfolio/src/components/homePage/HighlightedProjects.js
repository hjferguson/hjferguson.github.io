import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HighlightedProjects.css';
import projectsData from '../../assets/projects.json';  // Adjust path as needed

// Import FontAwesome components and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HighlightedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const highlightedProjects = projectsData.slice(0, 3); // Use 3 highlighted projects for example
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animations
      once: true,     // Only animate once when scrolled into view
    });
  }, []);

  const goToNextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % highlightedProjects.length); // Loop through projects
      setIsAnimating(false);
    }, 100); // Adjust delay to match the CSS animation time
  };

  const goToPreviousProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? highlightedProjects.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500); // Adjust delay to match the CSS animation time
  };

  const goToProject = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500); // Adjust delay to match the CSS animation time
  };

  return (
    <section id="highlighted-projects" className="highlighted-projects-section">
      <div className="highlighted-projects-content">
        <h1 data-aos="fade-up">Highlighted Projects</h1>

        <div className="carousel-wrapper">
          <button className="carousel-control left" onClick={goToPreviousProject}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <div className="carousel-container">
            <div className="carousel-item">
              <video
                src={highlightedProjects[currentIndex].videoSrc}
                className="carousel-video"
                controls
              />
              <div className="carousel-content">
                <h3>{highlightedProjects[currentIndex].title}</h3>
                <p>{highlightedProjects[currentIndex].description}</p>
                <Link
                  to={highlightedProjects[currentIndex].githubLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="project-link"
                >
                  View on GitHub
                </Link>

              </div>
            </div>
          </div>

          <button className="carousel-control right" onClick={goToNextProject}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        {/* Dots for navigation */}
        <div className="carousel-dots">
          {highlightedProjects.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToProject(index)}
            ></span>
          ))}
        </div>

        <div className="see-all-projects">
          <Link to="/projects" className="cta-button">See All Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default HighlightedProjects;
