import React from "react";
import PropTypes from "prop-types";

const Header = ({ text }) => {
  return (
    <header style={{ background: "#16172e" }}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

// Header.defaultProps = {
//   text: "Feedback UI",
// };

// Header.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default Header;
