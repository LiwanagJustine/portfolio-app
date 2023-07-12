

import { useState } from 'react';
import './App.css'

// components 
import Header from './components/header/Header'
import About from './pages/about/About'
import Home from './pages/home/Home'
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
      <header className="header fixed w-full">
        <Header darkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      </header>
      <div className="home-cont w-full pt-24 dark:bg-slate-800" id='home'>
        <Home/>
      </div>
      <div className="about-cont w-full" id='about'>
        <About/>
      </div>
    </div>

    </>
  )
}

export default App
