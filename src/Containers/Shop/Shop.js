import React, { Component } from "react";
import ShopData from "./ShopData";
import ShopItems from "./ShopItems";

class Shop extends Component {
  state = { collections: ShopData };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...others }) => (
          <ShopItems key={id} {...others} />
        ))}
      </div>
    );
  }
}

export default Shop;
