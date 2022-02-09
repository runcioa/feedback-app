// src\components\FeedBackItem.jsx
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

import Card from "./shared/Card";

function FeedBackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-diplay">{item.text}</div>
    </Card>
  );
}

export default FeedBackItem;
