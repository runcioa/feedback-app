// src\components\FeedbackList.jsx

//Importo il context 
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

import FeedBackItem from './FeedBackItem';


function FeedbackList() {

  // Recupero il context
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0){
    return <p>No Feedback Yet</p>
  }


return <div className='feedback-list'>
{feedback.map((item)=>(
  <FeedBackItem key={item.id} item={item} />
))}
</div>;
}

export default FeedbackList;
