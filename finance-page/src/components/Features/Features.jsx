import React from 'react';
import './Features.scss';

export default function Features() {
  return (
    <div className="features">
      <h1>
        Special <span>features<div></div></span>
      </h1>

      <ul className="features__items">
        <li className="features__item">
          <div className="features__circle"></div>
          <p>FDIC insured</p>
        </li>
        <li className="features__item">
          <div className="features__circle"></div>
          <p>No transaction fees. Ever.</p>
        </li>
        <li className="features__item">
          <div className="features__circle"></div>
          <p>2 day early mobile deposit</p>
        </li>
        <li className="features__item">
          <div className="features__circle"></div>
          <p>Financial management tools</p>
        </li>
      </ul>
    </div>
  );
}
