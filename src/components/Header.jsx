// src\components\Header.jsx

import PropTypes from "prop-types";

function Header({ text }) {
  // Definzione dello stile in linea
  const headerStyle = {
    backgroundColor: "blue",
    color: "red",
  };

  return (
    //   On line style
    <header style={headerStyle}>
      <div className="container">
        <h2>Feedback UI {text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
