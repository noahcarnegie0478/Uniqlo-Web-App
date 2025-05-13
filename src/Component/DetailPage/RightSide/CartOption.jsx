import React, { useState } from "react";

function CartOption() {
  const [cartCount, setCartCount] = useState(0);
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
        <button className="text-center w-full  bg-black text-white h-14 rounded-4xl font-light text-xl active:bg-gray-700">
          {" "}
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default CartOption;
