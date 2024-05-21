import React from "react";
import PrimaryNav from "../primary-nav/PrimaryNav";
import SecondaryNav from "../secondary-nav/SecondaryNav";
import "./Nav.scss";
import hamburger from "../../assets/images/hamburger.png";
import logo from "../../assets/images/logo.jpeg";
import search1 from "../../assets/images/search1.png";
import search from "../../assets/images/search.svg";

export default function Nav() {
  const [isLinksVisible, setLinksVisible] = React.useState(false);
  return (
    <>
      <div className="nav">
        <div className="nav__primarynav">
          <div className="nav__primary_container">
            <div className="nav__primary_lblock">
              <img src={logo} alt="company logo" />
            </div>
            <div
              className="nav__primary_hamburger"
              onClick={() => setLinksVisible(!isLinksVisible)}
            >
              <img src={hamburger} alt="" />
            </div>
            <div
              className={`nav__primary_links ${
                isLinksVisible ? "" : "nav__hidden"
              }`}
            >
              <ul>
                <li>SHIPPING</li>
                <li>ABOUT US</li>
                <li>REQUEST A QUOTE</li>
                <li>SERVICES</li>
                <li>FAQ</li>
                <li>CONTACT US</li>
              </ul>
            </div>
            <div className="nav__primary_quote">
              <button>Get A Quote</button>
            </div>
          </div>
        </div>
        <div
          className={`nav__secondarynav ${isLinksVisible ? "" : "nav__hidden"}`}
        >
          <div className="nav__secondary_container">
            <h1>Contact Info</h1>
            <div className="nav__secondary_links">
              <p>WhatsApp +44 7553 251739</p>
              <p>sales@netcargo.com</p>
              <p>Netcargo Group, Bracknell, UK</p>
            </div>
            <div className="nav__secondary_search">
              <input className="searchinput" placeholder="Search" />
              <img src={search} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
