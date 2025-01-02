import { useState } from "react";
import CheckboxItem from "./CheckboxItem";
import "./CheckboxList.css";

const CheckboxList = () => {
  const [items, setItems] = useState([
    { label: "All pages", checked: false },
    { label: "Page 1", checked: false },
    { label: "Page 2", checked: false },
    { label: "Page 3", checked: false },
    { label: "Page 4", checked: false },
    { label: "Page 5", checked: false },
    { label: "Page 6", checked: false },
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
      <CheckboxItem
        label={items?.[0]?.label}
        checked={items?.[0]?.checked}
        onChange={() => handleCheckboxChange(0)}
      />
      <div className="list">
        {items.slice(1, 7).map((item, index) => (
          <CheckboxItem
            key={index}
            label={item.label}
            checked={item.checked}
            onChange={() => handleCheckboxChange(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckboxList;
