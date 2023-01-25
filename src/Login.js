import React from "react";
import { Link } from "react-router-dom";
function Login() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log(json);
  };
  return (
    <div className="Login flex flex-col justify-center items-center h-screen">
      <div className="container w-96 h-3/5 bg-black bg-opacity-50  rounded-md text-white flex flex-col justify-center items-center p-5">
        <h1 className="text-4xl font-bold mb-9">Log In</h1>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="form-control  mt-5 p-4 w-full">
            <input
              type="text"
              className="w-full"
              id = "email"
              name="email"
              placeholder="Username"
              required
            />
          </div>
          <div className="form-control mt-5 p-4 w-full">
            <input
              type="password"
              className="w-full"
              id = "password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <button className="btn w-3/4 m-7 p-2 bg-blue-300 rounded-md">
            Submit
          </button>
          <p className="text mt-3">
            Don't have an account?
            <Link to="/signup" className="text-blue-300">
              &nbsp;Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
