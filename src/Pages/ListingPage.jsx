import React, { useContext } from "react";
import Items from "../Component/ListingPage/Items";
import UpperNavBar from "../Component/homePage/UpperNavBar";
import LowerNavbar from "../Component/homePage/LowerNavbar";
import { Element } from "react-scroll";
import Filter from "../Component/ListingPage/filter";
import Sort from "../Component/ListingPage/Sort";
import { itemsContext } from "../Context/ItemProvider";
import Category from "../Component/Category";

function ListingPage() {
  const { category, currentCategory } = useContext(itemsContext);

  return (
    <div className="relative min-h-screen ">
      <UpperNavBar />

      {category ? (
        <Category />
      ) : (
        <div className="content-listing  border-1">
          <div className="sticky top-20 flex justify-between items-center px-50 h-20  bg-white">
            <Filter />
            <Sort />
          </div>
          <Element
            name="section1"
            style={{
              height: "calc(100vh - 80px)",
              overflowY: "auto",
            }}
          >
            <Element>
              <div className=" h-auto w-screen  px-40 pb-10 mt-20 ">
                {currentCategory !== null ? (
                  <div className="image-category flex flex-col items-center">
                    <img
                      src={currentCategory.banner_image}
                      alt="category-image"
                    />
                    <h2 className=" mt-5 font-bold uppercase text-3xl">
                      {" "}
                      {currentCategory.tag}: {currentCategory.title}
                    </h2>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Element>
            <Element>
              <Items />
            </Element>

            <Element>
              <div className="footer h-20 w-screen bg-gray-400">
                <p> This is the spare for Footer</p>
              </div>
            </Element>
          </Element>
        </div>
      )}

      <LowerNavbar />
    </div>
  );
}

export default ListingPage;
