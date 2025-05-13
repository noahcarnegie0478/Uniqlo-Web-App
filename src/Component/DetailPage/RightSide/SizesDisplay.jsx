import React from "react";

function SizesDisplay({ chosenItem, currentSize, setCurrentSize }) {
  return (
    <div className=" relative flex gap-4 h-20 my-5 ">
      {chosenItem.sizes.map((size, index) => {
        if (currentSize == size) {
          return (
            <div
              className="pt-1 px-2 border-2 border-white font-bold text-lg uppercase w-10 h-10 text-center text-white bg-black"
              onClick={() => setCurrentSize(size)}
              key={`size` + index}
            >
              <div>{size}</div>
            </div>
          );
        } else {
          return (
            <div
              className="pt-1 px-2 border-2 font-bold text-lg uppercase w-10 h-10 text-center"
              onClick={() => setCurrentSize(size)}
              key={`size` + index}
            >
              <div>{size}</div>
            </div>
          );
        }
      })}
      <p className=" absolute font-light uppercase bottom-0">
        Size: {chosenItem.topic} {currentSize}
      </p>
    </div>
  );
}

export default SizesDisplay;
