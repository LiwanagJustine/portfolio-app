

import { useState } from 'react';
import './App.css'

// components 
import Header from './components/header/Header'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Skills from './pages/skills/Skills';
import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
// import DarkMode from './components/buttons/DarkMode'


function App() {

  // const [darkMode, setDarkMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
  };


  return (
    <>
    <div className={isDarkMode === true ? "container w-full dark" : "container w-full"}>
      <header className="header fixed w-full z-50">
        <Header darkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </header>
      <div className="home-cont w-full pt-24 dark:bg-slate-800 z-0" id='home'>
        <Home/>
      </div>
      <div className="about-cont w-full pt-3 z-0 dark:bg-slate-800 " id='about'>
        <About/>
      </div>
      <div className="skill-cont pt-24 z-0 dark:bg-slate-800 " id="skills">
        <Skills />
      </div>
      <div className="project-cont pt-24 z-0 dark:bg-slate-800 " id="projects">
        <Project />
      </div>
      <div className="contact-cont pt-24 z-0 dark:bg-slate-800 " id="contact">
        <Contact />
      </div>
      <div className="footer dark:bg-slate-950">
        <Footer />
      </div>
    </div>

    </>
  )
}

export default App
