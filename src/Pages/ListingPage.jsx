import React from "react";
import Items from "../Component/ListingPage/Items";
import UpperNavBar from "../Component/homePage/UpperNavBar";
import LowerNavbar from "../Component/homePage/LowerNavbar";
import Category from "../Component/Category";

function ListingPage() {
  return (
    <div className="bg-red-200 h-screen text-white">
      <UpperNavBar />

      <div className="content-listing grid grid-rows-4 bg-white h-screen">
        <Items />
      </div>

      {/* <LowerNavbar /> */}
    </div>
  );
}

export default ListingPage;
