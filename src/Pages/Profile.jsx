import React, { useContext } from "react";
import { itemsContext } from "../Context/ItemProvider";
import UpperNavBar from "../Component/homePage/UpperNavBar";
import Category from "../Component/Category";
import LowerNavbar from "../Component/homePage/LowerNavbar";
import { Element } from "react-scroll";
import WishList from "../Component/wishlist/WishList";
import { userContext } from "../Context/userProvider";
import { useNavigate } from "react-router";

function Profile() {
  const { category } = useContext(itemsContext);
  const { Logout } = useContext(userContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout");
    Logout();
    navigate("/");
  };
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
              <div className="wishlist bg-white min-h-screen ">
                <WishList />

                <button
                  className="bg-red-500 text-lg font-bold text-white w-1/10 p-3 hover:bg-red-600 active:bg-red-400"
                  onClick={() => handleLogout()}
                >
                  Logout
                </button>
              </div>
            </Element>
            <Element>
              <div className="footer h-20 w-screen bg-gray-400 px-60 mt-10"></div>
            </Element>
          </Element>
        </div>
      )}

      <LowerNavbar />
    </div>
  );
}

export default Profile;
