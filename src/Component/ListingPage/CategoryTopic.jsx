import React, { useContext } from "react";
import { itemsContext } from "../../Context/ItemProvider";

function CategoryTopic({ category, HandleTransfer }) {
  const { topic } = useContext(itemsContext);
  if (category?.tag === topic) {
    return (
      <div
        className={`  w-full text-lg font-semibold flex gap-2 items-center p-5 rounded-md shadow-lg hover:inset-shadow-sm`}
        key={category.id}
        onClick={() => {
          const value = category?.tag + " & " + category?.title;
          HandleTransfer(value);
        }}
      >
        <div className="image-category">
          <img
            src={category?.image_path}
            alt="category"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div className="title-category drop-shadow-md">
          <p>{category?.title}</p>
        </div>
      </div>
    );
  }
}

export default CategoryTopic;
