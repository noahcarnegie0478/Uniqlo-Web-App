import React from "react";

function ImageDisplay({ chosenItem, currentColor }) {
  return (
    <div
      className={`image-detail w-full grid h-auto bg-gray-300 grid-rows-${Math.round(
        chosenItem?.image_paths?.length / 2
      )} gap-0 grid-cols-2`}
    >
      <div className="itemImage col-start-1 ">
        <img
          src={currentColor.ItemImage}
          alt="image-items"
          className="w-full "
        />
      </div>{" "}
      {chosenItem.image_paths.map(img => (
        <div className="itemImage " key={`${img}`}>
          <img src={img} alt="image-items" className="w-full " />
        </div>
      ))}
    </div>
  );
}

export default ImageDisplay;
