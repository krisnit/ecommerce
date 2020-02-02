import React from "react";
import "./SignIn.scss";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../firebase/firebase";

const SignIn = () => {
  const [value, setValue] = React.useState({
    password: null,
    email: null
  });
  const handleChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="signin">
      <h1>Sign In</h1>
      <form className="signinform">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={value.email}
          autoComplete="email"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          onChange={handleChange}
          value={value.password}
        ></input>
        <button>Login</button>
      </form>
      <p>
        {"If you are a new User then SignUp "}
        <Link to="/signup" className="option">
          here
        </Link>
      </p>
      <div className="signin-google">
        <h3>OR</h3>
        <button onClick={signInWithGoogle}>SignIn with Google</button>
      </div>
    </div>
  );
};

export default SignIn;
