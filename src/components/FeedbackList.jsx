// src\components\FeedbackList.jsx

import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import FeedBackItem from './FeedBackItem';

function FeedbackList({feedBack, handleDelete}) {

  if (!feedBack || feedBack.length === 0){
    return <p>No Feedback Yet</p>
  }


return <div className='feedback-list'>
{feedBack.map((item)=>(
  <FeedBackItem key={item.id} item={item} handleDelete={handleDelete}/>
))}
</div>;
}

export default FeedbackList;
