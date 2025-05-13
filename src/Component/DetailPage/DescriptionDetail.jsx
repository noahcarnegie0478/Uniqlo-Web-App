import React from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

const items = [
  {
    header: "What is Lorem Ipsum?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
  },
  {
    header: "Where does it come from?",
    content: "Quisque eget luctus mi, vehicula mollis lorem...",
  },
  {
    header: "Why do we use it?",
    content: "Suspendisse massa risus, pretium id interdum in...",
  },
];

function DescriptionDetail({ chosenItem }) {
  return (
    <div>
      DescriptionDetail
      <div classNameNameName="acordian-choices w-full">
        <Accordion>
          <AccordionItem
            header={
              // text-start
              <div
                className="
              bg-gray-300 h-15 p-4 w-full text-lg flex justify-between hover:bg-gray-200"
              >
                <p> Features</p>
                <box-icon name="chevron-down"></box-icon>
              </div>
            }
            className="w-full "
          >
            <div
              className={`w-full bg-gray-200 flex flex-wrap justify-between h-auto px-2 pt-3`}
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
        </Accordion>
      </div>
      {/* <Accordion>
        {items.map(({ header, content }, i) => (
          <AccordionItem header={header} key={i}>
            {content}
          </AccordionItem>
        ))}
      </Accordion> */}
    </div>
  );
}

export default DescriptionDetail;
