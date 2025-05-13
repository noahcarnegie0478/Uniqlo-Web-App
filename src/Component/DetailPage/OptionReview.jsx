import React from "react";
import TitleDisplay from "./RightSide/TitleDisplay";
import ColorDisplay from "./RightSide/ColorDisplay";
import SizesDisplay from "./RightSide/SizesDisplay";
import CartOption from "./RightSide/CartOption";

function OptionReview({ chosenItem, currentColor, setCurrentColor }) {
  return (
    <div>
      <TitleDisplay title={chosenItem.title} />

      <ColorDisplay
        chosenItem={chosenItem}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <SizesDisplay chosenItem={chosenItem} />

      <div className="price-item my-5 ">
        <p className="font-bold text-4xl mt-2">${chosenItem.price}</p>
      </div>

      <CartOption />
    </div>
  );
}

export default OptionReview;
