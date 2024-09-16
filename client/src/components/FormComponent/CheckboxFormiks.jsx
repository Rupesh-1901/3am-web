import { ErrorMessage, Field } from "formik";
import React from "react";
import { Checkbox } from "./Checkbox";
import { TextError } from "./TextError";
import { useEffect } from "react";
import { LabelCustom } from "./LabelCustom";

const CheckboxFormiks = ({
  nolabel = false,
  labelName,
  name,
  style,
  ...props
}) => {
  return (
    <div className="formikComponentContainer" style={style}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Field
          {...props}
          // labelName={labelName}
          className="custom-select"
          name={name}
          component={Checkbox}
        />
        {!nolabel && (
          <LabelCustom labelName={labelName} style={{ padding: "10px 0px" }} />
        )}{" "}
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export { CheckboxFormiks };
