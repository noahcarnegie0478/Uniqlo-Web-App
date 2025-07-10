import React, { useContext } from "react";
import { userContext } from "../../../Context/userProvider";

function TitleDisplay({ title, item_id }) {
  const { updateFavourite, user, guestWishList } = useContext(userContext);

  const handleFavourite = () => {
    if (user !== null) {
      updateFavourite(item_id);
    } else {
      guestWishList(item_id);
    }
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
