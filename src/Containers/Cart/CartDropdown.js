import React from "react";
import "./CartDropdown.scss";
import { connect } from "react-redux";

const CartDropdown = props => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {Object.entries(props.data).map(name => (
          <>
            <div>{name[0]}</div>
            <div>{name[1]}</div>
          </>
        ))}
      </div>
      <button>Go To CheckOut</button>
    </div>
  );
};
const mapStateToProps = state => ({ data: state.cart.totalCount });
export default connect(mapStateToProps)(CartDropdown);
