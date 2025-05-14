import React, { useContext } from "react";
import "boxicons";
import { itemsContext } from "../../Context/ItemProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../../Context/userProvider";

function LowerNavbar() {
  const { category, setCategory } = useContext(itemsContext);
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = () => {
    if (user.length !== 0) {
      if (location.pathname !== "/profile") {
        navigate("/profile");
      }
    } else {
      alert("You need to login for further process!");
      navigate("/login");
    }
  };

  return (
    <div className="fixed bottom-5 left-0 flex justify-center w-full ">
      <div className="LowerNavbar  w-1/3 flex justify-between items-center gap-4">
        <div className="home-icon bg-white text-center py-6 px-7 rounded-full drop-shadow-md hover:drop-shadow-xl hover:bg-gray-200">
          <Link to="/">
            <box-icon name="home" type="solid"></box-icon>
          </Link>
        </div>
        <div
          className="search-icon bg-white text-center py-7 px-8 rounded-full drop-shadow-md hover:drop-shadow-xl hover:bg-gray-200 "
          onClick={() => {
            setCategory(!category);
            console.log("thay doi do nut bam");
          }}
        >
          <box-icon
            name="search"
            style={{ width: "40px", height: "40px" }}
          ></box-icon>
        </div>
        <div
          className="profile-icon bg-white text-center py-6 px-7 drop-shadow-md rounded-full hover:drop-shadow-xl hover:bg-gray-200"
          onClick={() => {
            handleNavigate();
          }}
        >
          <box-icon name="user" type="solid"></box-icon>
        </div>
      </div>
    </div>
  );
}

export default LowerNavbar;
