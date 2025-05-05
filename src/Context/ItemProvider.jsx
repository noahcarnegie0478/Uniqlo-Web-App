import React, { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";

export const itemsContext = createContext();
export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [keywords, setKeyWords] = useState("Men");
  const [topic, setTopic] = useState("Men");
  const [category, setCategory] = useState(false);
  const [categories, setCategories] = useState([]);
  const [banners, setBanner] = useState([]);
  const [favourite, setFavourite] = useState([]);

  const getItems = async () => {
    const result = await axios.post(
      "https://3.27.236.182:4000/api/item/fulltext",
      {
        input: keywords,
      }
    );

    setItems(result.data);
  };

  const getCategory = async () => {
    const result = await axios.get("https://3.27.236.182:4000/api/category");
    setCategories(result.data);
  };

  const fetchBanner = async () => {
    const result = await axios.get("https://3.27.236.182:4000/api/banner/");
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
      }}
    >
      {children}
    </itemsContext.Provider>
  );
};
export default ItemProvider;
