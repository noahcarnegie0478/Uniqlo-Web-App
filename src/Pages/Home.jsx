import React from "react";
import UpperNavBar from "../Component/UpperNavBar";
import LowerNavbar from "../Component/LowerNavbar";

function Home() {
  return (
    <div className="text-white bg-yellow-200 h-full ">
      <UpperNavBar />
      <LowerNavbar />
    </div>
  );
}

export default Home;
