import React from "react";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="Login flex flex-col justify-center items-center h-screen">
      <div className="container w-96 h-3/4 bg-black bg-opacity-50  rounded-md text-white flex flex-col justify-center items-center p-5">
        <h1 className="text-4xl font-bold mb-9">SignUp</h1>
        <form className="flex flex-col justify-center items-center">
          <div className="form-control  mt-5 p-4 w-full">
            <input type="text" className="w-full" placeholder="Username" required />
          </div>
          <div className="form-control  mt-5 p-4 w-full">
            <input
              type="text"
              className="w-full"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-control mt-5 p-4 w-full">
            <input
              type="password"
              className="w-full"
              placeholder="Password"
              required
            />
          </div>
          <button className="btn w-3/4 m-7 p-2 bg-blue-300 rounded-md">
            Submit
          </button>
          <p className="text mt-3">
            Already have an account?
            <Link to="/login" className="text-blue-300">
              &nbsp;LogIn
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
