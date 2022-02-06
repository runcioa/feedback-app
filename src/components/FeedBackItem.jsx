// src\components\FeedBackItem.jsx

function FeedBackItem({ item }) {
  console.log(item);
  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-diplay">{item.text}</div>
    </div>
  );
}

export default FeedBackItem;
