import React from "react";
import "./style.css"; // Создайте файл LoginForm.css для стилей формы

const LoginForm = () => {
  return (
    <div className="login-form">
      <h2 className="form-title">Welcome</h2>
      <div className="form-container">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="login-button">Log In</button>
        <button className="google-login-button">Log In with Google</button>
      </div>
    </div>
  );
};

export default LoginForm;
