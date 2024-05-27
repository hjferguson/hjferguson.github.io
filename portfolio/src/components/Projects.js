import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Emotion Detection with EfficientNet',
    category: 'Artificial Intelligence / Machine Learning',
    videoSrc: '/assets/video/computer_vision.mp4',
    description: 'This Emotion Detection Project showcases the development and refinements of a model aimed at identifying human emotions. Initial overfitting was tackled by introducing validation sets and early stopping, without much success. Progressively, through adjustments such as data augmentation, model simplification, and convolutional layer enhancements, slight improvements were achieved. Transitioning from TensorFlow to PyTorch, the project saw significant enhancement with the adoption of EfficientNet, ultimately achieving 68.5% accuracy, which is impressive considering the "high score" for this dataset sits around 75%. This journey not only refined my understanding of neural network optimization but also enhanced my skills in leveraging GPU over CPU, optimizing performance significantly.',
    techStack: 'PyTorch, EfficientNet, GPU Acceleration',
    githubLink: 'https://github.com/hjferguson/Emotion_Detection_AI',
    youtubeLink: 'https://www.youtube.com/watch?v=T8JSCDt7_m8&t=954s'
  },
  {
    id: 2,
    title: 'My-Game: A Sports Social Media Web App',
    category: 'JavaScript',
    videoSrc: '/assets/video/My-Game.mp4',
    description: 'My-Game, our capstone project at George Brown College, is a comprehensive sports social media platform that simplifies team management and enhances user interaction. As the project manager and lead developer, I spearheaded its creation, focusing on robust features like Auth0 integration for secure login, a dynamic feed for user posts, and real-time messaging with Socket.io. Utilizing Firebase for its CDN, the app delivers media content swiftly, ensuring an engaging user experience. Comprehensive user profiles, direct messaging, friendship, and post CRUD are among the key features I implemented, alongside secure JWT authentication for protected routes. My-Game exemplifies a blend of technical excellence and user-centric design, showcasing my commitment to developing scalable and secure web applications.',
    techStack: 'MERN, Auth0, Firebase, Socket.io, MongoDB Atlas, JWT',
    githubLink: 'https://github.com/RaleighD/My-Game'
  },
  {
    id: 3,
    title: 'SpaceX Launch Tracker',
    category: 'JavaScript',
    videoSrc: '/assets/video/spaceXDemo.mp4',
    description: 'For a dive into Angular and real-world API consumption, I built a SpaceX Mission Tracker. This app hits the SpaceX API to list missions, filter them by year, and dive into mission specifics, including embedded launch videos for a richer experience. Despite being a first-timer with Angular, I managed to get a grasp on its ecosystem, from routing to services, and how to properly architect an Angular application. Facing challenges like hosting issues and making sure Angular Material played nice with custom styles, I leaned into problem-solving and debugging - crucial skills in any developer\'s toolkit. The outcome: a functional, informative app that reinforces my fundamentals in Angular and my commitment to learning by doing.',
    techStack: 'Angular.js, SpaceX API',
    githubLink: 'https://github.com/hjferguson/101133838-lab-test2-comp3133'
  },
  {
    id: 4,
    title: 'Live Chatroom',
    category: 'JavaScript',
    videoSrc: '/assets/video/chatapp.mp4',
    description: 'Developed within a tight 12-hour deadline for a school lab test, this chat application leverages the Dockerized MERN stack for a complete user registration and login experience, using JWT for secure authentication. Utilizing Socket.io, it enables real-time communication across various chatrooms, with the server dynamically notifying users upon new arrivals. Each chatroom maintains its unique chat history, ensuring data persistence and continuity. User information is stored securely in MongoDB, adhering to best security practices. This project not only solidified my understanding of websockets and live communications but also demonstrated my ability to rapidly develop a feature-rich application under time constraints.',
    techStack: 'MongoDB, Express.js, React.js, Node.js',
    githubLink: 'https://github.com/hjferguson/live_chat_app'
  },
  {
    id: 5,
    title: 'Scavenger Hunt Android App',
    category: 'Mobile Development',
    videoSrc: '/assets/video/cityScav.mp4',
    description: 'In my role as the project lead for "City Scav", I guided a talented team in designing and implementing an interactive and user-friendly mobile application. Developed using Android Studio, Java, and Gradle, this app integrates the Google Maps API, allowing users to engage in a digital scavenger hunt. The app features custom markers for points of interest (POIs) which users collect and track on a dedicated screen. We incorporated an achievement system to reward users based on the number of collected POIs and included social sharing capabilities for enhanced user interaction. The app\'s design reflects an outdoorsy aesthetic with AI-generated colors and images, aimed at providing an enjoyable user experience. This project not only showcases my technical skills in mobile app development but also highlights my capabilities in project management and creative design. We received a 100% grade from our professor for this assignment.',
    techStack: 'Java, Gradle',
    githubLink: 'https://github.com/hjferguson/Scavenger_Hunt_Mobile_App'
  },
  {
    id: 6,
    title: 'Employee Management Web App',
    category: 'JavaScript',
    videoSrc: '/assets/video/emp_manager_MERN.mp4',
    description: 'Achieving a top grade of 100% in my fullstack class\'s final assignment, I developed an Employee Management Web App using the MERN stack. This web application provides a secure login system with robust password encryption, leading to a dashboard that displays key employee metrics. The dashboard features a pie chart showing the gender distribution, average salary, and total employee count, offering managers immediate and valuable insights. A critical feature of this app is the ability to perform CRUD operations on employee data, enabling effective team management. The app\'s frontend, designed with React.js, offers a user-friendly experience, while the backend, using Node.js and Express.js with MongoDB, ensures reliable data management and server-side operations. This project demonstrates my capability to blend technical proficiency with practical business solutions in a full-stack development environment.',
    techStack: 'MongoDB, Express.js, React.js, Node.js',
    githubLink: 'https://github.com/hjferguson/Employee_Management_Web_App'
  },
  {
    id: 7,
    title: 'Chrome Extension that blocks phishing links using AI',
    category: 'Artificial Intelligence / Machine Learning',
    videoSrc: '/assets/video/anti_phish.mp4',
    description: 'Developed in a 48-hour hackathon, this Chrome extension leverages AI to enhance email security without any user setup. Once installed, it seamlessly integrates with your Gmail. The extension scrutinizes email senders against a pre-defined whitelist. Emails from trusted domains receive a green dot, indicating safety. For others, it employs a Random Forest classifier, trained on phishing email datasets, to assess potential risks. Detected phishing attempts are marked with a red \'phishing\' alert, and hyperlinks are disabled to prevent access to potentially harmful sites. Safe emails are similarly marked with a green dot, reassuring the user of their legitimacy. This solution blends simplicity with robust security, offering a user-friendly approach to email protection.',
    techStack: 'Python (Scikit, Flask), JavaScript',
    githubLink: 'https://github.com/hjferguson/AI_Anti_Phish'
  },
  {
    id: 8,
    title: 'Reddit Title Predictor using Machine Learning',
    category: 'Artificial Intelligence / Machine Learning',
    videoSrc: '/assets/video/reddit_ml.mp4',
    description: 'For this project, I wanted to make my own dataset and then train a language model. I went with Reddit because of their free API use. After generating a dataframe with thousands of subreddit titles and their corresponding subreddits as their labels, I cleaned and vectorized it in preparation for training. Using Scikit\'s Bayes model, I trained and tuned the data to an average F1 score of 80%. From there, I developed a webapp for users to enter a title, and have ML predict where that title would belong on Reddit.',
    techStack: 'Python (Django/Scikit-Learn/Pandas), Typescript, React.js',
    githubLink: 'https://github.com/hjferguson/reddit-ML'
  },
  {
    id: 9,
    title: 'Workorder Management System',
    category: 'Desktop Programs',
    videoSrc: '/assets/video/WO_examp.mp4',
    description: 'For this project, we were tasked to make a management system. I chose to manage repair workorders because at the time of writing this, I\'m working part-time as a maintenance worker at a building. It allows for basic workorder creation, search, editing, and deletion all with a simple UI.',
    techStack: 'Python (Tkinter/Sqlite3)',
    githubLink: 'https://github.com/hjferguson/workorderManagementSystem'
  },
  {
    id: 10,
    title: 'Minimax Algorithm Tic-Tac-Toe',
    category: 'Desktop Programs',
    videoSrc: '/assets/video/TTT_examp.mp4',
    description: 'For this project, my team and I developed a Tic-Tac-Toe game using Java. For the GUI, we used Swing to get a better understanding of that package. The menu allows for the user to choose between a human player, a computer player using random inputs, or a computer player using the minimax algorithm. It was our introduction to "AI" and recursive algorithms since we had to write the algorithm ourselves and not use imports.',
    techStack: 'Java (Swing)',
    githubLink: 'https://github.com/OwenB-jng/TicTacToeGame'
  },
  {
    id: 11,
    title: 'Employee Purchase Manager',
    category: 'Desktop Programs',
    imgSrc: '/assets/employee_purchases.jpg',
    description: 'For this project, I was tasked to create a console application for a store that can manage employee purchases. Part of the project requirements were to give different discounts to certain employment types, and to track total purchases versus total discounts. I went above and beyond by using best object-oriented programming practices, which was not a requirement, and not taught in the course for another few weeks. Going this design route allowed for easier code readability and understanding, compared to how others implemented the assignment, by writing all of it in a single python file.',
    techStack: 'Python',
    githubLink: 'https://github.com/hjferguson/Employee_Purchases_Managment_App'
  },
  {
    id: 12,
    title: 'Auto Texting Birthday Bot',
    category: 'Desktop Programs',
    imgSrc: '/assets/birthday_bot.jpg',
    description: 'This was my first ever project (2020). It originally used SMTP to send birthday messages to my friends. It\'s what gave me the confidence to go to school full-time for programming and I\'m glad I did. It was fun to learn/write at the time, but it had its flaws. Like how most mobile carriers don\'t support SMTP by default. So it ended up not being as helpful as planned. So I figured I would re-write it from scratch using my current expertise. Now the program uses the Twilio API, which allows me to text anyone in my dataset without issue. Now the program is a lot more reliable. Successfully running with cron jobs on a Raspberry Pi3!',
    techStack: 'Python, Bash',
    githubLink: 'https://github.com/hjferguson/birth_bot_v2'
  }
];

const categories = [
  'All',
  'Artificial Intelligence / Machine Learning',
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
        <h2>Projects</h2>
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
                <video controls autoplay muted loop className="project-image-video">
                  <source src={project.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={project.imgSrc} alt={project.title} className="project-image" />
              )}
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.techStack}</p>
              <a href={project.githubLink} target="_blank" rel="noreferrer">View Project</a>
              {project.youtubeLink && <a href={project.youtubeLink} target="_blank" rel="noreferrer">Code Walkthrough on Youtube</a>}
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