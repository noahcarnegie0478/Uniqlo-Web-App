import React from "react";

function StarDisplay({ rating }) {
  const totalStars = 5;
  return (
    <div className="flex">
      {Array.from({ length: totalStars }).map((_, i) =>
        i < rating ? (
          <box-icon key={i} name="star" color="black" type="solid"></box-icon>
        ) : (
          <box-icon key={i} name="star" color="black"></box-icon>
        )
      )}
    </div>
  );
}

export default StarDisplay;
