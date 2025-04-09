import React, { useContext } from "react";
import { itemsContext } from "../Context/ItemProvider";
import UpperNavBar from "../Component/homePage/UpperNavBar";
import Category from "../Component/Category";
import LowerNavbar from "../Component/homePage/LowerNavbar";
import { Element } from "react-scroll";
import WishList from "../Component/wishlist/WishList";

function Profile() {
  const { category } = useContext(itemsContext);
  return (
    <div className="relative min-h-screen bg-yellow-200">
      <UpperNavBar />
      {category ? (
        <Category />
      ) : (
        <div className="content-listing  border-1">
          <Element
            name="section1"
            style={{
              height: "100vh",
              overflowY: "auto",
              backgroundColor: "green",
            }}
          >
            <Element>
              <div className="wishlist bg-white min-h-screen  ">
                <WishList />
              </div>
            </Element>
            <Element>
              <div className="footer h-20 w-screen bg-gray-400 ">
                <p> This is the spare for Footer</p>
              </div>
            </Element>
          </Element>
        </div>
      )}

      <LowerNavbar />
    </div>
  );
}

export default Profile;
