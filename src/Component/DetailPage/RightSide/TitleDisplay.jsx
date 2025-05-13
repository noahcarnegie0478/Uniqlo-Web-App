import React from "react";

function TitleDisplay({ title }) {
  return (
    <div className="title-favourite flex justify-between items-center my-5 ">
      <p className="text-2xl font-semibold w-2/3">{title}</p>
      <box-icon
        name="heart"
        style={{ width: "40px", height: "40px" }}
      ></box-icon>
    </div>
  );
}

export default TitleDisplay;
