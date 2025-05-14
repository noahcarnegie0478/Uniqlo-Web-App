import React, { useContext } from "react";
import { itemsContext } from "../../Context/ItemProvider";
import { Element } from "react-scroll";
import { useNavigate } from "react-router";
function DisplayBanner({ banner }) {
  const { topic, keywords, getItems, setKeyWords } = useContext(itemsContext);
  const navigate = useNavigate();

  const handleDirect = () => {
    const ValueToString = banner.url.split(" ");
    if (ValueToString.length != 1) {
      setKeyWords(ValueToString.join(" & "));
    } else {
      setKeyWords(banner.url);
    }
    if (
      (keywords == banner.url) |
      (keywords == banner.url.split(" ").join(" & "))
    ) {
      getItems();
      navigate("/listing");
    }
  };

  if (banner?.topic === topic) {
    if (banner?.price === 0) {
      return (
        <Element
          name="firstInsideContainer"
          style={{
            height: "100vh",
            backgroundImage: `url(${banner?.image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="homeContent h-full grid grid-rows-5 gap-4 ">
            <div className="row-start-3 row-end-5 p-40">
              <div className="HomeMainContent">
                <div className="title text-3xl font-semibold py-1 drop-shadow-md ">
                  {" "}
                  <p>{banner?.title}</p>
                </div>
                <div className="description text-xl font-md py-1 drop-shadow-s">
                  {" "}
                  <p>{banner?.description}</p>
                </div>
                <div className="sub-description text-lg font-semibold py-1 drop-shadow-md">
                  {" "}
                  <p>{banner?.sub_decription}</p>
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
        <div
          className="homeContent h-full grid grid-rows-5 gap-4"
          onClick={() => handleDirect()}
        >
          <div className="row-start-3 row-end-5 p-40">
            <div className="HomeMainContent">
              <div className="title text-3xl font-semibold py-1 drop-shadow-md ">
                {" "}
                <p>{banner?.title}</p>
              </div>
              <div className="description text-xl font-md py-1 drop-shadow-s">
                {" "}
                <p>{banner?.description}</p>
              </div>
              <div className="sub-description text-lg font-semibold py-1 drop-shadow-md">
                {" "}
                <p>{banner?.sub_decription}</p>
              </div>
              <div className="price py-2 font-bold text-4xl drop-shadow-sm">
                ${banner?.price}
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default DisplayBanner;
