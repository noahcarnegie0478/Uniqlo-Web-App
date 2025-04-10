import React from "react";

import FavouriteCard from "./FavouriteCard";

function WishList() {
  //   const { user } = useContext(userContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const favouriteItem = [
    {
      id: 15,
      item_id: "475357",
      category: "T-shirt",
      topic: "Men",
      title: "100% SUPIMA Cotton Crew Neck T-Shirt",
      sizes: ["XS", "S", "M", "L", "XL"],
      stock: 200,
      colors: [
        {
          code: "02",
          colorImg: "#cdc4a5",
          ItemImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742305604/goods_42_455365_3x4_tfmpo1.avif",
          colorName: "Beige",
        },
        {
          code: "09",
          colorImg: "#000",
          ItemImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742305623/augoods_09_455365_3x4_ln1eyg.avif",
          colorName: "Black",
        },
        {
          code: "00",
          colorImg: "#FFF",
          ItemImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742305646/augoods_00_455365_3x4_gdkovn.avif",
          colorName: "White",
        },
        {
          code: "22",
          colorImg: "#d28a7e",
          ItemImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742305678/augoods_22_455365_3x4_xwaxh8.avif",
          colorName: "Orange",
        },
      ],
      image_paths: [
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742305741/augoods_455365_sub2_3x4_jgbo4q.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742305744/goods_455365_sub1_3x4_gch8tm.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742305748/goods_455365_sub13_3x4_lb9v0p.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742305752/goods_455365_sub14_3x4_pn7tf2.avif",
      ],
      material: "cotton",
      feature_details: [
        {
          featureImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742305708/augoods_455365_feature1_wmaddz.avif",
          featureDescription:
            "Made of premium 100% SUPIMA® cotton for a fine, smooth texture.",
        },
        {
          featureImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742305730/augoods_455365_feature2_b2fnvc.avif",
          featureDescription:
            "Stylish collar width and stitching enhances the beautiful fabric.",
        },
      ],
      rating: 5,
      fabric_detail: "100% Cotton",
      washing_instruction: "Cold machine wash , Do not dry clean",
      created_at: "2025-03-18T13:49:18.121Z",
      category_id: "01",
      price: 19.9,
      search_vector:
        "'100':1A,14C '475357':9A 'beig':16C 'black':17C 'cotton':3A,15C 'crew':4A 'men':10A 'neck':5A 'orang':19C 'shirt':8A,13B 'supima':2A 't-shirt':6A,11B 'white':18C",
    },
    {
      id: 18,
      item_id: "478813",
      category: "Shirt",
      topic: "Men",
      title: "C Broadcloth Oversized Shirt Long Sleeve",
      sizes: ["XS", "S", "M", "L", "XL"],
      stock: 200,
      colors: [
        {
          code: "61",
          colorImg: "#bbbfce",
          ItemImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742310168/augoods_61_474574_3x4_xmh8om.avif",
          colorName: "Blue",
        },
        {
          code: "01",
          colorImg: "#c5c3c0",
          ItemImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742310201/augoods_01_474574_3x4_fpz1rz.avif",
          colorName: "Off White",
        },
      ],
      image_paths: [
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310229/augoods_474574_sub7_3x4_atkknx.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310232/augoods_474574_sub23_3x4_vjo4wv.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310236/augoods_474574_sub24_3x4_t12lx8.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310238/augoods_474574_sub25_3x4_nknixk.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310243/goods_474574_sub11_3x4_w8dnos.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310247/goods_474574_sub12_3x4_k7s099.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310255/goods_474574_sub14_3x4_zpsxuu.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310255/goods_474574_sub13_3x4_rvyhnk.avif",
      ],
      material: "cotton",
      feature_details: [
        {
          featureImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742310282/augoods_474574_feature6_xvc4qr.avif",
          featureDescription:
            "Fine-count ultra-long cotton fibers produce a crisp, supple feel.",
        },
        {
          featureImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742310300/augoods_474574_feature7_lkcatr.avif",
          featureDescription:
            "The hem is square cut with a slit, making it ideal for wearing as an outer layer.",
        },
        {
          featureImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742310318/augoods_474574_feature8_wfvuoe.avif",
          featureDescription:
            "The left chest pocket adds style and convenience.",
        },
      ],
      rating: 5,
      fabric_detail: "100% cotton",
      washing_instruction: "Cold machine wash , Dry clean",
      created_at: "2025-03-18T15:05:22.979Z",
      category_id: "02",
      price: 59.9,
      search_vector:
        "'100':10C '478813':7A 'blue':12C 'broadcloth':2A 'c':1A 'cotton':11C 'long':5A 'men':8A 'overs':3A 'shirt':4A,9B 'sleev':6A 'white':14C",
    },
    {
      id: 18,
      item_id: "478813",
      category: "Shirt",
      topic: "Men",
      title: "C Broadcloth Oversized Shirt Long Sleeve",
      sizes: ["XS", "S", "M", "L", "XL"],
      stock: 200,
      colors: [
        {
          code: "61",
          colorImg: "#bbbfce",
          ItemImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742310168/augoods_61_474574_3x4_xmh8om.avif",
          colorName: "Blue",
        },
        {
          code: "01",
          colorImg: "#c5c3c0",
          ItemImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742310201/augoods_01_474574_3x4_fpz1rz.avif",
          colorName: "Off White",
        },
      ],
      image_paths: [
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310229/augoods_474574_sub7_3x4_atkknx.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310232/augoods_474574_sub23_3x4_vjo4wv.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310236/augoods_474574_sub24_3x4_t12lx8.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310238/augoods_474574_sub25_3x4_nknixk.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310243/goods_474574_sub11_3x4_w8dnos.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310247/goods_474574_sub12_3x4_k7s099.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310255/goods_474574_sub14_3x4_zpsxuu.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310255/goods_474574_sub13_3x4_rvyhnk.avif",
      ],
      material: "cotton",
      feature_details: [
        {
          featureImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742310282/augoods_474574_feature6_xvc4qr.avif",
          featureDescription:
            "Fine-count ultra-long cotton fibers produce a crisp, supple feel.",
        },
        {
          featureImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742310300/augoods_474574_feature7_lkcatr.avif",
          featureDescription:
            "The hem is square cut with a slit, making it ideal for wearing as an outer layer.",
        },
        {
          featureImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742310318/augoods_474574_feature8_wfvuoe.avif",
          featureDescription:
            "The left chest pocket adds style and convenience.",
        },
      ],
      rating: 5,
      fabric_detail: "100% cotton",
      washing_instruction: "Cold machine wash , Dry clean",
      created_at: "2025-03-18T15:05:22.979Z",
      category_id: "02",
      price: 59.9,
      search_vector:
        "'100':10C '478813':7A 'blue':12C 'broadcloth':2A 'c':1A 'cotton':11C 'long':5A 'men':8A 'overs':3A 'shirt':4A,9B 'sleev':6A 'white':14C",
    },
    {
      id: 18,
      item_id: "478813",
      category: "Shirt",
      topic: "Men",
      title: "C Broadcloth Oversized Shirt Long Sleeve",
      sizes: ["XS", "S", "M", "L", "XL"],
      stock: 200,
      colors: [
        {
          code: "61",
          colorImg: "#bbbfce",
          ItemImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742310168/augoods_61_474574_3x4_xmh8om.avif",
          colorName: "Blue",
        },
        {
          code: "01",
          colorImg: "#c5c3c0",
          ItemImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742310201/augoods_01_474574_3x4_fpz1rz.avif",
          colorName: "Off White",
        },
      ],
      image_paths: [
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310229/augoods_474574_sub7_3x4_atkknx.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310232/augoods_474574_sub23_3x4_vjo4wv.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310236/augoods_474574_sub24_3x4_t12lx8.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310238/augoods_474574_sub25_3x4_nknixk.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310243/goods_474574_sub11_3x4_w8dnos.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310247/goods_474574_sub12_3x4_k7s099.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310255/goods_474574_sub14_3x4_zpsxuu.avif",
        "http://res.cloudinary.com/dptvqmded/image/upload/v1742310255/goods_474574_sub13_3x4_rvyhnk.avif",
      ],
      material: "cotton",
      feature_details: [
        {
          featureImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742310282/augoods_474574_feature6_xvc4qr.avif",
          featureDescription:
            "Fine-count ultra-long cotton fibers produce a crisp, supple feel.",
        },
        {
          featureImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742310300/augoods_474574_feature7_lkcatr.avif",
          featureDescription:
            "The hem is square cut with a slit, making it ideal for wearing as an outer layer.",
        },
        {
          featureImage:
            "http://res.cloudinary.com/dptvqmded/image/upload/v1742310318/augoods_474574_feature8_wfvuoe.avif",
          featureDescription:
            "The left chest pocket adds style and convenience.",
        },
      ],
      rating: 5,
      fabric_detail: "100% cotton",
      washing_instruction: "Cold machine wash , Dry clean",
      created_at: "2025-03-18T15:05:22.979Z",
      category_id: "02",
      price: 59.9,
      search_vector:
        "'100':10C '478813':7A 'blue':12C 'broadcloth':2A 'c':1A 'cotton':11C 'long':5A 'men':8A 'overs':3A 'shirt':4A,9B 'sleev':6A 'white':14C",
    },
  ];
  return (
    <div className="mt-50 bg-green mx-60 border-1 p-10">
      <div className="title-wishlist">
        <p className="text-4xl font-bold"> {user.username} Wish list</p>
        <p className="text-gray-800 p-2">(2 tiems)</p>
      </div>
      <div className="favouritecontainer ">
        {favouriteItem.length > 0 ? (
          favouriteItem.map(favourite => (
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
