import React, { useEffect, useState } from "react";
import "boxicons";

function Sort({ items, setItems }) {
  const [sort, setSort] = useState("");
  //old to new
  const OldtoNew = () => {
    const result = [...items].sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
    console.log("result:", result);
    setItems(result);
  };
  //new to old
  const NewtoOld = () => {
    const result = [...items].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
    console.log("result:", result);
    setItems(result);
  };

  //low to high
  const LowtoHigh = () => {
    const result = [...items].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    console.log("result:", result);
    setItems(result);
  };
  //high to low
  const HightoLow = () => {
    const result = [...items].sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
    console.log("result:", result);
    setItems(result);
  };
  useEffect(() => {
    if (sort !== "") {
      if (sort === "Old") {
        OldtoNew();
      } else if (sort === "New") {
        NewtoOld();
      } else if (sort === "Low") {
        LowtoHigh();
      } else {
        HightoLow();
        console.log("sort:", sort);
      }
    }
  }, [sort]);
  return (
    <div className="w-20 bg-white font-bold flex gap-2 items-center">
      <div>
        {" "}
        <box-icon
          name="sort-alt-2"
          style={{ width: "30px", height: "30px", paddingTop: "5px" }}
        ></box-icon>
      </div>
      <select
        className=""
        name=""
        id=""
        onChange={e => setSort(e.target.value)}
      >
        <option value="">Sort</option>
        <option value="New">New to Old</option>
        <option value="Old">Old to New</option>
        <option value="High">High to Low</option>
        <option value="Low">Low to High</option>
      </select>
    </div>
  );
}

export default Sort;
