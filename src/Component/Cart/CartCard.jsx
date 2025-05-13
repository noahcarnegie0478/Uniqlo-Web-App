import React from "react";

function CartCard({ cart }) {
  return (
    <div className="cartcard flex gap-4 h-80 mt-10 border-l p-2 hover:bg-gray-200 active:bg-gray-100 ">
      <div className="card-leftside">
        <div className="cartimage ">
          <img src={cart.image_path} alt="image" className="h-70 w-50" />
        </div>
      </div>
      <div className="card-rightside">
        <div className="carttitle">
          <p className="font-bold text-2xl">{cart.title}</p>
        </div>
        <div className="cartid">
          <p className="font-semibold text-xl"> Product_id: {cart.id}</p>
        </div>
        <div className="cartsize">
          <p className="font-md text-md">
            {" "}
            Sizes: {cart.topic} {cart.size}{" "}
          </p>
        </div>
        <div className="cartcolor">
          <p className="font-md text-md"> Color: {cart.color}</p>
        </div>
        <div className="cart-quantity">
          <p className="font-md text-md"> {cart.quatity}</p>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
