import React, { useContext, useState } from "react";
import { userContext } from "../../../Context/userProvider";
import SizesDisplay from "./SizesDisplay";

function CartOption({ item_id, currentSize }) {
  const [cartCount, setCartCount] = useState(0);
  const { user, updateToCart } = useContext(userContext);
  const addToCart = () => {
    // console.log("pressed");

    // neu cart count = 0
    user.length == 0
      ? alert("You need to login before we can process your purchases")
      : updateToCart({
          id: item_id,
          quatity: cartCount == 0 ? 1 : cartCount,
          size: currentSize,
        });
  };
  return (
    <div className="cart-item w-full my-5 ">
      {/* count cart*/}
      <div className="cart-counter grid grid-cols-3 w-2/5 mt-3 text-xl rounded-3xl  text-center  h-auto">
        <span
          className=" text-center rounded-s-3xl py-3 font-semibold bg-gray-200 active:bg-gray-100"
          onClick={() =>
            cartCount <= 0 ? "nothing change" : setCartCount(cartCount - 1)
          }
        >
          {" "}
          -{" "}
        </span>
        <p className="py-3 text-center">{cartCount}</p>
        <span
          className=" py-3 text-center rounded-r-3xl bg-gray-200 active:bg-gray-100"
          onClick={() => setCartCount(cartCount + 1)}
        >
          {" "}
          +{" "}
        </span>
      </div>

      {/* addtoCart cart*/}
      <div className="add-to-cart-btn mt-7 w-full  ">
        <button
          className="text-center w-full  bg-black text-white h-14 rounded-4xl font-light text-xl active:bg-gray-700"
          onClick={() => addToCart()}
        >
          {" "}
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default CartOption;
