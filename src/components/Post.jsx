// src\components\Post.jsx

import React from "react";
import {Navigate, useNavigate} from "react-router-dom";

function Post() {

    const navigate = useNavigate();

    const onClick = ()=> {
        navigate('/about');
    }

  return (
    <div>
      <h1>Post </h1>
      <button onClick={onClick} >About</button>
    </div>
  );
}

export default Post;
