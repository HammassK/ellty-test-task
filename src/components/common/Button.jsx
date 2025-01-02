import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ label, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.any,
  onClick: PropTypes.any,
};

export default Button;
