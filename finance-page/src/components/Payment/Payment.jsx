import React from 'react'
import './Payment.scss'
import Container from '../Container/Container';
import visa from '../../assets/images/visa.png';
import mastercard from '../../assets/images/mastercard.png';
import paypal from '../../assets/images/paypal.png';
import americanExpress from '../../assets/images/american-express.png';
import discover from '../../assets/images/discover.png';
import applePay from '../../assets/images/apple-pay.png';

export default function Payment() {
  return (
    <div className='payment'>
      <Container>
        <ul className='payment__images'>
          <li><img src={visa} /></li>
          <li><img src={mastercard} /></li>
          <li><img src={discover} /></li>
          <li><img src={americanExpress} /></li>
          <li><img src={paypal} /></li>
          <li><img src={applePay} /></li>
        </ul>
      </Container>
    </div>
  )
}
