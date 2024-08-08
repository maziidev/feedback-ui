import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";

import { useContext } from "react";
import FeedBackContext from "../context/FeedBackContext";

const FeedBackItem = ({ item }) => {
  const { deleteFeedBack, editFeedback } = useContext(FeedBackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedBack(item.id)} className="close">
        <FaTimes color="purple" size={18} />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedBackItem;
