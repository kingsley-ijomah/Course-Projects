import React from 'react'
import './Hero.scss'
import heroImage from '../../assets/images/hero-image.png'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className='hero__discount'>20% Discount for 1 Month Subscription</div>
        <h1 className='hero__title'>Your <span>Money</span> at Your Fingertips</h1>
        <p className='hero__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        <div className='hero__cta'>
          <button className='hero__cta--light'>Get Started</button>
          <button className='hero__cta--dark'>More Details</button>
        </div>
        <ul className='hero__numbers'>
          <li>
            <h2 className='hero__number-cap'>18m+</h2>
            <p className='hero__number-label'>Happy Customers</p>
          </li>

          <li>
            <h2 className='hero__number-cap'>10+</h2>
            <p className='hero__number-label'>Years of Experience</p>
          </li>

          <li>
            <h2 className='hero__number-cap'>20+</h2>
            <p className='hero__number-label'>Awards Won</p>
          </li>
        </ul>
      </div>

      <div className="hero__image">
        <img src={heroImage} alt="hero" />

        <button className='hero__image--btn'>Grow.Earn.</button>
      </div>
    </div>
  )
}
