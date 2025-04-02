import React, { useContext, useEffect, useState } from "react";
import { Link, Element } from "react-scroll";
import { itemsContext } from "../../Context/ItemProvider";

function HomePageContent() {
  const { banners, topic } = useContext(itemsContext);
  // REVIEW - The below functional component can be separated from the parent functional component. Avoid declaring functional components/functions in a function/functional component unless it's more maintainable to do so
  function DisplayBanner(banner) {
    if (banner.topic === topic) {
      if (banner.price === 0) {
        return (
          <Element
            name="firstInsideContainer"
            style={{
              height: "100vh",
              backgroundImage: `url(${banner.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="homeContent h-full grid grid-rows-5 gap-4">
              <div className="row-start-3 row-end-5 p-40">
                <div className="HomeMainContent">
                  <div className="title text-3xl font-semibold py-1 drop-shadow-md ">
                    {" "}
                    <p>{banner.title}</p>
                  </div>
                  <div className="description text-xl font-md py-1 drop-shadow-s">
                    {" "}
                    <p>{banner.description}</p>
                  </div>
                  <div className="sub-description text-lg font-semibold py-1 drop-shadow-md">
                    {" "}
                    <p>{banner.sub_decription}</p>
                  </div>
                </div>
              </div>
            </div>
          </Element>
        );
      }
      return (
        <Element
          name="firstInsideContainer"
          style={{
            height: "100vh",
            backgroundImage: `url(${banner.image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="homeContent h-full grid grid-rows-5 gap-4">
            <div className="row-start-3 row-end-5 p-40">
              <div className="HomeMainContent">
                <div className="title text-3xl font-semibold py-1 drop-shadow-md ">
                  {" "}
                  <p>{banner.title}</p>
                </div>
                <div className="description text-xl font-md py-1 drop-shadow-s">
                  {" "}
                  <p>{banner.description}</p>
                </div>
                <div className="sub-description text-lg font-semibold py-1 drop-shadow-md">
                  {" "}
                  <p>{banner.sub_decription}</p>
                </div>
                <div className="price py-2 font-bold text-4xl drop-shadow-sm">
                  ${banner.price}
                </div>
              </div>
            </div>
          </div>
        </Element>
      );
    }
  }
  return (
    <div>
      <div className="h-screen snap-y snap-mandatory">
        <Element
          name="section1"
          style={{
            height: "100vh",
            overflow: "scroll",
          }}
        >
          {banners?.map((banner, index) => (
            <React.Fragment key={index}>{DisplayBanner(banner)}</React.Fragment>
          ))}
        </Element>
      </div>
    </div>
  );
}

export default HomePageContent;
