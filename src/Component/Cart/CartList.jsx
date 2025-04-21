import React, { useContext } from "react";
import { userContext } from "../../Context/userProvider";
import CartCard from "./CartCard";

function CartList() {
  const { user, cart } = useContext(userContext);
  return (
    <div className="mt-50 bg-green mx-60 border-1 p-10">
      <div className="title-wishlist">
        <p className="text-4xl font-bold"> {user?.username} Cart list</p>
        <p className="text-gray-800 p-2">({user?.cart?.length} items)</p>
      </div>
      <div className="cartcontainer ">
        {cart.length > 0 ? (
          cart.map(cart => <CartCard cart={cart} />)
        ) : (
          <div className="Loading">Loading ...</div>
        )}
      </div>
    </div>
  );
}

export default CartList;
