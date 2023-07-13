import "./About.css"

// image
import imageUrl from '../../assets/images/liwanag justine0346.jpg'

const About = () => {

    return (
        <div>
            <div className="about-container md:w-full md:h-full md:pt-5">
                <div className="content md:flex md:flex-wrap">
                    <div className="left md:w-1/2 md:flex md:justify-center md:items-center">
                        <img className="md:w-4/6 md:h-4/6 rounded-full" src={imageUrl} alt="" />
                    </div>
                    <div className="right md:w-1/2 md:h-full md:my-auto md:p-14">
                        <h3 className="md:text-6xl md:font-bold md:text-slate-700">About me</h3>
                        <h4 className="md:text-4xl md:font-bold md:text-blue-600 md:mb-3">Frontend Developer</h4>
                        <hr />
                        <p className="md:text-md md:text-slate-600 md:mt-6">Hello and welcome to my web portfolio! I'm a passionate frontend developer with a strong love for creating visually appealing and user-friendly websites. I strive to bring ideas to life through elegant and intuitive user interfaces.My journey as a frontend developer began when I discovered my passion for coding. Since then, I have honed my skills in HTML, CSS, and JavaScript, Bootstrap staying up-to-date with the latest web technologies and best practices. I enjoy the process of turning static designs into dynamic and interactive web experiences.</p>
                        <button className="md:text-lg w-fit h-fit py-2 px-10 bg-blue-600 rounded-full text-white md:mt-5 hover:bg-blue-700">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;