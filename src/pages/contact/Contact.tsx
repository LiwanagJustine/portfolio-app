// import { useState } from 'react';
import './Contact.css'  
import emailjs from '@emailjs/browser';

const Contact = () => {

    const sendEmail = (e: any) => {
        e.preventDefault();
    
        const errorDiv = document.querySelector('.error');
        const successDiv = document.querySelector('.success');
    
        emailjs
          .sendForm('service_dd1fg1s', 'template_be9rsov', e.target, 'wq1jftqFOPkZbhtXr')
          .then((response) => {
            successDiv?.classList.remove('hidden');
    
            setTimeout(() => {
              successDiv?.classList.add('hidden');
            }, 3000);

            e.target.reset();
          })
          .catch((error) => {

            errorDiv?.classList.remove('hidden');
    
            setTimeout(() => {
              errorDiv?.classList.add('hidden');
            }, 3000);
            e.target.reset();
          });
      };
    return (
        <div>
            <div className="contact-container h-fit pb-10">
                <h3 className='mx-auto md:text-5xl font-semibold text-blue-600 w-fit h-fit py-3 px-20 text-4xl rounded-full flex items-center mb-5'> <span>{"<"}</span> Contact <span>{"/>"}</span></h3>
                <div className="relative contact-content w-11/12 md:flex md:flex-row flex flex-col h-fit shadow-xl gap-5 bg-slate-50 dark:shadow-slate-600 dark:shadow-lg mx-auto md:rounded-xl rounded-md p-3 md:p-0 ">
                    <div className="contact-cont md:w-1/2 md:p-12 p-5">
                        <div className="error w-full p-3 shadow-md rounded bg-red-500 mb-2 hidden">
                            <p className='text-xl font-semibold text-white'>Send Failed</p>
                        </div>
                        <div className="success w-full mb-2 rounded bg-green-500 shadow-md p-3 hidden">
                            <p className='text-xl font-semibold text-white'>Send Successful</p>
                        </div>
                        <h4 className='text-center md:text-left text-slate-700 font-bold text-4xl mb-4'>Message Me!</h4>
                        <form action="" className="form flex flex-col gap-5" method='post' onSubmit={sendEmail}>
                            <input className='rounded border-none shadow-lg p-3 pl-5 ' type="text" id='name' name='name' placeholder='Name' required />
                            <input className='rounded border-none shadow-lg p-3 pl-5' type="email" id='email' name='email' placeholder='Email' required />
                            <textarea className='rounded border-none shadow-lg p-3 pl-5' name="message" id="message" placeholder='Message' cols={50} rows={4} ></textarea>  
                            <button type='submit' id='submit' className='bg-blue-600 text-white font-semibold text-lg rounded-full mx-auto w-1/2 p-3 hover:bg-blue-700 hover:shadow-lg'>Send</button>             
                        </form>
                    </div>
                    <div className="contact-map md:w-1/2">
                        <div className="map h-full">
                            <iframe className='w-full md:h-full h-72 md:rounded-r-xl shadow-xl brightness-75' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.216225631392!2d120.77724367477211!3d14.869182885649662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339651c2033f54f3%3A0xe30eab3f4b0d5c18!2sSimple%20Garden%2C%20House!5e0!3m2!1sen!2sph!4v1689416156249!5m2!1sen!2sph" width="600" height="450" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;