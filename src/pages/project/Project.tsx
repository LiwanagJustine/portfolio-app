import './Project.css'
import { useState } from 'react';

import {FaPlusCircle} from 'react-icons/fa';

import imgIEnter from '../../assets/images/ienter-project/ienterPic1.png'
import imgExom from '../../assets/images/intern-project/Screenshot5.png'
import IEnterViewImage from '../../components/modals/IEnterViewImage';
import ExomView from '../../components/modals/ExomView';


const Project = () => {

    const [showIEnter, setShowIEnter] = useState(false)
    const [showExom, setShowExom] = useState(false)

    return (
        <div>
            <div className="project-container pt-5 md:w-11/12 w-full h-fit mx-auto pb-10 md:px-10 p-5 md:shadow-custom md:rounded-2xl">
                <h3 className='mx-auto md:text-3xl font-bold bg-blue-600 text-white w-fit h-fit py-3 px-20 shadow-lg rounded-full'>Projects</h3>
                <div className="content w-full pt-3 ">
                    <div className="project-box md:flex md:flex-wrap md:justify-between items-center md:mt-10 mt-5" >
                        {showIEnter && <IEnterViewImage onClose={() => setShowIEnter(false)}/>}
                        <div className="img-project md:w-1/2 w-full relative cursor-pointer duration-75 hover:brightness-75" onClick={() => setShowIEnter(true)}>
                            <div className="overlay absolute top-0 bottom-0 left-0 right-0 h-full w-full duration-300 opacity-0">
                                <FaPlusCircle className="plus-icon absolute text-5xl text-blue-700 "/>
                            </div>
                            <img src={imgIEnter} alt="" className='z-5 shadow-xl duration-300 rounded'/>
                        </div>
                        <div className="about-project md:pl-20 md:pr-5 md:w-1/2 mt-8 p-5">
                            <h4 className='text-2xl text-slate-800 font-bold mb-3 hover:text-blue-700 duration-300 cursor-pointer'>IEnter QR code Monitoring Web based System</h4>
                            <p className='text-md font-semibold text-slate-500'>The "iEnter: QR Code Monitoring Web-based System" is a capstone project focused on creating a user-friendly web application. The system aims to enhance guest management and streamline the check-in process at GNVHS (Guiguinto National Vocational High School). By using QR codes, the system ensures efficient monitoring of guest arrivals, making the visiting experience smoother and more organized.</p>
                        </div>
                    </div>
                    <div className="project-box md:flex md:flex-wrap md:justify-between md:flex-row-reverse items-center md:mt-10 mt-12">
                        {showExom && <ExomView onClose={() => setShowExom(false)}/>}
                        <div className="img-project md:w-1/2 w-full relative cursor-pointer duration-75 hover:brightness-75" onClick={() => setShowExom(true)}>
                            <div className="overlay absolute top-0 bottom-0 left-0 right-0 h-full w-full duration-300 opacity-0">
                                <FaPlusCircle className="plus-icon absolute text-5xl text-blue-700 "/>
                            </div>
                            <img src={imgExom} alt="" className='shadow-xl duration-300 hover:brightness-75 cursor-pointer rounded'/>
                        </div>
                        <div className="about-project md:pl-5 md:pr-20 md:w-1/2 mt-8 p-5">
                            <h4 className='text-2xl text-slate-800 font-bold mb-3 hover:text-blue-700 duration-300 cursor-pointer'>CICT Extension Office Management System</h4>
                            <p className='text-md font-semibold text-slate-500'>The "CICT Extension Office Management System" is an intern project that aims to develop a comprehensive system for managing the projects and activities of the college's extension office. With a primary focus on serving extension partners, the system will facilitate efficient coordination, communication, and organization of extension initiatives. It will streamline processes, ensuring effective management and successful implementation of projects aimed at benefiting the college and its extension partners.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;