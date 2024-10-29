import React from "react";
import "../about/About.scss";
import { FaStar } from "react-icons/fa";
import hamza from "../../../public/hamza.png";
import hafiz from "../../../public/hafiz.png";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="product__title">
          <p>Here are our some of the best clients.</p>
          <span>What People Say About Us</span>
        </div>
        <div className="about__wrapper">
          <div className="about__card">
            <img src={hamza} alt="" />
            <div className="about__card__info">
              <span>Hamza Faizi</span>
              <p>
                Dont waste time, just order! This is the best website to
                puschase smart watches.
              </p>
              <div className="about__stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <div className="about__card">
            <img src={hafiz} alt="" />
            <div className="about__card__info">
              <span>Hafiz Huzaifa</span>
              <p>
                Ive been purchasing smart watches of Mohid for a long time. All
                the products are good quality.
              </p>
              <div className="about__stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
