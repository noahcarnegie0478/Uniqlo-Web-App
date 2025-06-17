import React, { useContext, useEffect } from "react";

import FavouriteCard from "./FavouriteCard";

import { userContext } from "../../Context/userProvider";

function WishList() {
  const { user, favourite } = useContext(userContext);
  console.log("favourite changed as display: ", favourite);

  return (
    <div className="mt-20 p-10">
      <div className="title-wishlist">
        <p className="text-4xl font-bold"> {user?.username} Wish list</p>
        <p className="text-gray-800 p-2">{user?.favourite?.length}</p>
      </div>
      <div className="favouritecontainer ">
        {favourite.length > 0 ? (
          favourite.map(favourite => <FavouriteCard favourite={favourite} />)
        ) : (
          <div className="Loading">Loading ...</div>
        )}
      </div>
    </div>
  );
}

export default WishList;
