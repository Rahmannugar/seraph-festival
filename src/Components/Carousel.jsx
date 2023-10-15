import React, { useContext, useEffect } from "react";
import images from "./Slider";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { GlobalContext } from "../Context";
import AOS from "aos";
import "aos/dist/aos.css";

const Carousel = () => {
  const { current, setCurrent, currentIndex, setCurrentIndex } =
    useContext(GlobalContext);

  useEffect(() => {
    AOS.init({
      once: false,
    });
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(images.length - 1);
    } else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === images.length - 1) {
      setCurrent(0);
    } else setCurrent(current + 1);
  };

  return (
    <div>
      <div className="overflow-hidden relative md:hidden">
        <div
          className={`flex transition ease-out duration-40}`}
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {images.map((image) => (
            <img src={image.url} alt={image.id} />
          ))}
        </div>

        <div className="absolute top-0 h-full w-full justify-between flex items-center text-white px-5 text-3xl sm:text-4xl md:text-6xl">
          <button
            onClick={prevSlide}
            data-aos="fade-right"
            data-aos-duration="1000"
            className="duration-200 transition-opacity opacity-70 hover:opacity-100 active:opacity-100"
          >
            <BsFillArrowLeftCircleFill />
          </button>
          <button
            onClick={nextSlide}
            data-aos="fade-left"
            data-aos-duration="1000"
            className="duration-200 transition-opacity opacity-70 hover:opacity-100 active:opacity-100"
          >
            <BsFillArrowRightCircleFill />
          </button>
        </div>

        <div className="bottom-20 md:text-4xl px-10 py-3 text-center text-2xl absolute font-bold text-white bg-purple-400 w-screen">
          <h1> Seraph Festival: 2024</h1>
        </div>

        <div
          className="absolute bottom-6 py-4 flex justify-center gap-3 w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {images.map((image, index) => (
            <div
              onClick={() => {
                setCurrent(index);
              }}
              key={"circle" + index}
              className={`rounded-full w-5 h-5 ${
                index == current ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="hidden md:block md:mt-5">
        <div className="flex flex-col">
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.url}
              alt={image.id}
              className={index === currentIndex ? "" : "hidden"}
            />
          ))}
          <h1 className=" hidden md:block md:bg-purple-400 text-white px-7 py-6 rounded-r-lg font-bold text-5xl  absolute">
            Seraph Festival: 2024
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
