import React from "react";
import "./ShopItem.scss";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actionCreators";

const Item = props => {
  const { name, price, imageUrl } = props;
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
      <button onClick={() => props.addCart(name)}>Add To Cart</button>
    </div>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => {
  return {
    addCart: item => dispatch(addToCart(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
