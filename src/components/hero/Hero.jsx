import React from "react";
import "../hero/Hero.scss";
import heroImg from "../../assets/heroImg.png";
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__title">
            <h2>
              Discover <br /> Most Suitable Watches
            </h2>
            <p>
              Find the best, reliable, and cheap smart watches here. We focus on
              product quality. Here you can find smart watches of almost all
              brands. So why you are waiting? Just order now!
            </p>
            <div className="hero__input">
              <IoSearch className="hero__input__icon" />
              <input type="text" placeholder="Find the best brands" />
              <button className="btn">Search</button>
            </div>
          </div>
          <div className="hero__image">
            <img src={heroImg} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
