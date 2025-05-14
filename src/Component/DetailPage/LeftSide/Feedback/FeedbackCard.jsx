import React from "react";
import StarDisplay from "./StarDisplay";

function FeedbackCard({ review, index }) {
  return (
    <div
      className="review my-2 border-b border-gray-500/80 py-2 px-3 "
      key={`review` + index}
    >
      <div className="flex  gap-5 items-center  ">
        <p className="font-bold text-xl uppercase">{review.username}</p>
        <div className="review">
          <StarDisplay rating={review.rating} />
        </div>
      </div>

      <p className="text-lg"> {review.comment}</p>
    </div>
  );
}

export default FeedbackCard;
