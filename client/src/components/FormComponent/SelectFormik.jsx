import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Select from "react-dropdown-select";

const SelectFormik = ({ options, name, onChange, styles, styl, ...props }) => {
  const [clear, setClear] = useState(false);
  useEffect(() => {
    if (props?.values) {
      if (props?.values.length > 0) setClear(true);
      else setClear(false);
    } else setClear(false);
  }, [props?.values]);

  return (
    <div className="selectCustom" style={styles}>
      <Select
        portal={document.body}
        clearable={props?.searchable ? clear : false}
        {...props}
        color={"#1296b038"}
        className="inputSelect inputDropdown"
        options={options}
        name={name}
        onChange={onChange}
        style={styl}
      />
    </div>
  );
};
export { SelectFormik };
