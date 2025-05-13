import React, { useState } from "react";
import TitleDisplay from "./RightSide/TitleDisplay";
import ColorDisplay from "./RightSide/ColorDisplay";
import SizesDisplay from "./RightSide/SizesDisplay";
import CartOption from "./RightSide/CartOption";

function OptionReview({ chosenItem, currentColor, setCurrentColor }) {
  const [currentSize, setCurrentSize] = useState("XS");
  return (
    <div>
      <TitleDisplay title={chosenItem.title} item_id={chosenItem.item_id} />

      <ColorDisplay
        chosenItem={chosenItem}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <SizesDisplay
        chosenItem={chosenItem}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />

      <div className="price-item my-5 ">
        <p className="font-bold text-4xl mt-2">${chosenItem.price}</p>
      </div>

      <CartOption
        item_id={chosenItem.item_id}
        currentSize={currentSize}
        topic={chosenItem.topic}
        currentColor={currentColor}
        price={chosenItem.price}
        title={chosenItem.title}
      />
    </div>
  );
}

export default OptionReview;
