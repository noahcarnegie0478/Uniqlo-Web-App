import React, { useState } from "react";
import Items from "../Component/ListingPage/Items";
import UpperNavBar from "../Component/homePage/UpperNavBar";
import LowerNavbar from "../Component/homePage/LowerNavbar";
import Category from "../Component/Category";
import { Element } from "react-scroll";
import Filter from "../Component/ListingPage/filter";
import Sort from "../Component/ListingPage/Sort";

function ListingPage() {
  const [items, setItems] = useState([]);
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
              <Filter setItems={setItems} />
              <Sort items={items} setItems={setItems} />
            </div>
          </Element>
          <Element>
            <Items items={items} setItems={setItems} />
          </Element>
        </Element>
      </div>

      <LowerNavbar />
    </div>
  );
}

export default ListingPage;
