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
import { Link } from "react-router";

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
            <div className="please-login left-side w-3/10 border-1 h-screen  ">
              <div className="pl-20 mt-70 pr-10 ">
                <p className="font-bold text-2xl  ">
                  {" "}
                  Please sign in or create an account to enhance your shopping
                  experience!
                </p>
                <div className="flex gap-2 w-full justify-start items-center font-bold text-lg ">
                  <p>Click icon for the login page:</p>

                  <Link to="/login">
                    <AiFillIdcard className="fill-card animate-pulse" />
                  </Link>
                </div>
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
