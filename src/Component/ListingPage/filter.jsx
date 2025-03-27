import React, { useContext, useState } from "react";
import axios from "axios";
import "boxicons";
import { itemsContext } from "../../Context/ItemProvider";
function Filter() {
  const { setItems } = useContext(itemsContext);
  const [input, setInput] = useState({
    colors: "*",
    material: "*",
    price: "*",
  });
  const submitFilter = async () => {
    const result = await axios.post("http://localhost:3000/api/item/filter", {
      colors: input.colors,
      material: input.material,
      price: input.price,
    });
    setItems(result.data);
  };
  return (
    <div className="filter text-black font-bold sticky top-5">
      <div className="filter-form py-5 flex gap-4 items-center">
        <div className="rounded-full  ">
          <div className=" p-1 pl-2  ">
            <box-icon
              name="slider"
              style={{ width: "30px", height: "30px" }}
            ></box-icon>
          </div>
        </div>
        <div className="material h-10 w-30 rounded-full text-center">
          <select
            className="w-full p-1 pl-2 rounded-full bg-white border-1 hover:bg-gray-200"
            name=""
            id=""
            onChange={e =>
              setInput(prev => ({ ...prev, material: e.target.value }))
            }
          >
            <option value="*">Material</option>
            <option value="cotton">Cotton</option>
            <option value="airism">Airism</option>
            <option value="jean">Jean</option>
          </select>
        </div>
        <div className="colour w-30 rounded-full">
          <select
            className="w-full rounded-full p-1 pl-2 bg-white border-1 hover:bg-gray-200"
            name=""
            id=""
            onChange={e =>
              setInput(prev => ({ ...prev, colors: e.target.value }))
            }
          >
            <option value="*">Colours</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="gray">Gray</option>
          </select>
        </div>
        <div className="price  w-30 rounded-full">
          <select
            className="w-full rounded-full p-1 pl-2 rounded bg-white border-1"
            name=""
            id=""
            onChange={e =>
              setInput(prev => ({ ...prev, price: e.target.value }))
            }
          >
            <option value="*">Price</option>
            <option value="0 - 49.99">$0 - $49.99</option>
            <option value="50.0 - 79.99">$50 - $79.99</option>
            <option value="80.0 - 129.99">$80 - $129.99</option>
          </select>
        </div>
        <div className="w-30 rounded-full  ">
          <div className="w-full rounded-full p-1 pl-2 bg-white border-1 rounded-full hover:bg-gray-200 active:bg-gray-300">
            <span onClick={() => submitFilter()}>Filter</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
