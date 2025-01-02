import React, { useState } from "react";
import CheckboxItem from "./CheckboxItem";
import "./CheckboxList.css";

const CheckboxList = () => {
  const [items, setItems] = useState([
    { label: "All pages", checked: false },
    { label: "Page 1", checked: false },
    { label: "Page 2", checked: false },
    { label: "Page 3", checked: false },
    { label: "Page 4", checked: false },
  ]);

  const handleCheckboxChange = (index) => {
    const updatedItems = [...items];
    if (index === 0) {
      const allChecked = !updatedItems[0].checked;
      updatedItems.forEach((item) => (item.checked = allChecked));
    } else {
      updatedItems[index].checked = !updatedItems[index].checked;
      updatedItems[0].checked = updatedItems
        .slice(1)
        .every((item) => item.checked);
    }
    setItems(updatedItems);
  };

  return (
    <div className="checkbox-list">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <CheckboxItem
            label={item.label}
            checked={item.checked}
            onChange={() => handleCheckboxChange(index)}
          />
          {index === 0 && <hr className="divider" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CheckboxList;
