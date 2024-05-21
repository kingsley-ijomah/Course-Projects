import React from "react";
import "./HomeQuote.scss";
import truck from "../../assets/images/truck.png";
import support from "../../assets/images/support.png";
import goods from "../../assets/images/goods.png";
import truck2 from "../../assets/images/truck2.png";

export default function HomeQuote() {
  return (
    <>
      <div className="homequote">
        <div className="homequote__container">
          <div className="homequote__lblock">
            <h2 className="homequote__heading">WHY CHOOSE US?</h2>
            <span className="homequote__redline">________</span>

            <div className="homequote__cards">
              <div className="homequote__cardimages">
                <div className="supply">
                  <img src={truck2} alt="" />
                </div>
                <div className="support">
                  <img src={support} alt="" />
                </div>

                <div className="goods">
                  <img src={truck2} alt="" />
                </div>

                <div className="goods">
                  <img src={goods} alt="" />
                </div>

                {/* {/* <div className="truck">
                  <img src={truck2} alt="" />
                // </div> */}

                {/* <div className="support"> */}

                {/* </div> */}

                {/* <div className="tracking">
                  <img src={truck2} alt="" />
                </div>
                <div className="goods">
                  <img src={goods} alt="" />
                </div>  */}
              </div>
              <div className="homequote__cardtext">
                <div className="homequote__solutiontext">
                  <h2 className="title">Global supply Chain Solutions</h2>
                  <p className="descrip">
                    Global freight solutions - From sending gifts, despatching
                    commercial cargo and selling your merchandise to a worldwide
                    audience, no logistics solution is too small or big for us.
                  </p>
                </div>

                <div className="homequote__supporttext">
                  <h2 className="title">24 Hours - Logistics Support</h2>
                  <p className="descrip">
                    We are where you are for when you need our assistance - On
                    your social platforms, via email or live chats. Our WhatsApp
                    channels are manned 24/7, so we are never far away.
                  </p>
                </div>

                <div className="homequote__trackingtext">
                  <h2 className="title">Mobile Shipment Tracking</h2>
                  <p className="descrip">
                    We Offer intelligent concepts for tracking your order online
                    and via your mobile phone.
                  </p>
                </div>

                <div className="homequote__goodstext">
                  <h2 className="title">Careful Handling of Goods</h2>
                  <p className="descrip">
                    We care about each and every shipment we send overseas and
                    this is reflected through the feedback we receive from our
                    customers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="homequote__rblock">
            <div className="secondary_heading">
              <h2 className="homequote__heading">REQUEST A QUOTE</h2>
              <span className="homequote__redline">________</span>
            </div>
            <div className="homequote__form">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
            <div className="homequote__privacyterms">
              <p>
                Netcargo Group of Companies needs the contact information you
                provide to us to contact you about our products and services.
                You may unsubscribe from these communications at any time. For
                information on how to unsubscribe, as well as our privacy
                practices and commitment to protecting your privacy, please
                review our Privacy Policy.
              </p>
              <div className="privacyapproval">
                <p>protected by reCAPTCHA</p>
                <p>Privacy - Terms</p>
              </div>

              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
