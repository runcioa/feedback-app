// src\App.js

const App = () => {
  const title = "BLOG POST";

  const body = "This is my blog post";

  const comments = [
    { id: 1, text: "Comment one" },
    { id: 2, text: "Comment two" },
    { id: 3, text: "Comment three" },
  ];

  //   Esecuzione condizionale
  const loading = false;
  if (loading) return <h1>Loading....</h1>;

  const showcomments = true;

  const commentBlock = (
    <ul>
      {/* Faccio il map per ottenere la lista degli elementi dall'array */}
      {comments.map((comment, index) => (
        <li key={index}>{comment.text}</li>
      ))}
    </ul>
  );

  return (
    //   Uso dei fragment
    <>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      <h3>Comments ({comments.length})</h3>

      {/* Utilizzo l'istruzione AND per fare una visualizzazione condizionale */}
      {showcomments && commentBlock}
    </>
  );
};

export default App;
