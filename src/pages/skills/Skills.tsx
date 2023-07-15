import './Skills.css'

// images
import imgHtml from '../../assets/images/html.png';
import imgCss from '../../assets/images/CSS3_logo.svg.png';
import imgJs from '../../assets/images/JavaScript-logo.png';
import imgPhp from '../../assets/images/PHP-logo.svg.png';
import imgBootstrap from '../../assets/images/Bootstrap_logo.svg.png';
import imgReact from '../../assets/images/react-logo-1.png';
import imgAngular from '../../assets/images/Angular_full_color_logo.svg.png';
import imgLaravel from '../../assets/images/laravel.png';
import imgTailwind from '../../assets/images/Tailwind_CSS_Logo.svg.png'
import imgC from '../../assets/images/ISO_C++_Logo.svg.png';
import imgJava from '../../assets/images/java-logo-1.png';

const Skills = () => {

    return (
        <div>
             <div className="skill-container pt-5 w-11/12 mx-auto overflow-hidde h-1/2 md:shadow-custom md:rounded-2xl ">
                <h3 className='mx-auto md:text-3xl font-bold bg-blue-600 text-white w-fit h-fit py-3 px-20 shadow-lg rounded-full'>Skills</h3>
                <div className="content w-full flex flex-wrap mt-10 mx-auto justify-around gap-5 pt-3 overflow-auto p-5">
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgHtml} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">HTML</div>
                        <div className="box-description h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>With a solid understanding of HTML, I possess the skills to structure web content efficiently using HTML tags, attributes, and elements. I am adept at creating well-organized and semantically meaningful web pages, ensuring a seamless user experience.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgCss} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">CSS</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>I have a strong command of CSS and the ability to create visually appealing web designs. I excel at implementing responsive layouts, styling elements, and ensuring cross-browser compatibility to deliver engaging user experiences.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgJs} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">JavaScript</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>I possess a strong proficiency in JavaScript and can develop interactive and dynamic web applications. With a solid understanding of concepts like DOM manipulation, event handling, I am able to create engaging user experiences and implement complex functionality.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgPhp} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">PHP</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>I have experience in creating back-end functionality and implementing secure and efficient solutions.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgBootstrap} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">Bootstrap</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>I have experience in Bootstrap and its responsive front-end framework. With the ability to leverage Bootstrap's pre-built components, grid system, and styling utilities, I can efficiently create visually appealing and user-friendly web designs.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgTailwind} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">Tailwind CSS</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>I have a strong proficiency in Tailwind CSS, a utility-first CSS framework. I am experienced in utilizing its extensive class library to quickly and efficiently style web applications. With my Tailwind CSS skills, I can create responsive and visually appealing user interfaces while optimizing development time.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgReact} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">React</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>I have a solid command over React, a popular JavaScript library for building user interfaces. With React, I can efficiently develop interactive and dynamic web applications. My skills include component-based development, state management, and handling data flow. I am adept at leveraging React's virtual DOM and JSX / TSX syntax to create reusable and modular UI components, resulting in scalable and maintainable code.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgAngular} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">Angular</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>During my OJT experience, I gained hands-on experience with Angular, a powerful front-end framework. I am proficient in utilizing Angular to build dynamic and responsive web applications, and have expertise in using Angular Material and other libraries to create intuitive user interfaces with rich features and seamless functionality.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgLaravel} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">Laravel</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>I have a strong command of Laravel, a popular PHP framework, and extensive experience in developing web applications using its elegant syntax and powerful features. With expertise in building secure and scalable applications.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgJava} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">Java</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>While my expertise in Java is still developing, I have a solid understanding of object-oriented programming (OOP) concepts and have created Java programs using frameworks. I am actively working to expand my knowledge and improve my proficiency in Java to develop robust and efficient applications.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgC} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">C++</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>While I have some familiarity with C++, I am currently in the process of expanding my knowledge and honing my skills in the language. I have a basic understanding of C++ concepts and syntax and I am actively working towards improving my proficiency in this area.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;