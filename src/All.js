import React from "react";
import Facilities from "./Facilities";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Medtests from "./Medtests";
import Speciality from "./Speciality";

function All() {
  return (
    <div>
      <Header />
      <Home />
      <Facilities />
      <Speciality />
      <Medtests />
      <Footer />
    </div>
  );
}

export default All;
