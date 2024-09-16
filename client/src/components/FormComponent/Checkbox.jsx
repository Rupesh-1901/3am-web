import React from "react";
import { CheckBox } from "./RadioGroupInput/InputStyles";
import { useEffect } from "react";

const Checkbox = (props) => {
  const { field, form, value, labelName } = props;
  return (
    <div className="checkFormik">
      <CheckBox
        {...props}
        checked={field.value}
        id={field.name}
        value={value}
        onChange={(e) => form?.setFieldValue(field.name, e.target.checked)}
        type="checkbox"
        name={field.name}
      />
      <label className="cursor" style={{ margin: "0 2px" }} for={field.name}>
        {" "}
        {labelName}
      </label>
    </div>
  );
};
export { Checkbox };
