import React from "react";
import "../header/Header.scss";
import { IoMdWatch } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaUser, FaShoppingCart } from "react-icons/fa";

const NAVBAR__ITEMS = ["Home", "Brands", "Recent product", "Contact", "About"];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar__logo">
            <IoMdWatch /> <b>Mohid</b>
          </div>
          <ul className="navbar__item">
            {NAVBAR__ITEMS.map((link, index) => {
              return (
                <li key={index}>
                  <a href="#">
                    <span>{link}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="navbar__icon">
            <CiSearch /> <FaUser /> <FaShoppingCart />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
