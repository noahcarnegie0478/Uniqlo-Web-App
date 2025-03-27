import React, { useContext, useState } from "react";
import Items from "../Component/ListingPage/Items";
import UpperNavBar from "../Component/homePage/UpperNavBar";
import LowerNavbar from "../Component/homePage/LowerNavbar";
import { Element } from "react-scroll";
import Filter from "../Component/ListingPage/filter";
import Sort from "../Component/ListingPage/Sort";
import { itemsContext } from "../Context/ItemProvider";
import Category from "../Component/Category";

function ListingPage() {
  const { category } = useContext(itemsContext);
  return (
    <div className="bg-red-200 h-screen">
      <UpperNavBar />

      {category ? (
        <Category />
      ) : (
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
      )}

      <LowerNavbar />
    </div>
  );
}

export default ListingPage;
