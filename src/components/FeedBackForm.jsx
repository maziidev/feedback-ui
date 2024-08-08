import React, { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import FeedBackContext from "../context/FeedBackContext";

const FeedBackForm = ({}) => {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedBackContext);

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
        setText("");
      } else {
        addFeedback(newFeedback);
        setText("");
      }
      setText("");
    }
  };
  return (
    <Card>
      <form action="" onSubmit={handleSubmit}>
        <h2>How would you rate your experince with us</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            name=""
            id=""
            value={text}
            placeholder="write a review"
          />
          <button className="btn btn-secondary" disabled={btnDisabled}>
            send
          </button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedBackForm;
