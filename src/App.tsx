

import './App.css'



// components 
import Header from './components/header/Header'
import About from './pages/about/About'
import Home from './pages/home/Home'

function App() {

  return (
    <>
    <div className="container w-full ">
      <header className="header fixed w-full">
        <Header/>
      </header>
      <div className="home-cont w-full pt-24" id='home'>
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
