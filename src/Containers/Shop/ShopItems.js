import React from "react";
import ShopItem from "./ShopItem";
import "./ShopItems.scss";

const ItemsDisplay = ({ items, title }) => {
  return (
    <div className="list-items">
      <h1>{title.toUpperCase()}</h1>
      <div className="items-collection">
        {items.slice(0, 4).map(item => (
          <ShopItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsDisplay;
