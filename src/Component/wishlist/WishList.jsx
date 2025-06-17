import React, { useContext, useEffect } from "react";

import FavouriteCard from "./FavouriteCard";

import { userContext } from "../../Context/userProvider";

function WishList() {
  const { favourite } = useContext(userContext);

  return (
    <div className="mt-20 p-10">
      <div className="title-wishlist">
        <p className="text-4xl font-bold"> Your Favourite Items</p>

        {favourite.length > 0 ? (
          <p className="text-gray-800 p-2">{favourite.length} items</p>
        ) : (
          ""
        )}
      </div>
      <div className="favouritecontainer ">
        {favourite.length > 0 ? (
          favourite.map(favourite => <FavouriteCard favourite={favourite} />)
        ) : (
          <div className="Empty w-full text-center font-bold text-2xl">
            <p>
              Your favourite list is empty — start browsing now and add items
              you’ll love!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WishList;
