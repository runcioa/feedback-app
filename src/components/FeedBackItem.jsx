// src\components\FeedBackItem.jsx

import Card from "./shared/Card";

function FeedBackItem({ item }) {
  console.log(item);
  return (
    <Card reverse = {true}>
      <div className="num-display">{item.rating}</div>
      <div className="text-diplay">{item.text}</div>
    </Card>
  );
}

export default FeedBackItem;
