// src\components\Post.jsx

import React from 'react';
import {useParams} from 'react-router-dom';

function Post() {
    const params = useParams();


  return <div>
      {/* l'url deve essere http://localhost:3000/post/200/Antonio */}
      <h1>Post {params.id}</h1>
      <h1>Post {params.name}</h1>
  </div>;
}

export default Post;
