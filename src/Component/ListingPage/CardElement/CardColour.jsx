import React from "react";

function CardColour({ item, setCurrentCardColor }) {
  const accessibleThroughColor = chosenColor => {
    const filterColor = item.colors.filter(color => color.code == chosenColor);
    console.log(filterColor);
    setCurrentCardColor(filterColor[0]);
  };
  return (
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
  );
}

export default CardColour;
