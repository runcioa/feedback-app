// src\context\FeedbackContext.jsx
import { createContext, useState, useEffect } from "react";

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
      const response = await fetch('/feedback?_sort=id&order=desc');

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

    const addFeedback = async (newFeedback) => {
      const response = await fetch('/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback)
      });

      const data = await response.json();

      setFeedback([data, ...feedback]);
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