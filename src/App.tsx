

import { useEffect, useState } from 'react';
import './App.css'

// components 
import Header from './components/header/Header'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Skills from './pages/skills/Skills';
import Project from './pages/project/Project';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';
import Loading from './components/loading/Loading';
// import DarkMode from './components/buttons/DarkMode'


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Check if dark mode is already set in local storage
    const isDarkModeSet = localStorage.getItem('isDarkMode');
    setIsDarkMode(isDarkModeSet === 'true');

    // Simulate content loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('isDarkMode', newDarkMode.toString());
    document.body.classList.toggle('bg-slate-800', newDarkMode);
  };

  useEffect(() => {
    // Apply the 'bg-slate-800' class based on the dark mode preference
    document.body.classList.toggle('bg-slate-800', isDarkMode);
  }, [isDarkMode]);

  // if (isLoading) {
  //   // Show loading indicator here, e.g., a spinner or a message
  //   return <div>Loading...</div>;
  // }

  return (
    <>
    {isLoading === true ? <Loading /> : 
    <div>
      <header className={isDarkMode === true ? "header w-full z-30 dark fixed" : "header w-full z-30 fixed"}>
        <Header darkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </header>
      <div className={isDarkMode === true ? "container mx-auto w-full dark" : "container w-full mx-auto"}>
        <section className="home-cont w-full pt-24 mx-auto dark:bg-slate-800 z-0" id='home'>
          <Home/>
        </section>
        <section className="about-cont w-full pt-24 z-0 dark:bg-slate-800 " id='about'>
          <About/>
        </section>
        <section className="skill-cont pt-24 z-0 dark:bg-slate-800 " id="skills">
          <Skills />
        </section>
        <section className="project-cont pt-24 z-0 dark:bg-slate-800 " id="projects">
          <Project />
        </section>
        <section className="contact-cont pt-24 z-0 dark:bg-slate-800 " id="contact">
          <Contact />
        </section>
        <section className="footer dark:bg-slate-950">
          <Footer />
        </section>
      </div>
    </div>
} 
    </>
  )
}

export default App
