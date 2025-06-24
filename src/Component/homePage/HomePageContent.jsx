import React, { useContext } from "react";
import { Link, Element } from "react-scroll";
import { itemsContext } from "../../Context/ItemProvider";
import DisplayBanner from "./DisplayBanner";

function HomePageContent() {
  const { banners } = useContext(itemsContext);

  return (
    <div>
      <div className="h-screen snap-y snap-mandatory text-white ">
        <Element
          name="section1"
          style={{
            height: "100vh",
            overflow: "scroll",
          }}
        >
          {banners?.map(banner => (
            <DisplayBanner banner={banner} />
          ))}
        </Element>
      </div>
    </div>
  );
}

export default HomePageContent;
