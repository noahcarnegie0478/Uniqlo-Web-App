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

function Profile() {
  const { category } = useContext(itemsContext);
  const { Logout } = useContext(userContext);
  const officialUser = JSON.parse(localStorage.getItem("user"));
  const formatted = format(parseISO(officialUser.date_of_birth), "dd/MM/yyyy");

  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout");
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
          <div className="left-side w-3/10 border-1 flex flex-row items-start relative ">
            <div className=" pl-20 mt-70 ">
              <div className="name my-2">
                <p className="font-bold uppercase text-3xl"> User Name</p>
                <p className="font-semibold uppercase text-xl">
                  {officialUser.username}
                </p>
              </div>
              <div className="email my-2">
                <p className="font-bold uppercase text-3xl"> User Email</p>
                <p className="font-semibold uppercase text-xl">
                  {officialUser.email}
                </p>
              </div>
              <div className="dob my-2">
                <p className="font-bold uppercase text-3xl">
                  {" "}
                  User Date Of Birth
                </p>
                <p className="font-semibold uppercase text-xl">{formatted}</p>
              </div>
              <div className="coupon my-2">
                <p className="font-bold uppercase text-3xl">User Coupon</p>
                <p className="font-semibold uppercase text-xl">
                  {officialUser.coupon}
                </p>
              </div>
            </div>

            <div className="logout-button">
              <button
                className="w-full absolute bottom-0 bg-red-500 h-10 text-white font-bold left-0 hover:bg-red-600 active:bg-red-400 "
                onClick={() => handleLogout()}
              >
                Logout
              </button>
            </div>
          </div>

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
      <div className="footer h-20 w-screen bg-gray-400 px-60 mt-10"></div>

      <LowerNavbar />
    </div>
  );
}

export default Profile;
