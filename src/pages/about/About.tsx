import "./About.css"

// image
import imageUrl from '../../assets/images/liwanag justine0346.jpg'
import { useState } from "react";

const About = () => {

    const [btnClick, setBtnClick] = useState(false);

    return (
        <div>
            <div className="about-container md:w-full md:h-full md:pt-5 w-11/12 mx-auto pt-20 h-fit">
                <div className="content md:flex md:flex-wrap shadow-custom h-fit p-5 rounded-2xl">
                    <div className="left md:w-1/2 md:flex md:justify-center md:items-center hidden">
                        <img className="w-4/6 h-4/6 rounded-full" src={imageUrl} alt="" />
                    </div>
                    <div className="right md:w-1/2 md:h-full md:p-14 h-fit my-auto">
                        <h3 className="md:text-6xl font-bold text-slate-700 text-5xl">About me</h3>
                        <h4 className="md:text-4xl font-bold text-blue-600 md:mb-3 text-3xl mb-2">Frontend Developer</h4>
                        <hr />
                        <p className={btnClick === true ? "md:text-md text-slate-600 md:mt-6 h-fit mt-3 text-md" : "md:text-md text-slate-600 md:mt-6 h-48 overflow-hidden mt-3 md:h-24 md:overflow-hidden"}>Hello and welcome to my web portfolio! I'm a passionate frontend developer with a strong love for creating visually appealing and user-friendly websites. I strive to bring ideas to life through elegant and intuitive user interfaces.My journey as a frontend developer began when I discovered my passion for coding. Since then, I have honed my skills in HTML, CSS, and JavaScript, Bootstrap staying up-to-date with the latest web technologies and best practices. I enjoy the process of turning static designs into dynamic and interactive web experiences.</p>
                        <button className="md:text-lg w-fit h-fit py-2 px-10 bg-blue-600 rounded-full text-white md:mt-5 mt-5 mx-auto hover:bg-blue-700" onClick={() => setBtnClick(true)}>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;