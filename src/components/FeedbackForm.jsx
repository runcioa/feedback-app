// src\components\FeedbackForm.jsx

import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (event) => {
      if (text === '') {
          setBtnDisabled(true);
          setMessage(null);
      } else if(text !== '' && text.trim().length <=10){
          setMessage('Text must be al least 10 character');
          setBtnDisabled(true);
      } else {
          setMessage(null);
          setBtnDisabled(false);
      }
    setText(event.target.value);
  };

  return (
    <Card>
      <form>
        <h2>ahdkajdkjsa</h2>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
