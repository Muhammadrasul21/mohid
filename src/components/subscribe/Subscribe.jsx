import React from "react";
import "../subscribe/Subscribe.scss";
import subscribeWatch from "../../assets/subscribeWatch.png";
const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        <div className="subscribe__wrapper">
          <div className="subscribe__info">
            <div className="subscribe__desc">
              <p>Subscribe To Newsletter</p>
              <span>Get free guide about smart watches daily. </span>
            </div>
            <div className="subscribe__input">
              <input type="text" placeholder="Enter Email Address" />
              <button className="btn">Subscribe</button>
            </div>
          </div>
          <div className="subscribe__img">
            <img src={subscribeWatch} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
