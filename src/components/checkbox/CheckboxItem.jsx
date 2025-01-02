import PropTypes from "prop-types";
import "./CheckboxItem.css";

const CheckboxItem = ({ label, checked, onChange }) => {
  return (
    <div className="checkbox-item">
      <label className="label">{label}</label>
      <input
        type="checkbox"
        className="box"
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

CheckboxItem.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckboxItem;
