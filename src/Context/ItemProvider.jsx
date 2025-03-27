import React from "react";
import { createContext, useContext, useState } from "react";
import axios from "axios";

export const itemsContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [keywords, setKeyWords] = useState("Jean");

  const getItems = async () => {
    const result = await axios.post("http://localhost:3000/api/item/fulltext", {
      input: keywords,
    });

    setItems(result.data);
    console.log(items);
  };
  return (
    <itemsContext.Provider
      value={{ items, keywords, getItems, setItems, setKeyWords }}
    >
      {children}
    </itemsContext.Provider>
  );
};
export default ItemProvider;
