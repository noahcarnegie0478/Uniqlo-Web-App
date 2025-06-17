import React from "react";

function SizesDisplay({ chosenItem, currentSize, setCurrentSize }) {
  console.log(chosenItem);
  const kidTopic = "Kid";
  return (
    <div>
      <div
        className={`relative flex gap-4 ${
          chosenItem.topic === kidTopic ? "h-max" : "h-20"
        } my-5 flex-wrap`}
      >
        {chosenItem.sizes.map((size, index) => {
          if (currentSize == size) {
            return (
              <div
                className={`pt-1 px-2 border-2 border-white font-bold text-lg uppercase ${
                  chosenItem.topic === kidTopic ? "w-fit" : "w-10"
                } h-10 text-center text-white bg-black`}
                onClick={() => setCurrentSize(size)}
                key={`size` + index}
              >
                <div>{size}</div>
              </div>
            );
          } else {
            return (
              <div
                className={`pt-1 px-1 border-2 font-bold text-max-lg uppercase ${
                  chosenItem.topic === kidTopic ? "w-fit" : "w-10"
                } h-10  text-center`}
                onClick={() => setCurrentSize(size)}
                key={`size` + index}
              >
                <div>{size}</div>
              </div>
            );
          }
        })}
      </div>
      <p className="font-light uppercase mt-2">
        Size: {chosenItem.topic} {currentSize}
      </p>
    </div>
  );
}

export default SizesDisplay;
