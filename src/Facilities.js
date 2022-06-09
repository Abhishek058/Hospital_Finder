import React from "react";

function Facilities() {
  return (
    <div className="facility flex flex-row mx-9 mx-auto my-10 text-center">
      <div className="faci1 flex flex-col w-1/4 h-64 justify-center items-center">
        <div className="flex rounded-full bg-blue-700 justify-center w-max p-3">
          <img className="w-7" src="/images/firstaid.png" alt="" />
        </div>
        <h1 className="font-bold text-white my-5 text-xl">JCI Accredited</h1>
        <p className="font-medium text-gray-300">
          Best safety and security with <br /> JCI Accredited
        </p>
      </div>
      <div className="faci1 flex flex-col w-1/4 h-64 justify-center items-center">
        <div className="flex rounded-full bg-blue-700 justify-center w-max p-3">
          <img className="w-7" src="/images/ambulance.png" alt="" />
        </div>
        <h1 className="font-bold text-white my-5 text-xl">Best Service</h1>
        <p className="font-medium text-gray-300">
        Provide excellent services and <br /> treatment for patients
        </p>
      </div>
      <div className="faci1 flex flex-col w-1/4 h-64 justify-center items-center">
        <div className="flex rounded-full bg-blue-700 justify-center w-max p-3">
          <img className="w-7" src="/images/band-aid.png" alt="" />
        </div>
        <h1 className="font-bold text-white my-5 text-xl">Affordable</h1>
        <p className="font-medium text-gray-300">
          Treatment recommendation <br /> to the customers through
        </p>
      </div>
      <div className="faci1 flex flex-col w-1/4 h-64 justify-center items-center">
        <div className="flex rounded-full bg-blue-700 justify-center w-max p-3">
          <img className="w-7" src="/images/blood-tube.png" alt="" />
        </div>
        <h1 className="font-bold text-white my-5 text-xl">Top Facilities</h1>
        <p className="font-medium text-gray-300">
          Provide excellent services and <br /> treatment for patients
        </p>
      </div>
    </div>
  );
}

export default Facilities;
