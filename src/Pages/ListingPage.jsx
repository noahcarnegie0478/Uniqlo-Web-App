import React from "react";
import Items from "../Component/ListingPage/Items";
import UpperNavBar from "../Component/homePage/UpperNavBar";
import LowerNavbar from "../Component/homePage/LowerNavbar";
import { Element } from "react-scroll";
import Filter from "../Component/ListingPage/filter";
import Sort from "../Component/ListingPage/Sort";

function ListingPage() {
  return (
    <div className="bg-red-200 h-screen">
      <UpperNavBar />

      <div className="content-listing grid grid-rows-4 bg-white h-3/4 snap-y snap-mandatory ">
        <Element
          name="section1"
          style={{
            height: "100vh",
            overflow: "scroll",
          }}
        >
          <Element>
            <div className="h-50 bg-white"></div>
          </Element>
          <Element>
            <div className="flex justify-between items-center px-50 border-1 ">
              <Filter />
              <Sort />
            </div>
          </Element>
          <Element>
            <Items />
          </Element>
        </Element>
      </div>

      <LowerNavbar />
    </div>
  );
}

export default ListingPage;
