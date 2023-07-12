

import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';

interface Props{
    darkMode?: () => void;
    isDarkMode?: boolean;
}

const Darkmode = ({darkMode, isDarkMode}: Props) => {

    return (
        <div>
            <button className='md:flex md:items-center' onClick={darkMode}> 
            {isDarkMode ? (
                <FaSun className={"md:text-4xl md:w-11 md:h-11 md:p-2 text-3xl cursor-pointer btn-darkmode p-1 duration-300 shadow rounded-full text-yellow-300 bg-white hover:bg-yellow-300 hover:text-white"} />
                ) : (
                <FaMoon className={"md:text-4xl md:w-11 md:h-11 md:p-3 text-3xl p-1 cursor-pointer btn-darkmode duration-300 shadow rounded-full text-white bg-slate-700 hover:bg-slate-900"} />
                )}   
            </button>
        </div>
    );
};

export default Darkmode;