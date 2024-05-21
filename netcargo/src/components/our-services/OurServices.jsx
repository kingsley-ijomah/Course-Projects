import React from "react";
import "./OurServices.scss";
import Box from "../../assets/images/box.png";

export default function OurServices() {
  return (
    <div className="services">
      <div className="services__header">
        <div className="services__title">
          OUR SPECIAL <span className="titlespan">SERVICES</span>
        </div>
        <p className="services__text">
          Our warehousing services are known nationwide to be one of the most
          reliable, safe and affordable, because we take pride in delivering the
          best of warehousing services, at the most reasonable prices.
        </p>
      </div>
      <div className="services__container">
        <div className="services__cards">
          <img className="services__image" src={Box} alt="" />
          <div className="solution">
            <h4 className="solution__title">Packaging And Storage</h4>
            <p className="solution__text">
              Package and store your things effectively and securely to make
              sure they remain intact in storage.
            </p>
          </div>
        </div>

        <div className="services__cards">
          <img className="services__image" src={Box} alt="" />
          <div className="solution">
            <h4 className="solution__title">Cargo</h4>
            <p className="solution__text">
              Delivery of any type of freight or cargo from one place to another
              quickly. Saving you cost and time.
            </p>
          </div>
        </div>

        <div className="services__cards">
          <img className="services__image" src={Box} alt="" />
          <div className="solution">
            <h4 className="solution__title">
              Online Shopping Delivery Service
            </h4>
            <p className="solution__text">
              Shop online as if you live in UK or Europe. Send us your
              weblinks/lists. Our delivery service takes 2-3 working days to
              anywhere you are in the world.
            </p>
          </div>
        </div>

        <div className="services__cards">
          <img className="services__image" src={Box} alt="" />
          <div className="solution">
            <h4 className="solution__title">Warehousing</h4>
            <p className="solution__text">
              Package and store your things effectively and securely to make
              sure they are safely stowed in storage.
            </p>
          </div>
        </div>

        <div className="services__cards">
          <img className="services__image" src={Box} alt="" />
          <div className="solution">
            <h4 className="solution__title">Door to Door Delivery</h4>
            <p className="solution__text">
              Our expertise in transport management and planning allows us to
              effectively proffer delivery solution.
            </p>
          </div>
        </div>

        <div className="services__cards">
          <img className="services__image" src={Box} alt="" />
          <div className="solution">
            <h4 className="solution__title">Ground Transport</h4>
            <p className="solution__text">
              Ground transportation options for all customers, no matter your
              needs, schedule or destination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
