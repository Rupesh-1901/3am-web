import React from "react";
import Select from "react-select";

const CustomSelectSingle = (props) => {
  const { field, form, options, onDropdownOpen, disabled, onChangeProp } =
    props;

  return (
    <Select
      {...props}
      isDisabled={disabled}
      onMenuOpen={onDropdownOpen}
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
      isSearchable
      name={field.name}
      onBlur={field.onBlur}
      values={options?.filter((option) => option?.value === field?.value)}
      value={
        field.value !== "" &&
        options?.find((option) => option?.value === field?.value)
      }
      onChange={(option) =>
        onChangeProp
          ? onChangeProp(option)
          : form?.setFieldValue(field.name, option?.value)
      }
    />
  );
};

export { CustomSelectSingle };
