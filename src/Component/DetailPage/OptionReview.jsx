import React, { useEffect, useState } from "react";

function OptionReview({ chosenItem }) {
  const [currentColor, setCurrentColor] = useState({});
  const [currentSize, setCurrentSize] = useState("XS");
  const [cartCount, setCartCount] = useState(0);

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
      <div className="title-favourite flex justify-between items-center my-5 ">
        <p className="text-2xl font-semibold w-1/2">{chosenItem.title}</p>
        <box-icon
          name="heart"
          style={{ width: "40px", height: "40px" }}
        ></box-icon>
      </div>
      {/* color */}
      {currentColor ? (
        <div className=" relative color-items flex gap-3 mt-5 h-20">
          <div
            style={{
              width: "40px",
              height: "40px",
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
      {/* sizes */}
      <div className=" relative flex gap-4 h-17 my-5 ">
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
      {/* rating */}
      {/* price */}
      <div className="price-item my-5 ">
        <p className="font-bold text-4xl mt-2">${chosenItem.price}</p>
      </div>
      {/* add to cart */}

      <div className="cart-item w-full my-5 ">
        {/* count cart*/}
        <div className="cart-counter grid grid-cols-3 w-2/5 mt-3 text-xl rounded-3xl bg-gray-300 text-center  h-auto">
          <span
            className=" text-center rounded-s-3xl py-3 font-semibold bg-gray-400 active:bg-gray-200"
            onClick={() =>
              cartCount <= 0 ? "nothing change" : setCartCount(cartCount - 1)
            }
          >
            {" "}
            -{" "}
          </span>
          <p className="py-3 text-center">{cartCount}</p>
          <span
            className=" py-3 text-center rounded-r-3xl bg-gray-400 active:bg-gray-200"
            onClick={() => setCartCount(cartCount + 1)}
          >
            {" "}
            +{" "}
          </span>
        </div>

        {/* addtoCart cart*/}
        <div className="add-to-cart-btn mt-7 w-full  ">
          <button className="text-center w-full  bg-black text-white h-14 rounded-4xl font-light text-xl active:bg-gray-700">
            {" "}
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default OptionReview;
