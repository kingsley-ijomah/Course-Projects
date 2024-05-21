import React from "react";
import "./NetcargoWelcome.scss";
import plane from "../../assets/images/plane.png";
import boat from "../../assets/images/boat.png";
import truck from "../../assets/images/truck.png";

export default function NetcargoWelcome() {
  return (
    <div>
      <div className="welcome">
        <h3 className="welcome__title">WELCOME TO NETCARGO GROUP</h3>
        <p className="welcome__detail">________</p>
        <p className="welcome__text">Netcargo is more than logistics. </p>
        <p className="welcome__text">
          We can also optimize your packaging, manage your materials sourcing,
          and so much more.
        </p>
      </div>
      <div className="cards">
        <div className="cards__air">
          <img className="plane" src={plane} alt="" width={80}></img>
          <h4 className="cards__header">Air Freight Forwarding</h4>
          <p className="cards__text">
            As a leader in global air freight forwarding, Netcargo excels in
            providing tailored transportation
          </p>
        </div>

        <div className="cards__sea">
          <img className="boat" src={boat} alt="" width={80}></img>
          <h4 className="cards__header">Sea Freight Forwarding</h4>
          <p className="cards__text">
            Sea Freight plays perhaps the most vital role in most transportation
            and supply chain solutions.
          </p>
        </div>

        <div className="cards__road">
          <img className="truck" src={truck} alt="" width={110}></img>
          <h4 className="cards__header">Road Freight Forwarding</h4>
          <p className="cards__text">
            Cargo are transported at some stage of their journey by roads where
            we give you a reassuring presence.
          </p>
        </div>
      </div>
    </div>
  );
}
