import React from "react";
import { useEffect } from "react";
import Select from "react-select";
export const CustomSelect = (props) => {
  const { field, form, options, disabled } = props;
  const onChange = (option) => {
    form.setFieldValue(
      field.name,
      option.map((item) => item.value)
    );
  };
  console.log("object field.value", field.value);
  return (
    <Select
      isDisabled={disabled}
      closeOnScroll={true}
      {...props}
      menuShouldBlockScroll={true}
      menuPortalTarget={document.body}
      color={"#1296b038"}
      className="react-select-container"
      classNamePrefix="react-select"
      options={options}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "var(--primary-hover)",
          primary: "var(--primary)",
          primary50: "var(--primary-hover)",
        },
      })}
      isClearable={false}
      name={field.name}
      onBlur={field.onBlur}
      isMulti
      value={options?.filter(
        (option) => field?.value?.indexOf(option.value) >= 0
      )}
      onChange={onChange}
    />
  );
};
export default CustomSelect;
