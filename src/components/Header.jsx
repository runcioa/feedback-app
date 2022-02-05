// src\components\Header.jsx

// Utilizzare l'emmet rfce

// Utilizzo dei Prototypes

import PropTypes from "prop-types";

function Header({text}) {
  return (
  <header>
      <div className="container">
          <h2>Feedback UI {text}</h2>
      </div>
  </header>);
}

Header.defaultProps = {
    text: 'Feedback UI',
}

Header.propTypes = {
    text: PropTypes.string.isRequired
}

export default Header;
