// src\components\FeedBackItem.jsx

import { FaTimes } from "react-icons/fa";

import Card from "./shared/Card";

function FeedBackItem({ item, handleDelete }) {

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-diplay">{item.text}</div>
    </Card>
  );
}

export default FeedBackItem;
