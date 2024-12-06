import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Select from "react-dropdown-select";

const CustomSingleSelect = (props) => {
  const { field, form, options } = props;
  const [clear, setClear] = useState(false);
  // useEffect(() => {
  //   if (field?.value) {
  //     if (field?.value !== "") setClear(true);
  //     else setClear(false);
  //   } else setClear(false);
  // }, [field?.value]);

  return (
    <Select
      {...props}
      clearable={clear}
      color={"#1296b038"}
      className="inputSelect inputDropdown"
      dropdownHeight="140px"
      options={options}
      multi={false}
      values={options?.filter((option) => option?.value === field?.value)}
      name={field.name}
      addPlaceholder={" "}
      value={field.value === ""?"":options?.find((option) => option?.value === field?.value)}
      onChange={(option) => form?.setFieldValue(field.name, option[0]?.value)}
      onBlur={field.onBlur}
    />
  );
};

export { CustomSingleSelect };
