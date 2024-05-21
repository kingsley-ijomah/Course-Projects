import React from 'react';
import './VirtualCard.scss';
import Container from '../Container/Container';
import card from '../../assets/images/card.png';

export default function VirtualCard() {
  return (
    <div className="virtualcard">
      <Container>
        <div className="virtualcard__container">
          <div className="virtualcard__content">
            <h1>Built-in Physical & Virtual cards</h1>
            <p>
              Protect your identity online by making purchases with your
              personal virtual card.
            </p>
            <button className="virtualcard__compareBtn">Compare</button>
          </div>

          <div className="virtualcard__image">
            <img src={card} alt="card" />
          </div>
        </div>
      </Container>
    </div>
  );
}
