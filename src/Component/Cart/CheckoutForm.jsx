import React from "react";

function CheckoutForm({
  guest,
  setGuest,
  handleCheckout,
  checkoutForm,
  setCheckoutForm,
}) {
  const checkValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(guest)) {
      alert("Your email is not valid, please try again");
    } else {
      setCheckoutForm(false);
      handleCheckout(guest);
    }
  };
  return (
    <div
      className={`${
        checkoutForm ? "" : "hidden"
      } absolute top-0 left-0 h-screen w-screen bg-black/70 `}
    >
      <div
        action="checkoutForm"
        className=" w-full flex flex-col items-center justify-center h-full  gap-3 relative "
      >
        <button
          className="absolute top-20 right-0 bg-red-500 px-10 py-3 text-white font-bold hover:bg-red-600 active:bg-red-400"
          onClick={() => setCheckoutForm(false)}
        >
          close
        </button>
        <div>
          <p className="font-bold text-lg text-white">
            Please type your email below!
          </p>
        </div>
        <div className="w-1/2">
          <input
            type="text"
            onChange={e => setGuest(e.target.value)}
            className="w-full border-1 rounded-md text-white"
            placeholder="Email Address"
          />
        </div>
        <button
          className="bg-red-600 py-2 px-4 font-semibold text-white hover:bg-red-500 active:bg-red-300"
          onClick={() => checkValid()}
        >
          {" "}
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CheckoutForm;
