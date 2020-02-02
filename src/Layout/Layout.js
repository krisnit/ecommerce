import React from "react";
import "./Layout.scss";
import { Route, Switch } from "react-router-dom";
import "../Components/Menuitems/Menuitems";
import Menuitems from "../Components/Menuitems/Menuitems";
import Shop from "../Containers/Shop/Shop";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import Header from "../Components/Header/Header";
import { auth } from "../firebase/firebase";

let initialUser = { user: null };

const Layout = () => {
  const [currentUser, setCurrentUser] = React.useState(initialUser);

  React.useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(() => ({ ...currentUser, user: user }));
        console.log(currentUser);
      } else {
        setCurrentUser(() => ({ ...currentUser, user: null }));
      }
    });
    return () => {
      unSubscribeFromAuth();
    };
  }, []);

  return (
    <>
      <Header {...currentUser} />
      <Switch>
        <Route path="/shop" exact component={Shop} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/" exact component={Menuitems} />
      </Switch>
    </>
  );
};

export default Layout;
