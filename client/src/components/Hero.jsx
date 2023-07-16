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

      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 
      relative group">
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} 
        className="w-full h-full rounded-2xl bg-center 
        bg-cover duration-500">
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
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} 
            onClick={() => goToSlide(slideIndex)} 
            className="text-2xl cursor-pointer">
              <RxDotFilled />
            </div>
          ))}
        </div>

      </div>

  );
}