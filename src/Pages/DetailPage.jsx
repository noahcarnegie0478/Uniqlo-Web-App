import React, { useContext, useState, useEffect } from "react";
import UpperNavBar from "../Component/homePage/UpperNavBar";
import LowerNavbar from "../Component/homePage/LowerNavbar";
import HomePageContent from "../Component/homePage/HomePageContent";
import { Element } from "react-scroll";
import Category from "../Component/Category";
import { itemsContext } from "../Context/ItemProvider";
import ImageDisplay from "../Component/DetailPage/LeftSide/ImageDisplay";
import DescriptionDetail from "../Component/DetailPage/LeftSide/DescriptionDetail";
import OptionReview from "../Component/DetailPage/OptionReview";
import FeedbackService from "../Component/DetailPage/LeftSide/Feedback/FeedbackService";
import Breadcrumbs from "../Component/Breadcrumbs/Breadcrumbs";

function DetailPage() {
  const { category, chosenItem } = useContext(itemsContext);
  const [currentColor, setCurrentColor] = useState({});
  const [runForOnce, setRunForOnce] = useState(true);

  useEffect(() => {
    if (chosenItem && runForOnce) {
      setCurrentColor(chosenItem?.colors[0]);
      setRunForOnce(false);
    }
  }, []);
  const accessBreadCrumbs = (name, path) => {};

  return (
    <div className="relative min-h-screen pt-20 ">
      <UpperNavBar />
      <Breadcrumbs />
      {category ? (
        <Category />
      ) : chosenItem != null ? (
        <div className=" out-container h-auto ">
          <div className=" px-40 py-10 flex flex-wrap h-auto ">
            <div className="left-detail  flex-2">
              <Element
                name="section1"
                style={{
                  height: "calc(100vh - 80px)",
                  overflowY: "auto",
                }}
              >
                <ImageDisplay
                  chosenItem={chosenItem}
                  currentColor={currentColor}
                />
                <DescriptionDetail chosenItem={chosenItem} />
                <FeedbackService item_id={chosenItem.item_id} />
              </Element>
            </div>
            <div className="right-detail  flex-1 p-15">
              <OptionReview
                chosenItem={chosenItem}
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
              />
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
