import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { Bars4Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import './Nav.scss';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeaturesOpen, setFeaturesOpen] = useState(false);
  const [isSolutionOpen, setSolutionOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleFeature = () => {
    setFeaturesOpen(!isFeaturesOpen);
  };

  const toggleSolution = () => {
    setSolutionOpen(!isSolutionOpen);
  };

  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logo} />
      </div>
      <div className="nav__menu" onClick={toggleMenu}>
        <Bars4Icon />
      </div>

      <ul className={`nav__links ${isOpen ? 'open' : ''}`}>
        <li className="nav__link">Home</li>
        <li className="nav__link">
          <div className="nav__link--dropdown" onClick={toggleFeature}>
            <div className="nav__link--dropdown-title">
              <span>Features</span>
              <ChevronDownIcon style={{ width: '20px' }} />
            </div>
            <div
              className={`nav__link--dropdown-content ${
                isFeaturesOpen ? 'open' : ''
              }`}>
              <div className="nav__link--dropdown-item">Item 1</div>
              <div className="nav__link--dropdown-item">Item 2</div>
              <div className="nav__link--dropdown-item">Item 3</div>
            </div>
          </div>
        </li>
        <li className="nav__link">
          <div className="nav__link--dropdown" onClick={toggleSolution}>
            <div className="nav__link--dropdown-title">
              <span>Solutions</span>
              <ChevronDownIcon style={{ width: '20px' }} />
            </div>
            <div
              className={`nav__link--dropdown-content ${
                isSolutionOpen ? 'open' : ''
              }`}>
              <div className="nav__link--dropdown-item">Item 1</div>
              <div className="nav__link--dropdown-item">Item 2</div>
              <div className="nav__link--dropdown-item">Item 3</div>
            </div>
          </div>
        </li>
        <li className="nav__link">Compare</li>
        <li className="nav__link">Pricing</li>
      </ul>
      <button className="nav__cta">Register Now</button>
    </div>
  );
}
