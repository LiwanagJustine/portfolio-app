
import './Home.css'
import { Typewriter } from 'react-simple-typewriter';

// images
import imageHomeBG from "../../assets/images/home-bg-image-2nd.png";

// icons
import { FaFacebook } from "react-icons/fa";
import { FaHandsClapping } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from "react-icons/fa";

const Home = () => {

    
    const words = ["Frontend Developer", "React Developer", "Bootstrap Developer","Tailwind Css Developer", "Angular Developer","Laravel Developer"];
    
    return (
        <div className="home-container w-full md:pl-32 h-fit">
            <div className="home w-full md:h-full md:flex">
                <div className="left-cont md:w-1/2 md:text-left text-center md:pl-0 pt-5 p-10">
                    <div className="intro-cont md:mt-32">
                        <h5 className='md:text-2xl md:font-semibold text-blue-500 md:flex md:justify-start flex justify-center gap-3'>Hello<span><FaHandsClapping className="text-yellow-300"/></span> I'm</h5>
                        <h2 className='md:text-5xl font-bold text-slate-800 md:mt-2 text-3xl dark:text-white'>Justine Liwanag</h2>
                        <h3 className='md:text-3xl md:font-semibold md:mt-5 mt-1 text-slate-500 font-semibold text-xl dark:text-white'>And I'm a &nbsp;
                            <span className='text-slate-600 font-bold'>
                                <Typewriter
                                    words={words}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle='__'
                                    typeSpeed={100}
                                    deleteSpeed={60}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h3>
                        <p className='md:text-md md:font-semibold md:mt-5 mt-3 text-sm text-slate-500'>
                            Welcome to my web portfolio! I'm a passionate frontend developer with a strong love for creating visually appealing and user-friendly websites.
                            <a href="#about"  className=' w-fit ml-2 rounded-full text-blue-500'>
                                Read more...
                            </a>
                        </p>
                    </div>
                    <div className="social-media md:mt-5 flex md:flex md:justify-normal md:w-full w-full justify-center gap-3.5 mt-5">
                        <div className="icon">
                            <a href="https://www.facebook.com/justine.liwanag.77/">
                                <FaFacebook className="text-3xl text-slate-800 duration-300 hover:text-blue-600 dark:text-white"/>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://www.linkedin.com/in/justine-liwanag-b2250b25b/">
                                <FaLinkedin className="text-3xl text-slate-800 duration-300 hover:text-blue-600 dark:text-white"/>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="https://github.com/LiwanagJustine">
                                <FaGithub className="text-3xl text-slate-800 duration-300 hover:text-orange-800 dark:text-white"/>
                            </a>
                        </div>
                        <div className="icon">
                            <a href="mailto:justine.t.liwanag@gmail.com">
                                <FaEnvelope className="text-3xl text-slate-800 duration-300 hover:text-blue-600 dark:text-white"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="right-cont md:w-1/2 md:h-full">
                    <img className='md:w-full md:h-full md:block' src={imageHomeBG} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Home;