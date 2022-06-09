import React from "react";

function Medtests() {
  return (
    <div className="Medtests text-center ">
      <h1 className="text-3xl font-bold mt-10 mb-10">
        COVID-19 Test and Vaccination
      </h1>
      <div className="tests flex flex-row mt-20">
        <div className="tst1 flex flex-col w-max mx-20">
          <div className="tst2 p-1 flex justify-center items-center rounded-full cursor-pointer">
            <img className="w-40 rounded-full" src="/images/hosp3.jpg" alt="" />
          </div>
          <h1 className="font-medium mt-7">RAPID TEST</h1>
        </div>
        <div className="tst1 flex flex-col w-max mx-20">
          <div className="tst2 p-1 flex justify-center items-center rounded-full cursor-pointer">
            <img className="w-40 rounded-full" src="/images/hosp3.jpg" alt="" />
          </div>
          <h1 className="font-medium mt-7">PCR TEST</h1>
        </div>
        <div className="tst1 flex flex-col w-max mx-20">
          <div className="tst2 p-1 flex justify-center items-center rounded-full cursor-pointer">
            <img className="w-40 rounded-full" src="/images/hosp3.jpg" alt="" />
          </div>
          <h1 className="font-medium mt-7">DRIVE THRU TEST</h1>
        </div>
        <div className="tst1 flex flex-col w-max mx-20">
          <div className="tst2 p-1 flex justify-center items-center rounded-full cursor-pointer">
            <img className="w-40 rounded-full" src="/images/hosp3.jpg" alt="" />
          </div>
          <h1 className="font-medium mt-7">VACCINATION</h1>
        </div>
        <div className="tst1 flex flex-col w-max mx-20">
          <div className="tst2 p-1 flex justify-center items-center rounded-full cursor-pointer">
            <img className="w-40 rounded-full" src="/images/hosp3.jpg" alt="" />
          </div>
          <h1 className="font-medium mt-7">HOME TEST</h1>
        </div>
      </div>
    </div>
  );
}

export default Medtests;
