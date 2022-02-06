// src\components\FeedBackItem.jsx

import { useState} from "react";

function FeedBackItem() {

    // USE STATE
    const [rating, setRating] = useState(7);
    const [text, setText] = useState('This is an example of a feedback item');

    const handleClick = () =>{
        // Imposto il valore con la funzione
        setRating('10');
    }


  return <div className='card'>
      <div className="num-display">{rating}</div>
      <div className="text-diplay">{text}</div>
      <button onClick={handleClick} >Click</button>
  </div>;
}

export default FeedBackItem;
