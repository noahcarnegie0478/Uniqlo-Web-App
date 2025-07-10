import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userContext } from "../../../../Context/userProvider";
import StarDisplay from "./StarDisplay";
import FeedbackCard from "./FeedbackCard";
import FeedbackForm from "./FeedbackForm";

function FeedbackService({ item_id }) {
  const { user } = useContext(userContext);
  const [reviews, setReviews] = useState([]);
  const [reviewBox, setReviewBox] = useState(false);
  const [UserRating, setUserRating] = useState(0);
  const [UserComment, setUserComment] = useState("");
  var count = 0;
  const getReviewForItem = async () => {
    const result = await axios.post(
      `${import.meta.env.VITE_PUBLISH_SERVER}/api/feedback/get`,
      {
        item_id: item_id,
      }
    );
    setReviews(result.data);
  };

  const AverageFeedBack = () => {
    if (reviews) {
      for (let i = 0; i < reviews.length; i++) {
        count += reviews[i].rating;
      }
      return count / reviews.length;
    } else {
      return "";
    }
  };
  const handleReviewTyping = () => {
    if (user == null) {
      alert("you need to login for review purpose");
    } else {
      setReviewBox(!reviewBox);
    }
  };
  const handleFeedbackSubmission = async () => {
    if (UserRating == 0 || UserComment == "") {
      alert("Please give feedback more properly!");
    } else {
      const token = await JSON.parse(localStorage.getItem("token"));
      const result = await axios.post(
        `${import.meta.env.VITE_PUBLISH_SERVER}/api/feedback/create`,
        {
          item_id: item_id,
          user_id: user.id,
          comment: UserComment,
          rating: UserRating,
          username: user.username,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setReviewBox(!reviewBox);
      alert(result.data + "!");
      getReviewForItem();
    }
  };
  useEffect(() => {
    getReviewForItem();
  }, []);

  return (
    <div className="reviews-section">
      <div className="flex justify-between items-center border-b border-gray-500/80 ">
        <div className="flex items-center gap-5 ">
          <h3 className="py-3 text-2xl font-bold ">Reviews</h3>
          {reviews.length !== 0 ? (
            <span className="flex gap-2 items-center text-xl font-bold">
              {" "}
              {AverageFeedBack()}{" "}
              <box-icon name="star" color="black" type="solid"></box-icon>
            </span>
          ) : (
            ""
          )}
        </div>
        <div
          className="write-review flex gap-2 items-center active:text-red-400"
          onClick={() => handleReviewTyping()}
        >
          <box-icon
            name="pen"
            color="black"
            type="solid"
            style={{ width: "17px" }}
          ></box-icon>
          <p className="text-lg">Write a review</p>
        </div>
      </div>
      {reviews.length == 0 ? (
        <p>We would love to hear more from you</p>
      ) : (
        <div className="reviews ">
          {reviews.map((review, index) => (
            <FeedbackCard review={review} index={index} />
          ))}
        </div>
      )}
      <div className="feedback-typing">
        {reviewBox ? (
          <FeedbackForm
            setUserRating={setUserRating}
            setUserComment={setUserComment}
            handleFeedbackSubmission={handleFeedbackSubmission}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default FeedbackService;
