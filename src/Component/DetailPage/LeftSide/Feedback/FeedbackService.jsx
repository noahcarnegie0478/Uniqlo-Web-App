import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userContext } from "../../../../Context/userProvider";
// import boxicons from "boxicons";

function FeedbackService({ item_id }) {
  const { user } = useContext(userContext);
  const [reviews, setReviews] = useState([]);
  const [reviewBox, setReviewBox] = useState(false);
  const [UserRating, setUserRating] = useState(0);
  const [UserComment, setUserComment] = useState("");

  console.log(user);
  var count = 0;
  const getReviewForItem = async () => {
    const result = await axios.post("http://localhost:3000/api/feedback/get", {
      item_id: item_id,
    });
    setReviews(result.data);
  };
  const StarDisplay = ({ rating = 0 }) => {
    const totalStars = 5;

    return (
      <div className="flex">
        {Array.from({ length: totalStars }).map((_, i) =>
          i < rating ? (
            <box-icon key={i} name="star" color="black" type="solid"></box-icon>
          ) : (
            <box-icon key={i} name="star" color="black"></box-icon>
          )
        )}
      </div>
    );
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
    if (user.length == 0) {
      alert("you need to login for review purpose");
    } else {
      setReviewBox(!reviewBox);
    }
  };
  const handleFeedbackSubmission = async () => {
    if (UserRating == 0 || UserComment == "") {
      alert("Please give feedback more properly!");
    } else {
      const result = await axios.post(
        "http://localhost:3000/api/feedback/create",
        {
          item_id: item_id,
          user_id: user.id,
          comment: UserComment,
          rating: UserRating,
          username: user.username,
        }
      );
      return result.data;
    }
  };
  useEffect(() => {
    getReviewForItem();
  }, []);

  return (
    <div className="reviews-section">
      {reviews.length == 0 ? (
        <p>We would love to hear more from you</p>
      ) : (
        <div className="reviews ">
          <div className="flex justify-between items-center border-b border-gray-500/80 ">
            <div className="flex items-center gap-5 ">
              <h3 className="py-3 text-2xl font-bold ">Reviews</h3>
              <span className="flex gap-2 items-center text-xl font-bold">
                {" "}
                {AverageFeedBack()}{" "}
                <box-icon name="star" color="black" type="solid"></box-icon>
              </span>
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

          {reviews.map((review, index) => (
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
          ))}
          <div className="feedback-typing">
            {reviewBox ? (
              <div className="feedback">
                <h3 className="text-xl font-bold my-3">
                  Please type your comment here:{" "}
                </h3>
                <div className="rating-chosen flex gap-5 items-center">
                  <p className="font-semibold text-lg">
                    How much do you satisfy with item ?
                  </p>
                  <select
                    className="border-2  px-2"
                    onChange={e => setUserRating(e.target.value)}
                  >
                    <option value="1"> I hate it</option>
                    <option value="2"> Not satisfy</option>
                    <option value="3"> Normal</option>
                    <option value="4"> I like it</option>
                    <option value="5"> It's amazing</option>
                  </select>
                </div>
                <div className="text-area">
                  <textarea
                    name="comment"
                    className="border-1 w-full my-5 text-md p-2"
                    onChange={e => setUserComment(e.target.value)}
                  >
                    Enter text here...
                  </textarea>
                </div>
                <span
                  className=" submit-comment px-10 bg-red-400 py-2 text-white font-bold hover:bg-red-600 active:bg-red-800"
                  onClick={() => handleFeedbackSubmission()}
                >
                  Submit comment
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default FeedbackService;
