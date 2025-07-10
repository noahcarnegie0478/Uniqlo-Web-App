import React, { useContext, useState } from "react";
import { userContext } from "../../Context/userProvider";
import CartCard from "./CartCard";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./checkoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISH_KEY);
function CartList() {
  const { cart, user } = useContext(userContext);
  const [guest, setGuest] = useState("");
  const [checkoutForm, setCheckoutForm] = useState(false);

  const handleCheckout = async user => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_PUBLISH_SERVER}create-checkout-session`,
      {
        item: cart,
        user: user,
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
  console.log(checkoutForm);

  return (
    <div className="mt-30 mx-60 border-1 p-10">
      <CheckoutForm
        guest={guest}
        setGuest={setGuest}
        handleCheckout={handleCheckout}
        checkoutForm={checkoutForm}
        setCheckoutForm={setCheckoutForm}
      />
      <div className="title-wishlist">
        <p className="text-4xl font-bold"> {user?.username} Cart list</p>
        <p className="text-gray-800 p-2">({cart.length} items)</p>
      </div>
      <div className="cartcontainer ">
        {cart.length > 0 ? (
          cart.map(cart => <CartCard cart={cart} />)
        ) : (
          <div className="Empty w-full text-center font-bold text-2xl">
            <p>
              Your cart list is empty — start browsing now and add items you’ll
              love!
            </p>
          </div>
        )}
        <div className="checkout-button text-center mt-5 ">
          {cart.length > 0 ? (
            <button
              className="bg-red-600 py-2 px-4 font-semibold text-white hover:bg-red-500 active:bg-red-300"
              onClick={() => {
                if (user == null) {
                  setCheckoutForm(true);
                } else {
                  handleCheckout(user);
                }
              }}
            >
              Checkout{" "}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default CartList;
