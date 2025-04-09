import React from "react";

function WishList() {
  
  return (
    <div className="mt-50 bg-green mx-60 border-1 p-10">
      {/* thut vao 30px moi ben, va cach 200px tinh tu top */}
      {/* co border o ngoai nhin vuong vuc */}
      {/* co bo dem items*/}
      <div className="title-wishlist">
        <p className="text-4xl font-bold">Wish list</p>
        <p className="text-gray-800 p-2">(2 tiems)</p>
      </div>
      <div className="favouritecontainer ">
        {favouriteItem.length > 0 ? (
          favouriteItem.map(favourite => (
            <div className="favouritecard flex gap-4 h-80 mt-10 border-l p-2  ">
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
          ))
        ) : (
          <div className="Loading">Loading ...</div>
        )}
      </div>
    </div>
  );
}

export default WishList;
