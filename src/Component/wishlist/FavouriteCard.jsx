import React from "react";

function FavouriteCard({ favourite }) {
  return (
    <div className="favouritecard flex gap-4 h-80 mt-10 border-l p-2 hover:bg-gray-200 active:bg-gray-100 ">
      <div className="card-leftside">
        <div className="favouriteimage ">
          <img
            src={favourite.image_paths[0]}
            alt="image"
            className="h-70 w-50"
          />
        </div>
      </div>
      <div className="card-rightside">
        <div className="favouritetitle">
          <p className="font-bold text-2xl">{favourite.title}</p>
        </div>
        <div className="favouriteid">
          <p className="font-semibold text-xl">
            {" "}
            Product_id: {favourite.item_id}
          </p>
        </div>
        <div className="favouritesize">
          <p className="font-md text-md"> Sizes: {favourite.topic}</p>
        </div>
      </div>
    </div>
  );
}

export default FavouriteCard;
