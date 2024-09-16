import React from "react";
import "./FormComponent.css";
import { useEffect } from "react";
const InputCustom = (props) => {
  const {
    disabled,
    name,
    onChange,
    placeholder,
    value,
    onBlur,
    type = "text",
    classStyle,
  } = props;

  return (
    <div>
      <input
        className={`input-shorttext ${classStyle}`}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        onBlur={onBlur}
        value={value}
        {...props}
      />
    </div>
  );
};
export { InputCustom };
