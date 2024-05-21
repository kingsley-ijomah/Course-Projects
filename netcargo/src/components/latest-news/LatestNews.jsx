import React from 'react'
import"./LatestNews.scss"
import Image1 from '../../assets/images/newsimage1.png'
import Image2 from '../../assets/images/newsimage2.png'


export default function LatestNews() {
  return (

    <div className='news'>
      <div className='news__header'>
        <h1 className='news__title'>
          OUR LATEST <span className='newsspan'>NEWS</span></h1>
          <p className="news__line">________</p>
          <p className='news__text'>
          Our Shipping and Airfreight services are known worldwide to be one of the most reliable, safest and affordable, because we take pride in delivering the best of logistics services, at the most reasonable prices.
          </p>
      </div>
      <div className='carousel'>
      <div className='news__container'>
        <img className='news__image1' src={Image1} alt=''/>
        <figcaption>by Netcargo Group Sales Team | Rate Sheet</figcaption>
        <h3 className='news__date'>DECE<br></br>MBER</h3>
        <p className='news__text'>Export by Airfreight: Sales Information</p>
      </div>
      <div className='news__container'>
        <img className='news__image2' src={Image2} alt=''/>
        <figcaption>by Marketing Team | Shipping to Nigeria</figcaption>
        <h3 className='news__date'>JULY<br></br>10</h3>
        <p className='news__text'>The Ultimate Guide to Shipping to Nigeria: Everything You Need to Know</p>
      </div>
    </div>
    </div>
  )
}
