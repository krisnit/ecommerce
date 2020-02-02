import React from "react";
import "./SignUp.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase";

const initialState = {
  displayName: "",
  password: "",
  confirmPassword: "",
  email: ""
};

const SignUp = () => {
  const [details, setDetails] = React.useState(initialState);
  const handleSubmit = async e => {
    e.preventDefault();
    const { displayName, password, confirmPassword, email } = details;
    if (password !== confirmPassword) return;
    try {
      let { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      setDetails(initialState);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = e => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <div className="signup">
      <h1>SignUp</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          name="displayName"
          onChange={handleChange}
          value={details.displayName}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={details.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={details.password}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={details.confirmPassword}
        />
        {details.password !== details.confirmPassword ? (
          <p className="visible">Passwords Dont Match</p>
        ) : (
          <p className="visible"></p>
        )}
        <button>SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
