import React from "react";

function Footer() {
  return (
    <div className="Footer h-64 flex">
      <div className="info flex flex-col">
        <div className="imgdiv flex flex-row pt-20 pl-20">
          <img className="w-7 h-7 mx-2" src="/images/hosp9.png" alt="logo" />
          <h1 className="text-xl font-bold text-white">IndiHospitality</h1>
        </div>
        <p className="mt-3 pl-24 text-white">Excellent service by providing the <br />safety and security of patients</p>
        <div className="flex flex-row mt-5 pl-24">
            <img className="m-3 w-8" src="/images/linkdin.png" alt="" />
            <img className="m-3 w-8" src="/images/pharm.png" alt="" />
        </div>
      </div>
      <div className="pages ml-56 mt-16 text-white">
      <div className="footlink flex text-center space-x-16 font-medium text-lg m-7">
        <a href="#">Home</a>
        <a href="#">Privacy</a>
        <a href="#">Services</a>
        <a href="#">Pharmacy</a>
      </div>
      <div className="footlink flex text-center space-x-16 font-medium text-lg m-7">
        <a href="#">Facility</a>
        <a href="#">About Us</a>
        <a href="#">Locations</a>
        <a href="#">Terms & Condi.</a>
      </div>
      </div>
    </div>
  );
}

export default Footer;
