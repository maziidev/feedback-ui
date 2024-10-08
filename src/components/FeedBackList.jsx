import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedBackItem from "./FeedBackItem";

import FeedBackContext from "../context/FeedBackContext";
import Spinner from "./shared/Spinner";

const FeedBackList = ({}) => {
  const { feedback, isLoading } = useContext(FeedBackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  // return (
  // <div className="feedback-list">
  {
    /* {feedback.map((item) => (
        <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))} */
  }
  // </div>
  // );
};

export default FeedBackList;
