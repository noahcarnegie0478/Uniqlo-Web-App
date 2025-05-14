import React from "react";

function FeedbackForm({
  setUserRating,
  setUserComment,
  handleFeedbackSubmission,
}) {
  return (
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
          placeholder="Enter text here..."
        ></textarea>
      </div>
      <span
        className=" submit-comment px-10 bg-red-400 py-2 text-white font-bold hover:bg-red-600 active:bg-red-800"
        onClick={() => handleFeedbackSubmission()}
      >
        Submit comment
      </span>
    </div>
  );
}

export default FeedbackForm;
