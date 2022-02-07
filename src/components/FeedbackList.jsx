// src\components\FeedbackList.jsx

import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import FeedBackItem from './FeedBackItem';

function FeedbackList({feedBack, handleDelete}) {

  if (!feedBack || feedBack.length === 0){
    return <p>No Feedback Yet</p>
  }

  return <div className='feedback-list'>
      <AnimatePresence>
      {feedBack.map((item)=>(
        <motion.div 
        key={item.id}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
          
        <FeedBackItem key={item.id} item={item} handleDelete={handleDelete}/>
        </motion.div>
      ))}
      </AnimatePresence>
  </div>;

// return <div className='feedback-list'>
// {feedBack.map((item)=>(
//   <FeedBackItem key={item.id} item={item} handleDelete={handleDelete}/>
// ))}
// </div>;
}

export default FeedbackList;
