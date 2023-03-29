import { useState } from "react";
import React from "react";
import { useRegister } from "../hooks/useRegister";
import { NavLink } from "react-router-dom";
import "./Register.css";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(0);
  const [err, setError] = useState("");
  const [validPassword, setValidPassword] = useState("");  
  // const [confirmPassword, setConfirmPassword] = useState("");
  const { register, error, isLoading } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(name, email, profession, phone, password);
    // console.log(email, password);
  };

  const handleConfirmPassword = (e) => {
    const cpass= e.target.value
    setConfirmPassword(e.target.value);
     if (password !== cpass) {
        setError("Password and Confirm Password do not match! ");
        setValidPassword("");
    } else {
        setError("");
        setValidPassword(password);
    }
};
  return (
    <form className="signupContainer" onSubmit={handleSubmit}>
      <div className="signupContainer">
        <div className="signupMain">
          <h1 className="signupcontent">
            <pre className="uppre1">Welcome Page</pre>
            <pre className="uppre2">One line text</pre>
            <pre className="uppre3">Will be here </pre>
          </h1>
          <p className="updot1">Sign in to continue access pages</p>
          <p className="updont">Already Have An Account ?</p>
          <NavLink to="/signin">
            <button className="btnsignup" disabled={isLoading}>
              Sign In
            </button>
          </NavLink>
        </div>
        <div className="signup">
          <h1 className="rfh1">Register</h1>
          <p className="signupp">Register to continue access pages</p>
          <div className="signupbody">
            <div className="lineinp1">
              <input
                type="text"
                className="rinputBox"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              <input
                type="number"
                className="rinputBox"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />

              <input
                type="password"
                className="rinputBox"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="lineipn2">
              <input
                type="text"
                className="rinputBox"
                placeholder=" Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <input
                type="text"
                className="rinputBox"
                placeholder="Profession"
                onChange={(e) => setProfession(e.target.value)}
                value={profession}
              />

              <input
                type="password"
                className="rinputBox"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>

          <div className="lineinp2">
            <input type="checkbox" name="Term" value="Term" />
            <span className="check1">
              I agree to Term & Condition receiving marketing and promotional
              materials
            </span>
          </div>

          <button className="regsignupbtn" disabled={isLoading}>
            Register
          </button>

          {error && <div className="error">{error}</div>}

          <br />
        </div>
      </div>
    </form>
    // <form className="Register" onSubmit={handleSubmit}>
    //   <h3>Register form</h3>
    //   <label>Name</label>
    //   <input
    //     type="text"
    //     onChange={(e) => setName(e.target.value)}
    //     value={name}
    //   ></input>
    //   <label>email</label>
    //   <input
    //     type="text"
    //     onChange={(e) => setEmail(e.target.value)}
    //     value={email}
    //   ></input>
    //   <label>profession</label>
    //   <input
    //     type="text"
    //     onChange={(e) => setProfession(e.target.value)}
    //     value={profession}
    //   ></input>
    //   <label>phone</label>
    //   <input
    //     type="Number"
    //     onChange={(e) => setPhone(e.target.value)}
    //     value={phone}
    //   ></input>
    //   <label>password</label>
    //   <input
    //     type="password"
    //     onChange={(e) => setPassword(e.target.value)}
    //     value={password}
    //   ></input>
    //   <label>confirm password</label>
    //   <input
    //     type="password"
    //     onChange={(e) => setConfirmPassword(e.target.value)}
    //     value={confirmPassword}
    //   ></input>
    //   <button disabled={isLoading}>Register</button>
    //   {error && <div className="error">{error}</div>}
    // </form>
  );
};

export default RegisterForm;
