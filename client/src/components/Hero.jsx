import { useState } from "react";

import { Carousel } from "@material-tailwind/react";
 
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

import { RxDotFilled } from 'react-icons/rx';

export default function Hero() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFristSlide = currentIndex === 0;
    const newIndex = isFristSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
    
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    
  };

  return (

      <div className="max-w-[2000px] h-[780px] w-full m-auto py-0 px-0 
      relative group">
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
        className="w-full h-full rounded-2xl bg-center 
        bg-cover duration-500">
          {/* indicator */}
        <div className="absolute bottom-10 left-0 right-0 z-[2] mx-[15%] 
        mb-4 flex list-none justify-center p-0">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} 
            onClick={() => goToSlide(slideIndex)} 
            className="text-2xl cursor-pointer">
              <RxDotFilled className="mx-[3px] box-content h-[3px] 
              w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] 
              border-solid border-transparent bg-white bg-clip-padding 
              p-0 -indent-[999px] opacity-50 transition-opacity 
              duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] 
              motion-reduce:transition-none"
              />
            </div>
          ))}
        </div>

        </div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]
        left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%]
        right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        

      </div>

  );
}