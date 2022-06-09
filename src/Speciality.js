import React from "react";

function Speciality() {
  return (
    <div className="Speciality p-10 flex flex-col">
      <h1 className="text-3xl font-bold mb-10">Our Speciality</h1>
      <div className="special flex flex-row">
        <div className="spec1 flex w-1/3 mx-4 my-1 justify-center items-center rounded-lg">
          <img className="p-3" src="/images/hosp8.jpg" alt="" />
        </div>
        <div className="spec1 flex w-1/3 mx-4 my-1 justify-center items-center rounded-lg">
          <img className="p-3" src="/images/hosp7.jpg" alt="" />
        </div>
        <div className="spec1 flex w-1/3 mx-4 my-1 justify-center items-center rounded-lg">
          <img className="p-3" src="/images/hosp3.jpg" alt="" />
        </div>
      </div>
      <br />
      <div className="special flex flex-row">
        <div className="spec1 flex w-1/3 mx-4 my-1 justify-center items-center rounded-lg">
          <img className="p-3" src="/images/hosp4.jpg" alt="" />
        </div>
        <div className="spec1 flex w-1/3 mx-4 my-1 justify-center items-center rounded-lg">
          <img className="p-3" src="/images/hosp5.jpg" alt="" />
        </div>
        <div className="spec1 flex w-1/3 mx-4 my-1 justify-center items-center rounded-lg">
          <img className="p-3" src="/images/hosp6.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Speciality;
