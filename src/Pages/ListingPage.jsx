import React, { useState } from "react";
import Items from "../Component/ListingPage/Items";
import UpperNavBar from "../Component/homePage/UpperNavBar";
import LowerNavbar from "../Component/homePage/LowerNavbar";
import Category from "../Component/Category";
import { Element } from "react-scroll";
import Filter from "../Component/ListingPage/filter";

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
            <Filter setItems={setItems} />
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
