import React, { useContext } from "react";
import UpperNavBar from "../Component/homePage/UpperNavBar";
import { itemsContext } from "../Context/ItemProvider";
import Category from "../Component/Category";
import { Link } from "react-router";

function Success() {
  const { category } = useContext(itemsContext);
  return (
    <div className="min-h-screen flex flex-row items-center justify-center">
      <UpperNavBar />
      {category ? (
        <Category />
      ) : (
        <div className="success w-9/10 text-center font-bold text-4xl h-60 py-10 px-50 border   ">
          <p className="">
            Congratulations on your purchase! Your order is confirmed and on its
            way—can’t wait for you to enjoy your new item!
          </p>
          <Link to="/">
            <p className="font-light text-xl text-red-500 mt-2 hover:text-red-600 hover:font-semibold active:text-red-400 ">
              Go back to Home{" "}
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Success;
