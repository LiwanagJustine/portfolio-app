
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';

const Darkmode = () => {
    return (
        <div>
            <div className="btn-darkmode p-1 duration-300 shadow rounded-full text-white bg-slate-700 hover:bg-slate-900    "> 
                <FaMoon className={"md:text-4xl md:p-2 text-3xl p-1 cursor-pointer"} /> 
            </div>
        </div>
    );
};

export default Darkmode;