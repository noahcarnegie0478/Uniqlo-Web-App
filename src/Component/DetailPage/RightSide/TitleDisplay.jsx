import React, { useContext } from "react";
import { userContext } from "../../../Context/userProvider";

function TitleDisplay({ title, item_id }) {
  const { updateFavourite, user } = useContext(userContext);

  const handleFavourite = () => {
    user.length == 0
      ? alert("Please login to add this item into favourite")
      : updateFavourite(item_id);
  };

  return (
    <div className="title-favourite flex justify-between items-center my-5 ">
      <p className="text-2xl font-semibold w-2/3">{title}</p>
      <box-icon
        name="heart"
        style={{ width: "40px", height: "40px" }}
        onClick={() => handleFavourite()}
      ></box-icon>
    </div>
  );
}

export default TitleDisplay;
