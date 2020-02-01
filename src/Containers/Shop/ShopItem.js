import React from "react";
import "./ShopItem.scss";

const Item = ({ id, name, price, imageUrl }) => {
  return (
    <div className="shopitem">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="shopitem-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default Item;
