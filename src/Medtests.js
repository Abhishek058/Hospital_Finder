import React from "react";

function Medtests() {
  return (
    <div className="Medtests text-center flex flex-col">
      <h1 className="text-3xl font-bold mt-10 mb-5">
        COVID-19 Test and Vaccination
      </h1>
      <div className="tests flex flex-row mt-20">
        <div className="tst1 flex flex-col w-max mx-20">
          <div className="tst2 p-1 flex justify-center items-center rounded-full cursor-pointer">
            <img className="w-40 rounded-full" src="/images/cov1.jpg" alt="" />
          </div>
          <h1 className="font-medium mt-7">RAPID TEST</h1>
        </div>
        <div className="tst1 flex flex-col w-max mx-20">
          <div className="tst2 p-1 flex justify-center items-center rounded-full cursor-pointer">
            <img className="w-40 rounded-full" src="/images/cov2.jpg" alt="" />
          </div>
          <h1 className="font-medium mt-7">PCR TEST</h1>
        </div>
        <div className="tst1 flex flex-col w-max mx-20">
          <div className="tst2 p-1 flex justify-center items-center rounded-full cursor-pointer">
            <img className="w-40 rounded-full" src="/images/cov3.jpg" alt="" />
          </div>
          <h1 className="font-medium mt-7">DRIVE THRU TEST</h1>
        </div>
        <div className="tst1 flex flex-col w-max mx-20">
          <div className="tst2 p-1 flex justify-center items-center rounded-full cursor-pointer">
            <img className="w-40 rounded-full" src="/images/cov4.jpg" alt="" />
          </div>
          <h1 className="font-medium mt-7">VACCINATION</h1>
        </div>
        <div className="tst1 flex flex-col w-max mx-20">
          <div className="tst2 p-1 flex justify-center items-center rounded-full cursor-pointer">
            <img className="w-40 rounded-full" src="/images/cov5.jpg" alt="" />
          </div>
          <h1 className="font-medium mt-7">HOME TEST</h1>
        </div>
      </div>
      <div className="rgbtn my-12 w-36 text-center font-medium self-center rounded-md">
        <a href="https://www.cowin.gov.in/" target="_blank">Register</a>
      </div>
    </div>
  );
}

export default Medtests;
