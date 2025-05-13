import React from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

function DescriptionDetail({ chosenItem }) {
  return (
    <div className="mt-10">
      <h3 className="text-4xl mb-3">Description: </h3>
      <p className=" ml-4 text-lg py-2 font-semibold">
        Product ID: {chosenItem.item_id}
      </p>
      <div classNameNameName="acordian-choices w-full">
        <Accordion>
          <AccordionItem
            header={
              // text-start
              <div
                className="
              bg-gray-100 h-15 p-4 w-full text-lg flex justify-between hover:bg-gray-100 active:bg-gray-200"
              >
                <p> Features</p>
                <box-icon name="chevron-down"></box-icon>
              </div>
            }
            className="w-full "
          >
            <div
              className={`w-full bg-white flex flex-wrap justify-between h-auto px-2 pt-3`}
            >
              {chosenItem.feature_details.map((feature, index) => (
                <div
                  className="featureItem flex w-1/2 gap-4 "
                  key={"feature" + index}
                >
                  {" "}
                  <img
                    src={feature.featureImage}
                    attribute="featureImage"
                    className="w-2/3 h-auto mb-2"
                  />
                  <p>{feature.featureDescription}</p>
                </div>
              ))}
            </div>
          </AccordionItem>
          <AccordionItem
            header={
              // text-start
              <div
                className="
              bg-gray-100 h-15 p-4 w-full text-lg flex justify-between hover:bg-gray-100 active:bg-gray-200"
              >
                <p> Details</p>
                <box-icon name="chevron-down"></box-icon>
              </div>
            }
            className="w-full "
          >
            <div
              className={`w-full bg-white justify-between h-auto px-10 py-3 `}
            >
              <div className="washing">
                <h4 className="font-bold text-lg"> Washing Instruction:</h4>
                <p className="ml-3"> - {chosenItem.washing_instruction}</p>
              </div>
              <div className="fabric">
                <h4 className="font-bold text-lg"> Fabric:</h4>
                <p className="ml-3"> - {chosenItem.fabric_detail}</p>
              </div>
              <div className="rating">
                <h4 className="font-bold text-lg"> Rating:</h4>
                <p className="ml-3"> - {chosenItem.rating}/5</p>
              </div>
              <div className="itm-id">
                <span className="font-bold text-lg"> Item_ID:</span>
                <p className="ml-3"> - {chosenItem.item_id}</p>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default DescriptionDetail;
