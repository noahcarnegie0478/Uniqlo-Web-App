import React from "react";
import { useContext } from "react";
import { itemsContext } from "../Context/ItemProvider";

function Texting() {
  const { items, getItems, keywords } = useContext(itemsContext);
  console.log(items);
  console.log(keywords);
  return (
    <div>
      <button className="border-1" onClick={getItems}>
        Testing
      </button>
    </div>
  );
}

export default Texting;
