import React from "react";

function Header() {
  return (
    <div className="header flex flex-row p-5 bg-gray-100">
      <div className="imgdiv flex flex-row mx-7">
        <img className="w-7 h-7 mx-2" src="/images/hosp9.png" alt="logo" />
        <h1 className="text-xl font-bold">IndiHospitality</h1>
      </div>
      <div className="text-center linkdiv space-x-7 w-9/12 font-medium text-lg">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Pharmacy</a>
      </div>
      <div className="LiBtn mx-10 w-36 text-center font-medium self-center">
        LogIn
      </div>
    </div>
  );
}

export default Header;
