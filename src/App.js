// src\App.js
import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedBackData";
import FeedbackList from "./components/FeedbackList";

const App = () => {
  const [feedback, setFeedback] = useState (
    FeedbackData
  );

  return (

    <>
        {/* Utilizzare i props per passere le informazioni */}
      <Header />
      <div className="container">
        <FeedbackList feedBack={feedback}/>
      </div>
    </>
  );
};

export default App;
