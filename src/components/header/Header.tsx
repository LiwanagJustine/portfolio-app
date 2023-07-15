import { useState } from "react";

import DarkMode from "../buttons/DarkMode";
import Close from "../buttons/Close";

import resumeFile from '../../assets/files/Justine T. Liwanag-Resume.pdf';

interface Props{
    darkMode: () => void;
    isDarkMode: boolean;
}

const Header = ({darkMode, isDarkMode} : Props) => {

    const navigation = ["home", "about", "skills", "projects", "contact"];
    const [selectedNav, setSelectedNav] = useState(0);
    const [clickMenu, setClickMenu] = useState(false);

    return (
        <div>     
            <div className="bg-white dark:bg-slate-800 header w-full grid grid-cols-2 justify-around gap-3 h-fit p-4 items-center md:h-24 md:p-10 md:flex md:justify-between md:px-32 shadow-sm z-50">
                <div className="logo text-4xl font-bold md:w-1/4">
                    <h2 className="font-bold tracking-tight dark:text-white">Justine<span className="text-blue-600">L.</span></h2>
                </div>     
               
                <button className={clickMenu === true ? "hidden justify-end cursor-pointer md:hidden" : "flex justify-end cursor-pointer md:hidden"} onClick={() => setClickMenu(true)}>
                    <svg className="text-3xl" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>  
                </button>
                <div className="close-btn flex justify-end cursor-pointer md:hidden">
                    {clickMenu && <Close onClose={() => setClickMenu(false)}/>}
                </div>
                
               <div className={ clickMenu === true ? "nabvar md:flex md:w-full w-full col-span-2" : "nabvar md:flex md:w-full w-full col-span-2 hidden"}>
                    <nav className=" col-span-2 md:w-1/2 w-full md:block gap-5">
                        <ul className="main-nav w-full text-center font-semibold text-md md:flex md:w-full md:justify-around">
                        {navigation.map((nav, index) => (
                            <li key={index} className="w-full"> 
                                <a href={"#" + nav}>
                                    <button key={index} className={selectedNav === index ? "active w-full text-blue-600 rounded p-2 capitalize" : " w-full text-slate-800 dark:text-white dark:hover:text-blue-700 rounded p-2 duration-300 hover:text-blue-700 capitalize"} onClick={() => setSelectedNav(index)}>{nav}</button>
                                </a>
                            </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="btn md:w-1/2 w-full col-span-2 flex flex-row gap-2 justify-center md:flex md:justify-end md:flex-row items-center md:gap-10">
                        <a href={resumeFile} download={"Justine_T_Liwanag_Resume"}>
                            <button className="md:w-fit w-30 md:px-4 md:text-lg text-sm whitespace-nowrap sm:text-sm p-2 bg-blue-600 text-white font-bold rounded-full hover:shadow-md hover:bg-blue-700 hover:border-blue-600">Download CV</button>
                        </a>
                        <DarkMode darkMode={darkMode} isDarkMode={isDarkMode}/>
                    </div>
                </div>
                
            </div> 
         </div>
    );
};

export default Header;