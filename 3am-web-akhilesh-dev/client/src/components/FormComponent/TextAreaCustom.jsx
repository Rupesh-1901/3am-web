import React from "react";
import "./FormComponent.css";
const TextAreaCustom = (props) => {
  const { name, onChange, placeholder, value, className } = props;
  return (
    <textarea
      className={className ?? "input-longtext"}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      style={{ minWidth: "120px" }}
      {...props}
    />
  );
};
export { TextAreaCustom };
