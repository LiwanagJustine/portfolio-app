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
             <div className="skill-container pt-5 w-11/12 mx-auto overflow-hidde shadow-custom rounded-2xl">
                <h3 className='mx-auto md:text-3xl font-bold bg-blue-600 text-white w-fit h-fit py-3 px-20 shadow-lg rounded-full'>Skills</h3>
                <div className="content w-full flex flex-wrap mt-10 mx-auto justify-around gap-5 pt-3 overflow-auto p-5">
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgHtml} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">HTML</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>With a solid understanding of HTML, I possess the skills to structure web content efficiently using HTML tags, attributes, and elements. I am adept at creating well-organized and semantically meaningful web pages, ensuring a seamless user experience.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgCss} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">CSS</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>With a solid understanding of HTML, I possess the skills to structure web content efficiently using HTML tags, attributes, and elements. I am adept at creating well-organized and semantically meaningful web pages, ensuring a seamless user experience.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgJs} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">JavaScript</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>With a solid understanding of HTML, I possess the skills to structure web content efficiently using HTML tags, attributes, and elements. I am adept at creating well-organized and semantically meaningful web pages, ensuring a seamless user experience.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgPhp} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">PHP</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>With a solid understanding of HTML, I possess the skills to structure web content efficiently using HTML tags, attributes, and elements. I am adept at creating well-organized and semantically meaningful web pages, ensuring a seamless user experience.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgBootstrap} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">Bootstrap</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>With a solid understanding of HTML, I possess the skills to structure web content efficiently using HTML tags, attributes, and elements. I am adept at creating well-organized and semantically meaningful web pages, ensuring a seamless user experience.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgTailwind} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">Tailwind CSS</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>With a solid understanding of HTML, I possess the skills to structure web content efficiently using HTML tags, attributes, and elements. I am adept at creating well-organized and semantically meaningful web pages, ensuring a seamless user experience.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgReact} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">React</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>With a solid understanding of HTML, I possess the skills to structure web content efficiently using HTML tags, attributes, and elements. I am adept at creating well-organized and semantically meaningful web pages, ensuring a seamless user experience.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgAngular} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">Angular</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>With a solid understanding of HTML, I possess the skills to structure web content efficiently using HTML tags, attributes, and elements. I am adept at creating well-organized and semantically meaningful web pages, ensuring a seamless user experience.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgLaravel} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">Laravel</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>With a solid understanding of HTML, I possess the skills to structure web content efficiently using HTML tags, attributes, and elements. I am adept at creating well-organized and semantically meaningful web pages, ensuring a seamless user experience.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgJava} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">Java</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>With a solid understanding of HTML, I possess the skills to structure web content efficiently using HTML tags, attributes, and elements. I am adept at creating well-organized and semantically meaningful web pages, ensuring a seamless user experience.</p>
                        </div>
                    </div>
                    <div className="box w-72 shadow-custom rounded py-5 pl-6 pr-5">
                        <div className="img ">
                            <img src={imgC} alt="" className="html-img mx-auto" />
                        </div>
                        <div className="title text-center text-3xl font-bold text-slate-700 mt-2 mb-5">C++</div>
                        <div className="box-cont h-32 overflow-auto">
                            <p className='text-slate-500 text-sm'>With a solid understanding of HTML, I possess the skills to structure web content efficiently using HTML tags, attributes, and elements. I am adept at creating well-organized and semantically meaningful web pages, ensuring a seamless user experience.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;