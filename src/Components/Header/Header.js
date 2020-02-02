import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase";

const Header = ({ user }) => {
  console.log(user);
  return (
    <div className="header">
      <Link to="/"></Link>
      <Logo className="logo" />
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {user ? (
          <Link to="/signout" onClick={() => auth.signOut()} className="option">
            SIGN OUT
          </Link>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
