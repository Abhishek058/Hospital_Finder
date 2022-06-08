import React from "react";

function Home() {
  return (
    <div className="Home flex flex-row">
      <div className="leftdiv w-2/3 bg-gray-200 p-16">
        <h1 className="text-7xl font-bold p-5">
          A heritage in care.
          <br />A reputation in excellence.
        </h1>
        <p className="m-7 text-lg text-gray-500">
          IndiHospitality provides excellent servicers by prioritizing the
          security and security of patients. Finding nearest hospital for you.
        </p>
        <div className="playvid flex my-10 mx-7">
          <img className="playimg w-10 h-10" src="/images/play.png" alt="" />
          <p className="p-1 px-3 text-blue-700 text-xl">Watch video about us</p>
        </div>
      </div>
      <div className="flex rightdiv w-1/3 bg-gray-200 justify-end">
        <img className="w-max h-max" src="/images/hosp10.jpg" alt="" />
      </div>
    </div>
  );
}

export default Home;
