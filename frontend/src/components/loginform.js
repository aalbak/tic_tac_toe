import React, { useState } from "react";
import "./loginform.css";
import Button from "./button";

const LoginForm = () => {
  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const onSuccess = (e) => {
    alert("User signed in");
    console.log(e);
  };

  const onFailure = (e) => {
    alert("User sign in Failed");
    console.log(e);
  };

  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div className="cover">
      <h1>Login</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />

      <div className="login-btn" onClick={popup}>
        Login
      </div>

      <p className="text">Or login using</p>

      <div className="alt-login">
        <div className="facebook"></div>
        <div className="google"></div>
      </div>

      <div className={popupStyle}>
        <h3>Login Failed</h3>
        <p>Username or password incorrect</p>
      </div>
      <Button label="Reusable button" onClick={handleClick} className="my-custom-button" />
    </div>
  );
};

export default LoginForm;
