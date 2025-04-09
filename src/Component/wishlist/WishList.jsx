import React from "react";

function WishList() {
  //     {
  //       id: 15,
  //       item_id: "475357",
  //       category: "T-shirt",
  //       topic: "Men",
  //       title: "100% SUPIMA Cotton Crew Neck T-Shirt",
  //       sizes: ["XS", "S", "M", "L", "XL"],
  //       stock: 200,
  //       colors: [
  //         {
  //           code: "02",
  //           colorImg: "#cdc4a5",
  //           ItemImage:
  //             "http://res.cloudinary.com/dptvqmded/image/upload/v1742305604/goods_42_455365_3x4_tfmpo1.avif",
  //           colorName: "Beige",
  //         },
  //         {
  //           code: "09",
  //           colorImg: "#000",
  //           ItemImage:
  //             "http://res.cloudinary.com/dptvqmded/image/upload/v1742305623/augoods_09_455365_3x4_ln1eyg.avif",
  //           colorName: "Black",
  //         },
  //         {
  //           code: "00",
  //           colorImg: "#FFF",
  //           ItemImage:
  //             "http://res.cloudinary.com/dptvqmded/image/upload/v1742305646/augoods_00_455365_3x4_gdkovn.avif",
  //           colorName: "White",
  //         },
  //         {
  //           code: "22",
  //           colorImg: "#d28a7e",
  //           ItemImage:
  //             "http://res.cloudinary.com/dptvqmded/image/upload/v1742305678/augoods_22_455365_3x4_xwaxh8.avif",
  //           colorName: "Orange",
  //         },
  //       ],
  //       image_paths: [
  //         "http://res.cloudinary.com/dptvqmded/image/upload/v1742305741/augoods_455365_sub2_3x4_jgbo4q.avif",
  //         "http://res.cloudinary.com/dptvqmded/image/upload/v1742305744/goods_455365_sub1_3x4_gch8tm.avif",
  //         "http://res.cloudinary.com/dptvqmded/image/upload/v1742305748/goods_455365_sub13_3x4_lb9v0p.avif",
  //         "http://res.cloudinary.com/dptvqmded/image/upload/v1742305752/goods_455365_sub14_3x4_pn7tf2.avif",
  //       ],
  //       material: "cotton",
  //       feature_details: [
  //         {
  //           featureImage:
  //             "http://res.cloudinary.com/dptvqmded/image/upload/v1742305708/augoods_455365_feature1_wmaddz.avif",
  //           featureDescription:
  //             "Made of premium 100% SUPIMA® cotton for a fine, smooth texture.",
  //         },
  //         {
  //           featureImage:
  //             "http://res.cloudinary.com/dptvqmded/image/upload/v1742305730/augoods_455365_feature2_b2fnvc.avif",
  //           featureDescription:
  //             "Stylish collar width and stitching enhances the beautiful fabric.",
  //         },
  //       ],
  //       rating: 5,
  //       fabric_detail: "100% Cotton",
  //       washing_instruction: "Cold machine wash , Do not dry clean",
  //       created_at: "2025-03-18T13:49:18.121Z",
  //       category_id: "01",
  //       price: 19.9,
  //       search_vector:
  //         "'100':1A,14C '475357':9A 'beig':16C 'black':17C 'cotton':3A,15C 'crew':4A 'men':10A 'neck':5A 'orang':19C 'shirt':8A,13B 'supima':2A 't-shirt':6A,11B 'white':18C",
  //     },

  //   ];
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
