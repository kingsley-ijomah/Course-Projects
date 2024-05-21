import React from 'react';
import './Testimonials.scss';
import { StarIcon } from '@heroicons/react/24/solid';

export default function Testimonials() {
  return (
    <div className="testimonials">
        <h1 className='testimonials__title'>Don’t just take our word for it</h1>
        <p className='testimonials__subtitle'>Read all the great things people are saying about us!</p>

        <div className="testimonials__items">
          <div className="testimonials__item testimonials__item--light">
            <h1>Jake B</h1>
            <address>Houston, TX</address>
            <p>
              One of the best things is the 24/7 customer service available by
              phone, email, and live chat. The customer service representatives
              are always friendly and helpful.
            </p>
            <div className="testimonials__ratingWrapper">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>

          <div className="testimonials__item testimonials__item--dark">
            <h1>Jake B</h1>
            <address>Houston, TX</address>
            <p>
              One of the best things is the 24/7 customer service available by
              phone, email, and live chat. The customer service representatives
              are always friendly and helpful.
            </p>
            <div className="testimonials__ratingWrapper">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>

          <div className="testimonials__item testimonials__item--light">
            <h1>Jake B</h1>
            <address>Houston, TX</address>
            <p>
              One of the best things is the 24/7 customer service available by
              phone, email, and live chat. The customer service representatives
              are always friendly and helpful.
            </p>
            <div className="testimonials__ratingWrapper">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>

          <div className="testimonials__item testimonials__item--dark">
            <h1>Jake B</h1>
            <address>Houston, TX</address>
            <p>
              One of the best things is the 24/7 customer service available by
              phone, email, and live chat. The customer service representatives
              are always friendly and helpful.
            </p>
            <div className="testimonials__ratingWrapper">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
        </div>
    </div>
  );
}
