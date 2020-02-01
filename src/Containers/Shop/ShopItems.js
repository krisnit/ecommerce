import React from "react";
import ShopItem from "./ShopItem";
import "./ShopItems.scss";

const ItemsDisplay = ({ items, title }) => {
  return (
    <div className="list-items">
      <h1>{title}</h1>
      <div className="items-collection">
        {items.slice(0, 4).map(({ id, ...otherValues }) => (
          <ShopItem key={id} {...otherValues} />
        ))}
      </div>
    </div>
  );
};

export default ItemsDisplay;
