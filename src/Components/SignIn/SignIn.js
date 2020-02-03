import React from "react";
import "./SignIn.scss";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase/firebase";
import { withRouter } from "react-router-dom";

const initialState = {
  password: "",
  email: ""
};

const SignIn = props => {
  const [value, setValue] = React.useState(initialState);
  const handleGoogleSignIn = async e => {
    await signInWithGoogle();
    props.history.push("/");
  };
  const handleChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = value;

    try {
      let user = await auth.signInWithEmailAndPassword(email, password);
      setValue(initialState);
      props.history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signin">
      <h1>Sign In</h1>
      <form className="signinform" onSubmit={handleSubmit}>
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
        <button onClick={handleGoogleSignIn}>SignIn with Google</button>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
