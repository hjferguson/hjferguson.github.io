import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
// import ProjectCategory from './components/ProjectCategory';
// import Contact from './components/Contact';
// import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/projects/:category" element={<ProjectCategory />} />
          {/* <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} /> */} 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
