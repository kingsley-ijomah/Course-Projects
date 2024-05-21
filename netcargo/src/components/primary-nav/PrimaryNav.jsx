import React, { useState } from "react";
import "./PrimaryNav.scss";
import hamburger from "../../assets/images/hamburger.png";
// import Button from "../button/Button";
import logo from "../../assets/images/logo.jpeg";
import SecondaryNav from "../secondary-nav/SecondaryNav";

export default function PrimaryNav() {
  return (
    <>
      <div className="primarynav">
        <div className="primarynav__container">
          <input
            type="checkbox"
            class="primarynav__toggle"
            id="hamburger"
            hidden
          />
          <div className="primarynav__lblock">
            <img src={logo} alt="company logo" />
          </div>

          <div className="primarynav__hamburger">
            <label for="hamburger">
              <img src={hamburger} alt="" />
            </label>
          </div>

          <div className="primarynav__links">
            <ul>
              <li>SHIPPING</li>
              <li>ABOUT US</li>
              <li>REQUEST A QUOTE</li>
              <li>SERVICES</li>
              <li>FAQ</li>
              <li>CONTACT US</li>
            </ul>
          </div>

          <div className="primarynav__btn">
            <button>
              <span>Get A Quote</span>
            </button>
          </div>

          <div className="primarynav__contact">
            <SecondaryNav />
          </div>
        </div>
      </div>
    </>
  );
}
