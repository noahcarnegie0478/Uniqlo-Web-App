import React, { useContext } from "react";
import { itemsContext } from "../Context/ItemProvider";
import UpperNavBar from "../Component/homePage/UpperNavBar";
import Category from "../Component/Category";
import LowerNavbar from "../Component/homePage/LowerNavbar";
import { Element } from "react-scroll";
import WishList from "../Component/wishlist/WishList";
import { userContext } from "../Context/userProvider";
import { useNavigate } from "react-router";
import { format, parseISO } from "date-fns";
import { AiFillIdcard } from "react-icons/ai";
import ProfileDisplay from "../Component/wishlist/ProfileDisplay";

function Profile() {
  const { category } = useContext(itemsContext);
  const { Logout, user } = useContext(userContext);
  const formatted = user
    ? format(parseISO(user?.date_of_birth), "dd/MM/yyyy")
    : null;
  const navigate = useNavigate();
  const handleLogout = () => {
    Logout();
    navigate("/");
  };
  return (
    <div className="relative min-h-screen ">
      <UpperNavBar />
      {category ? (
        <Category />
      ) : (
        <div className="content-listing  border-1 flex gap-2 ">
          {user ? (
            <ProfileDisplay
              user={user}
              formatted={formatted}
              handleLogout={handleLogout}
            />
          ) : (
            <div className="please-login left-side w-3/10 border-1 flex flex-row items-start relative  ">
              <div className="pl-20 mt-70 pr-10 ">
                <p className="font-bold text-2xl ">
                  {" "}
                  Please create account or login, to experience the shopping
                  process better!
                </p>
                <AiFillIdcard className="fill-card" />
              </div>
            </div>
          )}

          <div className="right-side w-7/10">
            <Element
              name="section1"
              style={{
                height: "100vh",
                overflowY: "auto",
              }}
            >
              <Element>
                <div className="wishlist bg-white min-h-screen ">
                  {" "}
                  <WishList />
                </div>
              </Element>
            </Element>
          </div>
        </div>
      )}

      <LowerNavbar />
    </div>
  );
}

export default Profile;
