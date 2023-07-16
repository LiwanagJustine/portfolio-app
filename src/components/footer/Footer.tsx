// icons
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaPhone } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <div className="footer w-full dark:bg-slate-950 bg-slate-800 h-fit p-5 flex flex-col items-center">
                <div className="contact-info mb-6">
                    <h3 className="text-slate-500 text-4xl font-bold text-center mb-3">Contact Info</h3>
                    <p className="flex items-center justify-center gap-3 text-slate-300 text-lg mb-1"> <FaPhone />+63-920-7018-305</p>
                    <p className="flex items-center justify-center gap-3 text-slate-300 text-lg"><FaEnvelope/> justine.t.liwanag@gmail.com</p>
                </div>
                <div className="social-media md:mt-5 flex md:flex md:justify-center md:w-full w-full justify-center gap-3.5">
                    <div className="icon">
                        <a href="https://www.facebook.com/justine.liwanag.77/">
                            <FaFacebook className="text-3xl text-slate-300 duration-300 hover:text-blue-600 dark:text-white"/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/justine-liwanag-b2250b25b/">
                            <FaLinkedin className="text-3xl text-slate-300 duration-300 hover:text-blue-600 dark:text-white"/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://github.com/LiwanagJustine">
                            <FaGithub className="text-3xl text-slate-300 duration-300 hover:text-orange-800 dark:text-white"/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="mailto:justine.t.liwanag@gmail.com">
                            <FaEnvelope className="text-3xl text-slate-300 duration-300 hover:text-blue-600 dark:text-white"/>
                        </a>
                    </div>
                </div>
                <div className="cory-rigth mt-5">
                    <p className="flex items-center gap-1 text-slate-300 font-semibold text-md"><FaRegCopyright /> Portfolio | Justine L. 2023</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;