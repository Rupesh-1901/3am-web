import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Select from "react-dropdown-select";

const SelectCustom = ({
  options,
  name,
  onChange,
  styles,
  styl,
  customClass,
  fullWidth,
  isDisabled,
  dropdownHeight,
  ...props
}) => {
  const [clear, setClear] = useState(false);
  useEffect(() => {
    if (props?.values) {
      if (props?.values.length > 0) setClear(true);
      else setClear(false);
    } else setClear(false);
  }, [props?.values]);

  return (
    <div className={`selectCustom ${customClass}`} style={styles}>
      <Select
        clearable={props?.searchable ? clear : false}
        {...props}
        color={"#1296b038"}
        style={styl}
        className={`inputSelect inputDropdown ${fullWidth}`}
        options={options}
        name={name}
        onChange={onChange}
        disabled={isDisabled ?? false}
        dropdownHeight={dropdownHeight}
      />
    </div>
  );
};
export { SelectCustom };
