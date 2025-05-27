import React, { useContext, useState } from "react";
import { userContext } from "../../Context/userProvider";
import { Link } from "react-router-dom";
import { itemsContext } from "../../Context/ItemProvider";
import Image from "./CardElement/CardImage";
import CardColour from "./CardElement/CardColour";

function Card({ item }) {
  const { updateFavourite } = useContext(userContext);
  const { setChosenItem } = useContext(itemsContext);
  const [currentCardColor, setCurrentCardColor] = useState(item.colors[0]);

  const handleFavourite = () => {
    updateFavourite(item.item_id);
  };

  return (
    <div
      className={`card-item ${item.item_id}  bg-white grid grid-rows-3 w-80 grid-flow-row hover:drop-shadow-xl  `}
      key={item.item_id}
    >
      {/* image  */}
      <Image
        item={item}
        currentCardColor={currentCardColor}
        setCurrentCardColor={setCurrentCardColor}
      />

      <div className="detail-item p-1">
        {/* colour */}
        <div className="first-line flex justify-between items-center">
          <CardColour item={item} setCurrentCardColor={setCurrentCardColor} />
          {/* favourite */}
          <div className="favourite-icon" onClick={handleFavourite}>
            <box-icon
              name="heart"
              style={{ width: "35px", height: "35px" }}
            ></box-icon>
          </div>
        </div>
        {/* topic  */}
        {/* sizes  */}
        <div className="second-line  flex justify-between   ">
          <div className="topic">
            <p className="uppercase text-xl">{item.topic}</p>
          </div>

          <div className="sizes">
            <p className="text-xl ">
              {" "}
              {item.sizes[0]} - {item.sizes[item.sizes.length - 1]}
            </p>
          </div>
        </div>
        <Link
          to={{
            pathname: `/item/${item.item_id}`,
          }}
        >
          <div className="title">
            <p
              className=" text-lg hover:font-bold active:text-red-200"
              onClick={() => setChosenItem(item)}
            >
              {item.title}
            </p>
          </div>
        </Link>
        <div className="price py-1">
          <p className=" uppercase text-xl">${item.price}</p>
        </div>
        <div className="rate py-1 flex gap-1 items-center">
          <box-icon
            name="star"
            type="solid"
            style={{ width: "20px", height: "20px" }}
          ></box-icon>
          <p className=" text-md font-bold">{item.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
