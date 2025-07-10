import React, { useContext, useEffect } from "react";
import { userContext } from "../Context/userProvider";
import { itemsContext } from "../Context/ItemProvider";
import CartList from "../Component/Cart/CartList";
import UpperNavBar from "../Component/homePage/UpperNavBar";
import LowerNavbar from "../Component/homePage/LowerNavbar";
import { Element } from "react-scroll";
import Category from "../Component/Category";
import { useNavigate } from "react-router";
import Footer from "./Footer";

function Cart() {
  const { user } = useContext(userContext);
  const { category } = useContext(itemsContext);
  const navigate = useNavigate();
  if (user == null) {
    navigate("/login");
  }
  return (
    <div className="relative min-h-screen ">
      <UpperNavBar />
      {category ? (
        <Category />
      ) : (
        <div className="content-cart  border-1">
          <Element
            name="section1"
            style={{
              height: "100vh",
              overflowY: "auto",
            }}
          >
            <Element>
              <div className="wishlist bg-white min-h-screen ">
                <CartList />
              </div>
            </Element>
            <Element>
              <div className="footer h-20 w-screen bg-gray-400 ">
                <Footer />
              </div>
            </Element>
          </Element>
        </div>
      )}

      <LowerNavbar />
    </div>
  );
}

export default Cart;
