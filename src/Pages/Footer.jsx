import React from "react";

function Footer() {
  return (
    <div className="w-screen h-70 bg-gray-200">
      <div className="footer-container w-full px-60 flex justify-between items-center   flex-wrap h-full py-10">
        <div className="item-1 h-full w-1/4  pt-2">
          <p className="font-bold uppercase text-xl"> About Uniqlo</p>
          <ul className="mt-2 flex-row gap-2 text-md font-light">
            <li>Information</li>
            <li>Store Locator</li>
            <li>Careers</li>
            <li>LifeWear</li>
          </ul>
        </div>
        <div className="item-1 h-full w-1/4  pt-2">
          <p className="font-bold uppercase text-xl"> Help</p>
          <ul className="mt-2 flex-row gap-2 text-md font-light">
            <li>FAQ</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="item-1 h-full w-1/4  pt-2">
          <p className="font-bold uppercase text-xl"> Account</p>
          <ul className="mt-2 flex-row gap-2 text-md font-light">
            <li className="font-semibold">Membership</li>
            <li>Profile</li>
            <li>Coupons</li>
          </ul>
        </div>
        <div className="item-1 h-full w-1/4  pt-2">
          <p className="font-bold uppercase text-xl"> E - Newsletter</p>
          <p>
            Sign up and be the first-in-the know about new arrivals, promotions,
            in-store events and more.
          </p>
          <p className="underline-offset-auto uppercase font-bold text-lg">
            Subscribe now
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
