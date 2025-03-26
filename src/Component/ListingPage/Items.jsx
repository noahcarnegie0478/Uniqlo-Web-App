import React, { useEffect, useState } from "react";
import axios from "axios";
import "boxicons";
import Card from "./card";

function Items({ items, setItems }) {
  const [keywords, setKeyWords] = useState("Jean");

  const getItems = async () => {
    const result = await axios.post("http://localhost:3000/api/item/fulltext", {
      input: keywords,
    });
    setItems(result.data);
  };
  const checkCategory = () => {};

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className=" row-start-2 row-end-5 px-50 text-black ">
      <div className="  h-full ">
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
