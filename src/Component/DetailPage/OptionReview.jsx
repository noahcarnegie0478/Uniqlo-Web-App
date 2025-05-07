import React, { useEffect, useState } from "react";

function OptionReview({ chosenItem }) {
  const [currentColor, setCurrentColor] = useState({});
  const [runForOnce, setRunForOnce] = useState(true);
  useEffect(() => {
    if (chosenItem && runForOnce) {
      setCurrentColor(chosenItem.colors[0]);
      setRunForOnce(false);
    }
  }, []);
  return (
    <div>
      {/* title */}
      <div className="title-favourite flex justify-between items-center">
        <p className="text-2xl font-semibold w-1/2">{chosenItem.title}</p>
        <box-icon
          name="heart"
          style={{ width: "35px", height: "35px" }}
        ></box-icon>
      </div>
      {/* color */}
      {currentColor ? (
        <div className=" relative color-items flex gap-3 mt-5 h-15">
          <div
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: currentColor?.colorImg,
              borderRadius: "20px",
              border: "3px solid",
            }}
            key={currentColor?.code}
          ></div>

          {chosenItem.colors.map(color => {
            if (color != currentColor) {
              return (
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: color.colorImg,
                    borderRadius: "20px",
                    border: "1px solid",
                  }}
                  key={color.code}
                  onClick={() => setCurrentColor(color)}
                ></div>
              );
            }
          })}
          <p className=" absolute font-light uppercase bottom-0">
            colour: {currentColor?.code} {currentColor?.colorName}
          </p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {/* rating */}
      {/* price */}
      {/* add to cart */}
    </div>
  );
}

export default OptionReview;
