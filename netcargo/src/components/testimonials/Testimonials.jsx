import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.scss";

import wontra from "../../assets/images/wontra.jpg";
import meykaya from "../../assets/images/meykaya.jpg";
import nigeria from "../../assets/images/shipping-nigeria.jpg";
import dhl from "../../assets/images/dhl.jpg";
import zhymma from "../../assets/images/zhymma.jpg";

import test0 from "../../assets/images/test-slide0.jpg";
import test1 from "../../assets/images/test-slide1.jpg";
import test2 from "../../assets/images/test-slide2.jpg";

const slidesData = [
  {
    image: test0,
    text: "These guys are just the coolest company ever! They were aware of our transported for road and tail well as complex transport services",
    name: "Magdelena Donowan",
    jobtitle: "CFD Engineer",
  },
  {
    image: test1,
    text: "These guys are just the coolest company ever! They were aware of our transported for road and tail well as complex transport services",
    name: "Magdelena Donowan",
    jobtitle: "CFD Engineer",
  },
  {
    image: test2,
    text: "These guys are just the coolest company ever! They were aware of our transported for road and tail well as complex transport services",
    name: "Magdelena Donowan",
    jobtitle: "CFD Engineer",
  },
];

export default function Testimonials() {
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
    <>
      <div className="logistics">
        <div className="logistics__logo">
          <img src={wontra} alt="" width={150} />
          <img src={meykaya} alt="" width={150} />
          <img src={nigeria} alt="" width={150} />
          <img src={dhl} alt="" width={150} />
          <img src={zhymma} alt="" width={150} />
        </div>
      </div>

      <div className="testimonials">
        <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <div key={index} className="testimonial__slide">
              <img src={slide.image} alt="" className="testimonial__image" />
              <div className="testimonial__content">
                <p className="testimonial__text">{slide.text}</p>
                <p className="testimonial__name">{slide.name}</p>
                <p className="testimonial__jobtitle">{slide.jobtitle}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
