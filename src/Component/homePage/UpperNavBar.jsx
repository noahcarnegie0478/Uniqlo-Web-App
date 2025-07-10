import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import "boxicons";
import { itemsContext } from "../../Context/ItemProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../../Context/userProvider";
import { Link } from "react-router-dom";
import Category from "../Category";

function UpperNavBar() {
  const { setTopic, category } = useContext(itemsContext);
  const { user } = useContext(userContext);
  const location = useLocation();
  const ClickTopic = topic => {
    setTopic(topic);
  };
  const navigate = useNavigate();
  const navigatetoCart = () => {
    if (user !== null) {
      alert("You need to login for further process!");
      navigate("/login");
    } else {
      if (location.pathname !== "/cart") {
        navigate("/cart");
      }
    }
  };
  const navigatetoFavourite = () => {
    if (location.pathname !== "/profile") {
      navigate("/profile");
    }
  };

  return (
    <div
      className={`px-20 z-40 absolute top-0 w-full ${
        category ? "" : "text-white"
      } ${location.pathname !== "/" ? " bg-white" : ""}`}
    >
      <div className="nav-bar-container font-md grid grid-cols-3 gap-4 h-20  ">
        <div className="logo w-25  ">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="">
          {category | (location.pathname == "/") ? (
            <div className="topic h-20 flex justify-between items-center text-xl ">
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
          ) : (
            ""
          )}
        </div>

        <div className="support  h-20 flex justify-end gap-10 items-center ">
          <div className="language ">
            {" "}
            {category | (location.pathname !== "/") ? (
              <box-icon name="globe" className="hover:pb-1"></box-icon>
            ) : (
              <box-icon
                name="globe"
                color="#fff"
                className="hover:pb-1"
              ></box-icon>
            )}
          </div>

          <div className="favourite" onClick={() => navigatetoFavourite()}>
            {category | (location.pathname !== "/") ? (
              <box-icon name="heart" className="hover:pb-1"></box-icon>
            ) : (
              <box-icon
                name="heart"
                color="#fff"
                className="hover:pb-1"
              ></box-icon>
            )}
          </div>

          <div className="cart" onClick={() => navigatetoCart()}>
            {category | (location.pathname !== "/") ? (
              <box-icon name="cart" className="hover:pb-1"></box-icon>
            ) : (
              <box-icon
                name="cart"
                color="#fff"
                className="hover:pb-1"
              ></box-icon>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpperNavBar;
