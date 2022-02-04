// src\components\Header.jsx

// Utilizzare l'emmet rfce


function Header(props) {
  return (
  <header>
      <div className="container">
          <h2>Feedback UI {props.text}</h2>
      </div>
  </header>);
}

export default Header;
