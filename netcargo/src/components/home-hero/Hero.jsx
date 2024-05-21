import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../home-hero/Hero.scss';

import slide1 from '../../assets/images/hero-slide1.jpg';
import slide2 from '../../assets/images/hero-slide2.jpg';
import slide3 from '../../assets/images/hero-slide3.jpg';

const slidesData = [
  {
    image: slide1,
    header: 'SHARED & DEDICATED WAREHOUSING',
    text: 'Package and store your things effectively and securely to make sure they are safely stowed in storage.',
  },
  {
    image: slide2,
    header: 'WORLDWIDE LOGISTICS SERVICES',
    text: 'Sell your merchandise to your customer globally like an expert. We handle your fulfilment while we perfect your product offering.',
  },
  {
    image: slide3,
    header: 'WE CARE ABOUT OUR CARGO',
    text: 'Dedicated employees, working in 6 regional hubs around the globe, delivering operational and administrative capabilities to facilitate swift handling of cargo.',
  },
];

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <div className="hero">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="hero__slide">
            <img src={slide.image} alt="slide" className="hero__image" />
            <div className="hero__content">
              <h1 className="hero__header">{slide.header}</h1>
              <p className="hero__text">{slide.text}</p>
              <div className="hero__buttons">
                <button className="hero__button">About Us</button>
                <button className="hero__button">Contact</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
