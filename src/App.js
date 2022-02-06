// src\App.js
import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedBackData";
import FeedbackList from "./components/FeedbackList";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      {/* Utilizzare i props per passere le informazioni */}
      <Header />
      <div className="container">
        <FeedbackList feedBack={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
