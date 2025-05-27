import React, { useState } from "react";
import {
  AiOutlineRight as ArrowRight,
  AiOutlineLeft as ArrowLeft,
} from "react-icons/ai";

function Image({ currentCardColor, item, setCurrentCardColor }) {
  const [index, setIndex] = useState(0);
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
  return (
    <div className="image-item row-start-1 row-end-3 hover=drop-shadow-lg ">
      <div className="relative ">
        <div className="box left-box w-auto  h-full  absolute top-0 left-0 flex flex-rows items-center transition  hover:bg-black/20 ">
          <div className="px-2">
            <ArrowLeft
              className="text-white font-bold text-2xl rounded-full "
              onClick={() => toTheLeft()}
            />
          </div>
        </div>
        {currentCardColor != null ? (
          <div className="box middlebox w-full bg-red-200 ">
            <img src={currentCardColor.ItemImage} alt="image-item" />
          </div>
        ) : (
          <div className="box middlebox w-full bg-red-200 ">
            <img src={item.image_paths[0]} alt="image-item" />
          </div>
        )}

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
  );
}

export default Image;
