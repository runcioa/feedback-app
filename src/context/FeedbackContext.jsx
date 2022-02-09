// src\context\FeedbackContext.jsx
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Creo il Context
const FeedbackContext = createContext();

// Creo il provider che distribuirà il contex
export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([{
        id: 1,
        text: 'this is 1 item context',
        rating: 10
    },
    {
      id: 2,
      text: 'this is 2 item context',
      rating: 8
  },
  {
    id: 3,
    text: 'this is 3 item context',
    rating: 7
}]);

    const deleteFeedback = (id) => {
      if (window.confirm("Are you sure you want to delete?")) {
        setFeedback(feedback.filter((item) => item.id !== id));
      }
    };

    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...feedback]);
    };

    return (
        <FeedbackContext.Provider
          value={{
            feedback,
            deleteFeedback,
            addFeedback,
            }}>
          {children}
        </FeedbackContext.Provider>
      )
    }

export default FeedbackContext;