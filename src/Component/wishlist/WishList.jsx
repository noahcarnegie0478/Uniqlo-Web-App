import React from "react";
import FavouriteCard from "./FavouriteCard";

function WishList() {
  //   const { user } = useContext(userContext);
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="mt-50 bg-green mx-60 border-1 p-10">
      <div className="title-wishlist">
        <p className="text-4xl font-bold"> {user.username} Wish list</p>
        <p className="text-gray-800 p-2">(2 tiems)</p>
      </div>
      <div className="favouritecontainer ">
        {favouriteItem?.length > 0 ? (
          favouriteItem?.map(favourite => (
            <FavouriteCard favourite={favourite} />
          ))
        ) : (
          <div className="Loading">Loading ...</div>
        )}
      </div>
    </div>
  );
}

export default WishList;
