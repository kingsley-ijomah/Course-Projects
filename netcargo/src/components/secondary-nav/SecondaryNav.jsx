import React from "react";
import "./SecondaryNav.scss";
import search from "../../assets/images/search.png";

export default function SecondaryNav() {
  return (
    <>
      <div className="secondarynav">
        <div className="secondarynav__container">
          <h1>Contact Info</h1>

          <div className="secondarynav__links">
            <p>WhatsApp +44 7553 251739</p>
            <p>sales@netcargo.com</p>
            <p>Netcargo Group, Bracknell, UK</p>
          </div>

          <div className="secondarynav__search">
            <label>Search</label>
            <input placeholder="Search" />

            <img src={search} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
