import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useState } from "react";
function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
    // if (currentSlide === 0) return setCurrentSlide(3);
    // setCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
    // if (currentSlide == 3) return setCurrentSlide(0);
    // setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="relative w-screen h-[650px]">
        <div
          className="w-[400vw] h-full flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="imageOne"
            lodding="pariority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="imagetwo"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="imagethree"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="imagefour"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
