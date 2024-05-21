import React from "react";
import "./GlobalStats.scss";
import bgplane from "../../assets/images/bgplane.jpg";
import half from "../../assets/images/half.png";
import elephant from "../../assets/images/elephant.png";

export default function GlobalStats() {
  return (
    <div className="global__container">
      <div className="bgimg">
        <div className="global__top">
          <img className="global__icon" src={half} alt="" />
          <h4 className="global__header">
            NETCARGO Group is a Global Supplier of Transport and logistic
            Solutions
          </h4>
        </div>
        <div className="global__stats">
          <div className="global__stats-delivery">
            <h4 className="global__number">9800</h4>
            <button className="global__text">Delivered Package</button>
          </div>
          <div className="global__stats-office">
            <h4 className="global__number">30</h4>
            <button className="global__text">Offices Worldwide</button>
          </div>
          <div className="global__stats-orders">
            <h4 className="global__number">5000</h4>
            <button className="global__text">Orders Procured</button>
          </div>
          <div className="global__stats-goods">
            <h4 className="global__number">5200</h4>
            <button className="global__text">Tons of Goods</button>
          </div>
        </div>

        <img src={elephant} alt="" />
      </div>
    </div>
  );
}
