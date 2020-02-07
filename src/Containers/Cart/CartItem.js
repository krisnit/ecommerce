import React from "react";

const CartItem = props => {
  const { name, imageUrl, quantity, price } = props;
  return (
    <div className="cart-item">
      <img alt={name} src={imageUrl} />
      <div className="item-data">
        <div>{name}</div>
        <div>
          {quantity} x ${price}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
