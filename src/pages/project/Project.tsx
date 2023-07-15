import './Project.css'

import {FaPlusCircle} from 'react-icons/fa';

import imgIEnter from '../../assets/images/ienter-project/ienterPic1.png'
import imgExom from '../../assets/images/intern-project/Screenshot5.png'

const Project = () => {
    return (
        <div>
            <div className="project-container pt-5 md:w-11/12 w-full h-fit mx-auto pb-10 md:px-10 p-5 md:shadow-custom md:rounded-2xl">
                <h3 className='mx-auto md:text-3xl font-bold bg-blue-600 text-white w-fit h-fit py-3 px-20 shadow-lg rounded-full'>Projects</h3>
                <div className="content w-full pt-3 ">
                    <div className="project-box md:flex md:flex-wrap md:justify-between items-center md:mt-10 mt-5">
                        <div className="img-project md:w-1/2 w-full relative cursor-pointer duration-75 hover:brightness-75">
                            <div className="overlay absolute top-0 bottom-0 left-0 right-0 h-full w-full duration-300 opacity-0">
                                <FaPlusCircle className="plus-icon absolute text-5xl text-blue-700 "/>
                            </div>
                            <img src={imgIEnter} alt="" className='z-5 shadow-lg duration-300 rounded'/>
                        </div>
                        <div className="about-project md:pl-20 md:pr-5 md:w-1/2 mt-8">
                            <h4 className='text-2xl text-slate-800 font-bold mb-3 hover:text-blue-700 duration-300 cursor-pointer'>IEnter QR code Monitoring Web based System</h4>
                            <p className='text-md font-semibold text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates explicabo officiis ipsum! Laboriosam veritatis voluptates illo quis architecto, reprehenderit delectus exercitationem officiis labore alias ab ducimus ipsam pariatur nostrum?</p>
                        </div>
                    </div>
                    <div className="project-box md:flex md:flex-wrap md:justify-between md:flex-row-reverse items-center md:mt-10 mt-12">
                        <div className="img-project md:w-1/2 w-full relative cursor-pointer duration-75 hover:brightness-75">
                            <div className="overlay absolute top-0 bottom-0 left-0 right-0 h-full w-full duration-300 opacity-0">
                                <FaPlusCircle className="plus-icon absolute text-5xl text-blue-700 "/>
                            </div>
                            <img src={imgExom} alt="" className='shadow-lg duration-300 hover:brightness-75 cursor-pointer rounded'/>
                        </div>
                        <div className="about-project md:pl-5 md:pr-20 md:w-1/2 mt-8">
                            <h4 className='text-2xl text-slate-800 font-bold mb-3 hover:text-blue-700 duration-300 cursor-pointer'>CICT Extension Office Management System</h4>
                            <p className='text-md font-semibold text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptates explicabo officiis ipsum! Laboriosam veritatis voluptates illo quis architecto, reprehenderit delectus exercitationem officiis labore alias ab ducimus ipsam pariatur nostrum?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;