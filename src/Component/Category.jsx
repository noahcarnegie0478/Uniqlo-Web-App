import React, { useContext, useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { itemsContext } from "../Context/ItemProvider";
import { useNavigate } from "react-router-dom";
import CategoryTopic from "./ListingPage/CategoryTopic";

function Category() {
  const {
    setKeyWords,
    keywords,
    categories,
    getCategory,
    category,
    setCategory,
    getItems,
  } = useContext(itemsContext);
  const location = useLocation();
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();
  const HandleTransfer = value => {
    setKeyWords(value);
    ChangeLocation();
  };
  const ChangeLocation = async () => {
    const toCompare = await keywords;
    if (location.pathname !== "/listing") {
      if (toCompare !== "Men") {
        navigate("/listing");
        setCategory(!category);
      }
    } else {
      getItems(keywords);
      setCategory(!category);
    }
  };

  const HandleSearching = value => {
    const ValueToString = value.split(" ");
    if (ValueToString.length != 1) {
      setKeyWords(ValueToString.join(" & "));
    } else {
      setKeyWords(value);
    }
    ChangeLocation();
  };
  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="  h-screen w-screen p-60 text-black">
      {categories?.length != 0 ? (
        <div className="grid grid-cols-3 grid-rows-4 gap-4 px-20 ">
          {categories?.map(category => (
            <CategoryTopic
              category={category}
              HandleTransfer={HandleTransfer}
            />
          ))}

          <div className="search-bar row-start-4 h-10  w-full col-span-3 bg-white flex justify-center gap-4 ">
            <div className="p-2 w-full rounded-lg  border-1">
              <input
                type="text"
                alt="searchItem"
                placeholder="search by keyword"
                className="w-full h-full py-2"
                onChange={e => setSearchItem(e.target.value)}
              />
            </div>
            <button
              className="p-2 rounded-lg border text-black hover:inset-shadow-sm hover:text-white hover:font-bold active:bg-black active:text-white"
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
