import React, { useState } from "react";
import {
  AiOutlineRight as ArrowRight,
  AiOutlineLeft as ArrowLeft,
} from "react-icons/ai";

function TestPage() {
  const item = {
    id: 13,
    item_id: "475355",
    category: "T-shirt",
    topic: "Men",
    title: "Uniqlo U AIRism Cotton Oversized Crew Neck Half Sleeve T-Shirt",
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 200,
    colors: [
      {
        code: "15",
        colorImg: "#885057",
        ItemImage:
          "http://res.cloudinary.com/dptvqmded/image/upload/v1742304570/augoods_15_465185_3x4_kijwka.avif",
        colorName: "Red",
      },
      {
        code: "09",
        colorImg: "#000",
        ItemImage:
          "http://res.cloudinary.com/dptvqmded/image/upload/v1742304595/augoods_09_465185_3x4_xns7pj.avif",
        colorName: "Black",
      },
      {
        code: "00",
        colorImg: "#FFF",
        ItemImage:
          "http://res.cloudinary.com/dptvqmded/image/upload/v1742304618/augoods_00_465185_3x4_uowkbm.avif",
        colorName: "White",
      },
    ],
    image_paths: [
      "http://res.cloudinary.com/dptvqmded/image/upload/v1742304511/augoods_465185_sub1_3x4_razk45.avif",
      "http://res.cloudinary.com/dptvqmded/image/upload/v1742304515/augoods_465185_sub3_3x4_qegsix.avif",
      "http://res.cloudinary.com/dptvqmded/image/upload/v1742304519/augoods_465185_sub17_3x4_p7bqcx.avif",
      "http://res.cloudinary.com/dptvqmded/image/upload/v1742304523/augoods_465185_sub23_3x4_ewr9n0.avif",
      "http://res.cloudinary.com/dptvqmded/image/upload/v1742304527/goods_465185_sub12_3x4_dwzmgl.avif",
      "http://res.cloudinary.com/dptvqmded/image/upload/v1742304532/goods_465185_sub14_3x4_lwhad5.avif",
    ],
    material: "airism",
    feature_details: [
      {
        featureImage:
          "http://res.cloudinary.com/dptvqmded/image/upload/v1742304694/augoods_465185_feature6_rpkscc.avif",
        featureDescription:
          "Comfortable 'AIRism' fabric with the look of cotton. Cool to the Touch technology for an instant cooling sensation.",
      },
      {
        featureImage:
          "http://res.cloudinary.com/dptvqmded/image/upload/v1742304721/augoods_465185_feature7_kh2epv.avif",
        featureDescription:
          "Oversized cut with half-length sleeves and dropped shoulders for a relaxed feel.",
      },
      {
        featureImage:
          "http://res.cloudinary.com/dptvqmded/image/upload/v1742304743/augoods_465185_feature8_n18yil.avif",
        featureDescription: "Narrow crew neck suitable for refined styling.",
      },
    ],
    rating: 5,
    fabric_detail:
      "53% Cotton, 47% Polyester ( 30% Made From Recycled Polyester )",
    washing_instruction: "Cold machine wash , Dry clean",
    created_at: "2025-03-18T13=32=27.797Z",
    category_id: "01",
    price: 59.9,
    search_vector:
      "'30'=22C '47'=20C '475355'=13A '53'=18C 'airism'=3A 'black'=28C 'cotton'=4A,19C 'crew'=6A 'half'=8A 'made'=23C 'men'=14A 'neck'=7A 'overs'=5A 'polyest'=21C,26C 'recycl'=25C 'red'=27C 'shirt'=12A,17B 'sleev'=9A 't-shirt'=10A,15B 'u'=2A 'uniqlo'=1A 'white'=29C",
  };
  const [index, setIndex] = useState(0);
  const [currentCardColor, setCurrentCardColor] = useState(item.colors[0]);
  const toTheRight = () => {
    if (index >= item.colors.length - 1) {
      setIndex(0);
    } else {
      setIndex(prev => prev + 1);
    }

    console.log(index);
    setCurrentCardColor(item.colors[index]);
  };
  const toTheLeft = () => {
    if (index < 1) {
      setIndex(item.colors.length - 1);
    } else {
      setIndex(prev => prev - 1);
    }
    console.log(index);
    setCurrentCardColor(item.colors[index]);
  };
  const accessibleThroughColor = chosenColor => {
    const filterColor = item.colors.filter(color => color.code == chosenColor);
    console.log(filterColor);
    setCurrentCardColor(filterColor[0]);
  };

  return (
    <div
      className={`card-item ${item.item_id}  bg-white grid grid-rows-3 w-80 grid-flow-row hover=drop-shadow-xl  `}
      key={item.item_id}
    >
      {/* image  */}

      <div className="">
        <div className="image-item row-start-1 row-end-3 hover=drop-shadow-lg relative ">
          <div className="box left-box w-auto  h-full  absolute top-0 left-0 flex flex-rows items-center transition  hover:bg-black/20 ">
            <div className="px-2">
              <ArrowLeft
                className="text-white font-bold text-2xl rounded-full "
                onClick={() => toTheLeft()}
              />
            </div>
          </div>
          <div className="box middlebox w-full bg-red-200 ">
            <img src={currentCardColor.ItemImage} alt="image-item" />
          </div>
          <div className="box right-box w-auto h-full absolute top-0 right-0  flex flex-rows items-center hover:bg-black/20  ">
            <div className="px-2">
              <ArrowRight
                className="text-white font-bold text-2xl rounded-full "
                onClick={() => toTheRight()}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="detail-item p-1">
        <div className="first-line flex justify-between items-center">
          <div className="colour-item flex gap-2 ">
            {item.colors.map(color => (
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: color.colorImg,
                  borderRadius: "20px",
                  border: "1px solid",
                }}
                key={color.code}
                onClick={() => accessibleThroughColor(color.code)}
              ></div>
            ))}
          </div>
          <div className="favourite-icon">
            <box-icon
              name="heart"
              style={{ width: "35px", height: "35px" }}
            ></box-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
