import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
      <p className='footer__pending'>You have 4 pending tasks</p>
      <button className='footer__clear'>Clear All</button>
    </div>
  )
}
