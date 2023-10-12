import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 

const AutoCarousel: React.FC = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
      <h1 className="mt-44 font-semibold text-2xl text-center pr-1 text-white md:font-bold md:text-6xl md:text-left md:pl-32 ">1 Discover Extraordinary <br /> Comfort in Hotels</h1>

      <h1 className="mt-44 font-semibold text-2xl text-center pr-1 text-white md:font-bold md:text-6xl md:text-left md:pl-32 ">2 Discover Extraordinary <br /> Comfort in Hotels</h1>

      <h1 className="mt-44 font-semibold text-2xl text-center pr-1 text-white md:font-bold md:text-6xl md:text-left md:pl-32 ">3 Discover Extraordinary <br /> Comfort in Hotels</h1>

      <h1 className="mt-44 font-semibold text-2xl text-center pr-1 text-white md:font-bold md:text-6xl md:text-left md:pl-32 ">4 Discover Extraordinary <br /> Comfort in Hotels</h1>
      </Slider>
    </div>
  );
};

export default AutoCarousel;
