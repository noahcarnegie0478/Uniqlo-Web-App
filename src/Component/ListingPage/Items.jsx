import React, { useEffect, useState } from "react";
import axios from "axios";
import "boxicons";
import Card from "./card";

function Items() {
  const [items, setItems] = useState([]);
  const [keywords, setKeyWords] = useState("Men");

  const getItems = async () => {
    const result = await axios.post("http://localhost:3000/api/item/fulltext", {
      input: keywords,
    });
    setItems(result.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="bg-green-200 row-start-2 row-end-5 px-50 text-black ">
      <div className=" bg-blue-300 h-full ">
        {items.length != 0 ? (
          <div className="grid grid-cols-4 gap-2 ">
            {items.map(item => (
              //   <div
              //     className={`card-item ${item.item_id}  bg-white grid grid-rows-3 w-80 grid-flow-row hover:drop-shadow-xl  `}
              //     key={item.item_id}
              //   >
              //     {/* image  */}
              //     <div className="image-item row-start-1 row-end-3 hover:drop-shadow-lg">
              //       <img src={item.image_paths[0]} alt="image-item" />
              //     </div>
              //     <div className="detail-item p-1">
              //       {/* colour */}
              //       <div className="first-line flex justify-between items-center">
              //         <div className="colour-item flex gap-2 ">
              //           {item.colors.map(color => (
              //             <div
              //               style={{
              //                 width: "30px",
              //                 height: "30px",
              //                 backgroundColor: color.colorImg,
              //                 borderRadius: "20px",
              //               }}
              //             ></div>
              //           ))}
              //         </div>
              //         <div className="favourite-icon">
              //           <box-icon
              //             name="heart"
              //             style={{ width: "35px", height: "35px" }}
              //           ></box-icon>
              //         </div>
              //       </div>
              //       {/* topic  */}
              //       {/* sizes  */}
              //       <div className="second-line  flex justify-between   ">
              //         <div className="topic">
              //           <p className="uppercase text-xl">{item.topic}</p>
              //         </div>
              //         <div className="sizes">
              //           <p className="text-xl ">
              //             {" "}
              //             {item.sizes[0]} - {item.sizes[item.sizes.length - 1]}
              //           </p>
              //         </div>
              //       </div>
              //       <div className="title">
              //         <p className=" text-lg">{item.title}</p>
              //       </div>
              //       <div className="price py-1">
              //         <p className=" uppercase text-xl">${item.price}</p>
              //       </div>
              //       <div className="rate py-1 flex gap-1 items-center">
              //         <box-icon
              //           name="star"
              //           type="solid"
              //           style={{ width: "20px", height: "20px" }}
              //         ></box-icon>
              //         <p className=" text-md font-bold">{item.rating}</p>
              //       </div>
              //     </div>

              //     {/* ten  */}

              //     {/* gia  */}
              //     {/* rate */}
              //   </div>
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
