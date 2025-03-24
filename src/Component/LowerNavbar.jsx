import React from "react";
import "boxicons";

function LowerNavbar({ category, setCategory }) {
  return (
    <div className="absolute bottom-5 left-0 flex justify-center w-full ">
      <div className="LowerNavbar  w-1/3 flex justify-between items-center gap-4">
        <div className="home-icon bg-white text-center py-6 px-7 rounded-full hover:drop-shadow-xl hover:bg-gray-200">
          <box-icon name="home" type="solid"></box-icon>
        </div>
        <div
          className="search-icon bg-white text-center py-7 px-8 rounded-full hover:drop-shadow-xl hover:bg-gray-200 "
          onClick={() => setCategory(!category)}
        >
          <box-icon
            name="search"
            style={{ width: "40px", height: "40px" }}
          ></box-icon>
        </div>
        <div className="profile-icon bg-white text-center py-6 px-7 rounded-full hover:drop-shadow-xl hover:bg-gray-200">
          <box-icon name="user" type="solid"></box-icon>
        </div>
      </div>
    </div>
  );
}

export default LowerNavbar;
