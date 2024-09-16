import React, { useEffect, useState } from "react";
import Select from "react-dropdown-select";

const SelectMultiString = ({
  options,
  name,
  onChange,
  styles,
  styl,
  customClass,
  fullWidth,
  isDisabled,
  isMulti,
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
        multi={isMulti}  // Enable multi-select
        {...props}
        color={"#1296b038"}
        style={styl}
        className={`inputSelect inputDropdown ${fullWidth}`}
        options={options}
        name={name}
        values={props?.values}  // Pass the values for multi-select
        onChange={onChange}
        disabled={isDisabled ?? false}
      />
    </div>
  );
};

export { SelectMultiString };
