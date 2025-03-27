import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { itemsContext } from "../Context/ItemProvider";
import { useNavigate } from "react-router-dom";

function Category() {
  const {
    setKeyWords,
    keywords,
    categories,
    topic,
    getCategory,
    visible,
    category,
    setCategory,
    getItems,
  } = useContext(itemsContext);
  const location = useLocation();
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();
  const HandleTransfer = value => {
    setKeyWords(value);
    setCategory(!category);
  };
  const HandleSearching = value => {
    const ValueToString = value.split(" ");
    if (ValueToString.length != 1) {
      setKeyWords(ValueToString.join(" & "));
    } else {
      setKeyWords(value);
    }
    setCategory(!category);
  };
  useEffect(() => {
    getCategory();
  }, []);
  useEffect(() => {
    if (location.pathname !== "/listing") {
      if (keywords !== "Men") {
        navigate("/listing");
      }
    } else {
      getItems(keywords);
    }
  }, [keywords]);

  function CategoryTopic(category) {
    if (category.category.tag === topic) {
      return (
        <div
          className={`${visible}  w-full text-lg text-white font-semibold flex gap-2 items-center p-5 rounded-md shadow-lg hover:inset-shadow-sm`}
          key={category.id}
          onClick={() => {
            const value =
              category.category.tag + " & " + category.category.title;
            HandleTransfer(value);
          }}
        >
          <div className="image-category">
            <img
              src={category.category.image_path}
              alt="category"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <div className="title-category drop-shadow-md">
            <p>{category.category.title}</p>
          </div>
        </div>
      );
    }
  }
  return (
    <div className="bg-gray-200 h-screen w-screen p-60 ">
      {categories?.length != 0 ? (
        <div className="grid grid-cols-3 grid-rows-4 gap-4 px-20 ">
          {categories?.map(category => (
            <React.Fragment>
              <CategoryTopic category={category} />
            </React.Fragment>
          ))}
          <div></div>
          <div className="search-bar row-start-4 h-10  w-full col-span-3 bg-white flex justify-center gap-4 ">
            <input
              type="text"
              alt="searchItem"
              placeholder="search by name, items number,..."
              className="p-2 w-4/5 rounded-lg border"
              onChange={e => setSearchItem(e.target.value)}
            />
            <button
              className="p-2 rounded-lg border text-black hover:inset-shadow-sm hover:text-white hover:font-bold"
              onClick={() => HandleSearching(searchItem)}
            >
              search
            </button>
          </div>
        </div>
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}

export default Category;
