import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase";
import CartIcon from "../../Containers/Cart/CartIcon";
import CartDropdown from "../../Containers/Cart/CartDropdown";

const Header = props => {
  let user = props.currentUser;
  console.log(props);
  return (
    <div className="header">
      <Link to="/" className="logo">
        <Logo />
      </Link>
      {user ? (
        <p className="welcome">Welcome {user.displayName.split(" ")[0]}</p>
      ) : (
        <p></p>
      )}
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {user ? (
          <Link to="/" onClick={() => auth.signOut()} className="option">
            SIGN OUT
          </Link>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon onClick={props.setCartVisibility} />
      </div>

      {props.cartHidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = state => {
  return { currentUser: state.user.user, cartHidden: state.cart.hidden };
};

export default connect(mapStateToProps)(Header);
