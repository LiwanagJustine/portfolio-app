
import './Home.css'

// images
import imageHomeBG from "../../assets/images/home-bg-image-2nd.png";

// icons
import { FaFacebook } from "react-icons/fa";
import { FaHandsClapping } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from "react-icons/fa";

const Home = () => {

    return (
        <div id='Home' className="home-container w-full md:pl-32 border-4 h-fit">
            <div className="home w-full md:h-full md:flex">
                <div className="left-cont md:w-1/2 text-center pt-5 p-10">
                    <div className="intro-cont md:mt-32">
                        <h5 className='md:text-2xl md:font-semibold text-blue-500 flex justify-center gap-3'>Hello<span><FaHandsClapping className="text-yellow-300"/></span> I'm</h5>
                        <h2 className='md:text-5xl font-bold text-slate-800 md:mt-2 text-3xl'>Justine Liwanag</h2>
                        <h3 className='md:text-3xl md:font-semibold md:mt-5 mt-1 text-slate-500 font-semibold text-xl'>And I'm a <span className='text-slate-800'>Frontend Web Developer</span></h3>
                        <p className='md:text-md md:font-semibold md:mt-5 mt-3 text-sm text-slate-500'>
                            Welcome to my web portfolio! I'm a passionate frontend developer with a strong love for creating visually appealing and user-friendly websites.
                            <button className=' w-fit ml-2 rounded-full text-blue-500'>
                               Read more...
                            </button>
                        </p>
                    </div>
                    <div className="social-media md:mt-5 flex md:flex md:w-1/4 md:justify-betweenn w-full justify-center gap-3 mt-5">
                        <div className="icon">
                            <FaFacebook className="text-3xl text-slate-800 duration-300 hover:text-blue-600"/>
                        </div>
                        <div className="icon">
                            <FaLinkedin className="text-3xl text-slate-800 duration-300 hover:text-blue-600"/>
                        </div>
                        <div className="icon">
                            <FaGithub className="text-3xl text-slate-800 duration-300 hover:text-orange-800"/>
                        </div>
                        <div className="icon">
                            <FaEnvelope className="text-3xl text-slate-800 duration-300 hover:text-blue-600"/>
                        </div>
                        
                    </div>
                </div>
                <div className="right-cont md:w-1/2 md:h-full">
                    <img className='md:w-full md:h-full' src={imageHomeBG} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;