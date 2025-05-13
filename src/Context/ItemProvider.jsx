import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const itemsContext = createContext();
export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [chosenItem, setChosenItem] = useState({});
  const [keywords, setKeyWords] = useState("Men");
  const [topic, setTopic] = useState("Men");
  const [category, setCategory] = useState(false);
  const [categories, setCategories] = useState([]);
  const [banners, setBanner] = useState([]);

  const getItems = async () => {
    const result = await axios.post("http://localhost:3000/api/item/fulltext", {
      input: keywords,
    });

    setItems(result.data);
  };

  const getCategory = async () => {
    const result = await axios.get("http://localhost:3000/api/category");
    setCategories(result.data);
  };

  const fetchBanner = async () => {
    const result = await axios.get("http://localhost:3000/api/banner/");
    setBanner(result.data);
  };

  return (
    <itemsContext.Provider
      value={{
        items,
        keywords,
        getItems,
        setItems,
        setKeyWords,
        topic,
        setTopic,
        category,
        setCategory,
        categories,
        setCategories,
        getCategory,
        banners,
        fetchBanner,
        chosenItem,
        setChosenItem,
      }}
    >
      {children}
    </itemsContext.Provider>
  );
};
export default ItemProvider;
