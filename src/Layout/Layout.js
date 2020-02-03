import React from "react";
import "./Layout.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import "../Components/Menuitems/Menuitems";
import Menuitems from "../Components/Menuitems/Menuitems";
import Shop from "../Containers/Shop/Shop";
import SignIn from "../Components/SignIn/SignIn";
import SignUp from "../Components/SignUp/SignUp";
import Header from "../Components/Header/Header";
import { auth, createUserProfileDocument } from "../firebase/firebase";
import { connect } from "react-redux";
import { setUser } from "../redux/actionCreators";

const Layout = props => {
  console.log(props);
  React.useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        let userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapshot => {
          props.setUser({ id: snapshot.id, ...snapshot.data() });
          // setCurrentUser(() => {
          //   return {
          //     user: { id: snapshot.id, ...snapshot.data() }
          //   };
          // }, []);
        });
      } else {
        // setCurrentUser(() => ({ user: null }), []);
        props.setUser(null);
      }
    });
    return () => {
      unSubscribeFromAuth();
    };
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route path="/shop" exact component={Shop} />
        <Route
          path="/signin"
          exact
          render={() => {
            return props.currentUser ? <Redirect to="/" /> : <SignIn />;
          }}
        />
        <Route
          path="/signup"
          exact
          render={() => {
            return props.currentUser ? <Redirect to="/" /> : <SignUp />;
          }}
        />
        <Route path="/" exact component={Menuitems} />
      </Switch>
    </>
  );
};

const mapStateToProps = state => {
  return { currentUser: state.user.user };
};

const mapDispatchToProps = dispatch => {
  return { setUser: x => dispatch(setUser(x)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
