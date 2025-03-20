import React from "react";
import UpperNavBar from "../Component/UpperNavBar";
import LowerNavbar from "../Component/LowerNavbar";

function Home() {
  return (
    <div className="text-white  relative min-h-screen bg-gray-500">
      <UpperNavBar />
      <LowerNavbar />
    </div>
  );
}

export default Home;
