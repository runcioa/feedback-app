// src\context\FeedbackContext.jsx
import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Creo il Context
const FeedbackContext = createContext();

// Creo il provider che distribuirà il contex
export const FeedbackProvider = ({children}) => {

  const [isLoading, setIsLoading] = useState(true);

    const [feedback, setFeedback] = useState([]);

    useEffect(()=>{
      fetchFeedback();
    },[]);

    const fetchFeedback = async () => {
      const response = await fetch('http://localhost:5000/feedback?_sort=id&order=desc');

      const data = await response.json();

      setFeedback(data);
      setIsLoading(false);
    }

    const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false
    })

    const deleteFeedback = (id) => {
      if (window.confirm("Are you sure you want to delete?")) {
        setFeedback(feedback.filter((item) => item.id !== id));
      }
    };

    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...feedback]);
    };

    const editFeedback = (item) => {
      setFeedbackEdit({
        item, 
        edit: true
      });
    }

    const updateFeedback = (id, updItem) => {
      setFeedback(
        feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
      )
    }

    return (
        <FeedbackContext.Provider
          value={{
            feedback,
            deleteFeedback,
            isLoading,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback
            }}>
          {children}
        </FeedbackContext.Provider>
      )
    }

export default FeedbackContext;