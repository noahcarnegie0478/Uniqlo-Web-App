import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import "boxicons";
import { itemsContext } from "../../Context/ItemProvider";

function UpperNavBar() {
  const { setTopic } = useContext(itemsContext);
  const ClickTopic = topic => {
    setTopic(topic);
  };
  return (
    <div className="px-20 fixed w-full">
      <div className="nav-bar-container font-md grid grid-cols-3 gap-4 h-20  ">
        <div className="logo w-25 ">
          <img src={logo} alt="" />
        </div>
        <div className="topic h-20 flex justify-between items-center text-xl ">
          {/* REVIEW - from line 20 to 40, the repetitive code can be removed by implementing a functional component*/}
          <div
            className="men w-1/3 p-5 text-center hover:border-b-2 hover:font-bold"
            onClick={() => ClickTopic("Men")}
          >
            {" "}
            <p className="">MEN</p>{" "}
          </div>
          <div
            className="Women w-1/3 p-5 text-center hover:border-b-2 hover:font-bold"
            onClick={() => ClickTopic("Women")}
          >
            {" "}
            <p>WOMEN</p>
          </div>
          <div
            className="kid w-1/3 p-5 text-center hover:border-b-2 hover:font-bold"
            onClick={() => ClickTopic("Kid")}
          >
            {" "}
            <p>KID</p>
          </div>
        </div>

        <div className="support  h-20 flex justify-end gap-10 items-center ">
          <div className="language ">
            {" "}
            <box-icon
              name="globe"
              color="#fff"
              className="hover:pb-1"
            ></box-icon>
          </div>
          <div className="favourite">
            {" "}
            <box-icon
              name="heart"
              color="#fff"
              className="hover:pb-1"
            ></box-icon>
          </div>
          <div className="cart">
            {" "}
            <box-icon
              name="cart"
              color="#fff"
              className="hover:pb-1"
            ></box-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpperNavBar;
