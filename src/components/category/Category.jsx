import React from "react";
import "../category/Category.scss";
import apple from "../../assets/apple.png";
import xiaomi from "../../assets/xiaomi.png";
import fitbit from "../../assets/fitbit.png";

const CATEGORY_ITEMS = [
  {
    id: 1,
    title: "Apple",
    info: "Apple is one of the most famous smart watches providing company.",
    img: apple,
  },
  {
    id: 2,
    title: "Xiaomi",
    info: "Xiaomi smart watches are produced by MI company.",
    img: xiaomi,
  },
  {
    id: 3,
    title: "FitBit",
    info: "FitBit smart watches are best for there health and fitness features..",
    img: fitbit,
  },
];

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="category__wrapper">
          {CATEGORY_ITEMS.map((item) => (
            <div key={item.id} className="category__item">
              <img src={item.img}/>
              <div>
                <h3>{item.title}</h3>
                <p>{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
