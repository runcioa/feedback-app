// src\context\FeedbackContext.jsx
import { createContext, useState } from "react";

// Creo il Context
const FeedbackContext = createContext();

// Creo il provider che distribuirà il contex
export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([{
        id: 1,
        text: 'this is 1 item context',
        rating: 10
    }]);

    return (
        <FeedbackContext.Provider
          value={{feedback}}>
          {children}
        </FeedbackContext.Provider>
      )
    }

export default FeedbackContext;