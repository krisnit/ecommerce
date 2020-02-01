import React from "react";
import "./SignUp.scss";

const initialState = { name: "", address: "", city: "", phone: "", email: "" };

const SignUp = () => {
  const [details, setDetails] = React.useState(initialState);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(details);
  };
  const handleChange = e => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <div className="signup">
      <h1>SignUp</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={details.name}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={details.address}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          onChange={handleChange}
          value={details.city}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          value={details.phone}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={details.email}
        />
        <button>SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
