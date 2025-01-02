import CheckboxList from "../checkbox/CheckboxList";
import Button from "./Button";
import "./Modal.css";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <CheckboxList />
        <hr className="divider" />
        <div className="button-container">
          <Button label="Done" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
