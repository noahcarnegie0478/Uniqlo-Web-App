import React, { useContext } from "react";
import { userContext } from "../../Context/userProvider";
import CartCard from "./CartCard";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISH_KEY);
function CartList() {
  const { user, cart } = useContext(userContext);
  console.log(cart);

  const handleCheckout = async () => {
    console.log("clicked");
    const { data } = await axios.post(
      "http://localhost:3000/create-checkout-session",
      {
        item: cart,
      }
    );
    const stripe = await stripePromise;
    console.log("stripePromise: ", stripe);
    console.log("data id: ", data.id);
    const { error } = await stripe.redirectToCheckout({
      sessionId: data.id,
    });

    if (error) {
      console.error("Stripe redirect error:", error);
    }
  };

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
        <div className="checkout-button text-center mt-5 ">
          <button
            className="bg-red-600 py-2 px-4 font-semibold text-white hover:bg-red-500 active:bg-red-300"
            onClick={() => handleCheckout()}
          >
            Checkout{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartList;
