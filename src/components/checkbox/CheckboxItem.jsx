import PropTypes from "prop-types";
import "./CheckboxItem.css";

const CheckboxItem = ({ label, checked, onChange }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") onChange();
  };

  return (
    <div
      className={`checkbox-item ${checked ? "checked" : ""}`}
      onClick={onChange}
      onKeyDown={handleKeyPress}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
    >
      <label className="label">{label}</label>
      <div className={`checkbox-icon ${checked ? "checked" : "unchecked"}`} />
    </div>
  );
};

CheckboxItem.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckboxItem;
