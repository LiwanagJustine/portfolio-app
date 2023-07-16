import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="contact-container h-fit pb-10">
                <h3 className='mx-auto md:text-2xl font-bold bg-blue-600 text-white w-fit h-fit py-3 px-20 shadow-lg rounded-full mt-3 mb-5'>Contact</h3>
                <div className="contact-content w-11/12 md:flex md:flex-row flex flex-col h-fit shadow-xl gap-5 bg-slate-50 dark:shadow-slate-600 dark:shadow-lg mx-auto md:rounded-xl rounded-md p-3 md:p-0 ">
                    <div className="contact-cont md:w-1/2 md:p-12 p-5">
                        <h4 className='text-center md:text-left text-slate-700 font-bold text-4xl mb-4'>Message Me!</h4>
                        <form action="" className="form flex flex-col gap-5">
                            <input className='rounded border-none shadow-lg p-3 pl-5 ' type="text" id='name' name='name' placeholder='Name' required/>
                            <input className='rounded border-none shadow-lg p-3 pl-5' type="email" id='email' name='email' placeholder='Email' required/>
                            <textarea className='rounded border-none shadow-lg p-3 pl-5' name="message" id="message" placeholder='Message' cols={50} rows={4}></textarea>               
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