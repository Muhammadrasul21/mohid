import React from "react";
import "../product/Product.scss";
import { FaStar } from "react-icons/fa";
import appleSmart from "../../assets/appleSmart.png";

const PRODUCTS = [
  {
    id: 1,
    title: "Apple Smart I",
    price: "$300.00",
    info: "$255.00",
    img: appleSmart,
  },
  {
    id: 2,
    title: "Apple Smart II",
    price: "$350.00",
    info: "$295.00",
    img: appleSmart,
  },
  {
    id: 3,
    title: "Apple Smart III",
    price: "$400.00",
    info: "$355.00",
    img: appleSmart,
  },
  {
    id: 4,
    title: "Apple Smart IV",
    price: "$450.00",
    info: "$395.00",
    img: appleSmart,
  },
  {
    id: 5,
    title: "Apple Smart V",
    price: "$500.00",
    info: "$455.00",
    img: appleSmart,
  },
  {
    id: 6,
    title: "Apple Smart VI",
    price: "$550.00",
    info: "$505.00",
    img: appleSmart,
  },
];

const ProductCard = ({ item }) => (
  <div className="product__card">
    <div className="product__img">
      <img src={item.img} alt={item.title} />
    </div>
    <div className="product__info">
      <p>{item.title}</p>
      <div className="product__rating">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
      <div className="product__price">
        <del>{item.price}</del> <p>{item.info}</p>
      </div>
    </div>
  </div>
);

const Product = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="product__title">
          <p>Find your favourite smart watch.</p>
          <span>Our Latest Products</span>
        </div>
        <div className="product__wrapper">
          {PRODUCTS.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <button className="btn prdBtn">View More</button>
      </div>
    </div>
  );
};

export default Product;
