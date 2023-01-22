import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="Login">
      <div class="container">
        <h1>Log In</h1>
        <form>
          <div class="form-control">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div class="form-control">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button class="btn">Submit</button>
          <p class="text">
            Don't have an account?
            <a href="#">Create Account</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
