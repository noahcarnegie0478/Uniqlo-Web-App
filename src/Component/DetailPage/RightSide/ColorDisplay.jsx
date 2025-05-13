import React from "react";

function ColorDisplay({ chosenItem, currentColor, setCurrentColor }) {
  return (
    <div>
      {currentColor ? (
        <div className=" relative color-items flex gap-3 mt-5 h-20">
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: currentColor?.colorImg,
              borderRadius: "20px",
              border: " thick double #000",
            }}
            key={currentColor?.code}
          ></div>

          {chosenItem.colors.map(color => {
            if (color != currentColor) {
              return (
                <div
                  style={{
                    width: "40px",
                    height: "40px",
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
    </div>
  );
}

export default ColorDisplay;
