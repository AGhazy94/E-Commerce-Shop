import React, { useState, useEffect } from "react";
import { IoArrowForwardCircle, IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const carouselData = [
  {
    image: "./src/assets/images/wireless-01.png",
    headline: "50% off your first purchase",
    paragraph:
      "All you have to do is simply log in to your account and you'll get 50% off your first shipping for free, no matter where you are!",
    button: "Shop Now",
  },
  {
    image: " ./src/assets/images/watch-06.png",
    headline: "Smart Watches for You",
    paragraph:
      "Stay connected and track your fitness with our latest collection of cutting-edge smartwatches. Enhance your lifestyle today!",
    button: "Shop Now",
  },
  {
    image: "./src/assets/images/single-sofa-07.png",
    headline: "Experience the Future",
    paragraph:
      "Discover our range of innovative gadgets designed to make your life easier, more efficient, and more enjoyable.",
    button: "Shop Now",
  },
  {
    image: "./src/assets/images/phone-08.png",
    headline: "Unlock the Power of Mobile",
    paragraph:
      "Explore our selection of state-of-the-art smartphones with advanced features to keep you connected and productive on the go.",
    button: "Shop Now",
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselData.length - 1 : prevSlide - 1
    );
  };

  const currentData = carouselData[currentSlide];

  return (
    <div className="lg:h-[560px] md:h-[420px] h-screen w-full mt-10 md:flex-row flex flex-col items-center relative bg-slate-100 group overflow-hidden">
      <div className="lg:w-1/2 lg:p-20 lg:ml-60 md:w-1/2 md:ml-20 ml-5 md:text-left text-center pt-20">
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold">
          {currentData.headline}
        </h1>
        <p className="lg-text-2xl md:text-2xl md:p-0 p-3 md:mt-6 mt-3 text-xl">
          {currentData.paragraph}
        </p>
        <Link to="/shop">
          <button className="lg:mt-6 lg:ml-0 md:my-6 my-6 text-indigo-600 text-2xl rounded-lg">
            {currentData.button}
          </button>
        </Link>
      </div>
      <img
        src={currentData.image}
        alt="image"
        className="lg:w-1/4 lg:h-full md:w-1/4 md:h-full w-1/2 h-full rounded-2xl bg-center bg-cover duration-500"
      ></img>
      <div>
        <IoArrowForwardCircle
          onClick={nextSlide}
          className="hidden group-hover:block text-4xl absolute lg:right-10 md:right-8 sm:right-4 right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
      </div>
      <div>
        <IoArrowBackCircleSharp
          onClick={prevSlide}
          className="hidden group-hover:block text-4xl absolute lg:left-10 md:left-8 sm:left-4 left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Carousel;
