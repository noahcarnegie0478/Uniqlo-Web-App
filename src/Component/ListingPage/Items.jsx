import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "boxicons";
import Card from "./Card";
import { itemsContext } from "../../Context/ItemProvider";

function Items() {
  const { items, getItems } = useContext(itemsContext);

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className=" row-start-2 row-end-5 px-50 text-black ">
      <div className=" ">
        {items.length != 0 ? (
          <div className="grid grid-cols-4 gap-2 ">
            {items.map(item => (
              <Card item={item} />
            ))}
          </div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
}

export default Items;
