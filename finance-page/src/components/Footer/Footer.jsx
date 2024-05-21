import React from 'react'
import './Footer.scss'
import Container from '../Container/Container'
import footerLogo from '../../assets/images/footer-logo.png'
import facebook from '../../assets/images/icon/facebook.png'
import instagram from '../../assets/images/icon/instagram.png'
import linkedin from '../../assets/images/icon/linkedin.png'

export default function Footer() {
  return (
    <div className='footer'>
      <Container>
        <div className='footer__container'>
          <div className='footer__lbock'>
            <div className='footer__logo'><img src={footerLogo} alt='logo' /></div>
            <div className='footer__subscribeWrap'>
              <input className='footer__subscribeField' type='text' placeholder='Your email address' />
              <button className='footer__subscribeBtn'>Send Email</button>
            </div>
          </div>

          <div className='footer__rblock'>
            <div className='footer__links'>
              <div className='footer__linksBlock'>
                <h3 className='footer__linksTitle'>About</h3>
                <ul>
                  <li><a href='#'>About us</a></li>
                  <li><a href='#'>Creators</a></li>
                  <li><a href='#'>Philosophy</a></li>
                  <li><a href='#'>Contact us</a></li>
                </ul>
              </div>

              <div className='footer__linksBlock'>
                <h3 className='footer__linksTitle'>Company</h3>
                <ul>
                  <li><a href='#'>Our team</a></li>
                  <li><a href='#'>Partners</a></li>
                  <li><a href='#'>FAQ</a></li>
                  <li><a href='#'>Blog</a></li>
                </ul>
              </div>

              <div className='footer__linksBlock'>
                <h3 className='footer__linksTitle'>Support</h3>
                <ul>
                  <li><a href='#'>Email</a></li>
                  <li><a href='#'>Phone</a></li>
                  <li><a href='#'>Address</a></li>
                </ul>
              </div>

              <div className='footer__linksBlock'>
                <h3 className='footer__linksTitle'>Social Media</h3>
                <ul className='footer__socialWrap'>
                  <li><img src={facebook} alt="facebook" /></li>
                  <li><img src={instagram} alt="instagram" /></li>
                  <li><img src={linkedin} alt="linkedin" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className='footer__copyright'>Copyright and All rights reserved.</div>
      </Container>
    </div>
  )
}
