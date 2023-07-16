import { SetStateAction, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

// images 
import image1 from '../../assets/images/intern-project/Screenshot5.png'
import image2 from '../../assets/images/intern-project/Screenshot1.png'
import image3 from '../../assets/images/intern-project/Screenshot2.png'
import image4 from '../../assets/images/intern-project/Screenshot3.png'
import image5 from '../../assets/images/intern-project/Screenshot4.png'
import image6 from '../../assets/images/intern-project/Screenshot6.png'
import image7 from '../../assets/images/intern-project/Screenshot7.png'
import image8 from '../../assets/images/intern-project/Screenshot8.png'
import image9 from '../../assets/images/intern-project/Screenshot9.png'
import image10 from '../../assets/images/intern-project/Screenshot10.png'

interface Props{
    onClose: () => void;
}
const ExomView = ({onClose}:Props) => {
    const slides = [
        { url: image1 },
        { url: image2 },
        { url: image3 },
        { url: image4 },
        { url: image5 },
        { url: image6 },
        { url: image7 },
        { url: image8 },
        { url: image9 },
        { url: image10 },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex: SetStateAction<number>) => {
        setCurrentIndex(slideIndex);
      };


  return (
    <div>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">       
            <div className="modal-cont w-11/12 h-11/12 bg-transparent snap-x p-5">   
                <div className='max-w-[1100px] h-[650px] w-full m-auto py-16 px-4 relative group'>
                    <div
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                        className='w-full h-full rounded-2xl bg-center md:bg-cover bg-contain bg-no-repeat duration-500'
                    ></div>
                    {/* Left Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* Right Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                    <div className='flex top-4 justify-center py-2'>
                        {slides.map((_slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'
                        >
                            <RxDotFilled />
                        </div>
                        ))}
                    </div>
                </div>

                <div className=" absolute left-0 bottom-28 btn-close w-full flex justify-center items-center">
                    <button className="text-white bg-slate-600 font-bold uppercase px-20 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300 rounded-full hover:bg-slate-900 shadow-md shadow-slate-400" type="button" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>     
        </div>
        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default ExomView;