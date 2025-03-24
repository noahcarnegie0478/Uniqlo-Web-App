import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png";

function Category({ topic }) {
  const [categories, setCategories] = useState([]);
  const getCategory = async () => {
    const result = await axios.get("http://localhost:3000/api/category");
    setCategories(result.data);
  };
  useEffect(() => {
    getCategory();
  }, []);
  function CategoryTopic(category) {
    console.log();
    if (category.category.tag === topic) {
      return (
        <div
          className="w-full text-lg text-white font-semibold flex gap-2 items-center p-5 rounded-md shadow-lg hover:inset-shadow-sm"
          key={category.id}
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
      {categories.length != 0 ? (
        <div className="grid grid-cols-3 grid-rows-4 gap-4 px-20 ">
          {categories.map(category => (
            // <div
            //   className="bg-red-200 w-full text-lg font-semibold flex gap-2 items-center"
            //   key={category.id}
            // >
            //   <div className="image-category">
            //     <img
            //       src={category.image_path}
            //       alt="category"
            //       style={{ width: "100px", height: "100px" }}
            //     />
            //   </div>
            //   <div className="title-category">
            //     <p>{category.title}</p>
            //   </div>
            // </div>
            <React.Fragment>
              <CategoryTopic category={category} />
            </React.Fragment>
          ))}
          <div></div>
          <div className="search-bar row-start-4 h-10  w-full  col-start-1 col-end-4 flex justify-center gap-4 ">
            <input
              type="text"
              alt="searchItem"
              placeholder="search by name, items number,..."
              className="p-2 w-2/5 rounded-lg border"
            />
            <button className="p-2 rounded-lg border text-black hover:inset-shadow-sm hover:text-white hover:font-bold">
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
