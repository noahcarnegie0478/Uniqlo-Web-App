import React, { useContext, useEffect } from "react";
import UpperNavBar from "../Component/homePage/UpperNavBar";
import LowerNavbar from "../Component/homePage/LowerNavbar";
import HomePageContent from "../Component/homePage/HomePageContent";

import Category from "../Component/Category";
import { itemsContext } from "../Context/ItemProvider";
import ImageDisplay from "../Component/DetailPage/ImageDisplay";
import DescriptionDetail from "../Component/DetailPage/DescriptionDetail";
import OptionReview from "../Component/DetailPage/OptionReview";

function DetailPage() {
  const { category, chosenItem } = useContext(itemsContext);

  return (
    <div className="relative min-h-screen bg-gray-500">
      <UpperNavBar />
      {category ? (
        <Category />
      ) : chosenItem != null ? (
        <div className="  out-container h-auto ">
          <div className=" px-40 py-10 flex flex-wrap h-auto ">
            <div className="left-detail bg-red-200 flex-2">
              <ImageDisplay chosenItem={chosenItem} />
              <DescriptionDetail chosenItem={chosenItem} />
            </div>
            <div className="right-detail bg-green-200 flex-1 p-15">
              <OptionReview chosenItem={chosenItem} />
            </div>
          </div>
          <div className="recomendation-side h-100"></div>
        </div>
      ) : (
        <p>Loading</p>
      )}

      <LowerNavbar />
    </div>
  );
}

export default DetailPage;
