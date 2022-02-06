// src\components\FeedbackList.jsx

import React from 'react';
import FeedBackItem from './FeedBackItem';

function FeedbackList({feedBack}) {

  if (!feedBack || feedBack.length === 0){
    return <p>No Feedback Yet</p>
  }

  return <div className='feedback-list'>
      {feedBack.map((item)=>(
        <FeedBackItem key={item.id} item={item} />
      ))}
  </div>;
}

export default FeedbackList;
