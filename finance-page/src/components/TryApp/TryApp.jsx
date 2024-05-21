import React from 'react'
import './TryApp.scss'
import Container from '../Container/Container'
import appStore from '../../assets/images/app-store.png'
import googlePlay from '../../assets/images/google-play.png'

export default function TryApp() {
  return (
    <div className='tryapp'>
      <Container>
        <h1>Try our mobile app</h1>
        <p>All the features you need, packed into a mobile friendly version. Ready to go, anywhere and everywhere that you go!</p>

        <div className='tryapp__images'>
          <img src={appStore} alt='app store' />
          <img src={googlePlay} alt='google play' />
        </div>
      </Container>
    </div>
  )
}
