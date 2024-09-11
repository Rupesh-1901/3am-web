import { ErrorMessage, Field } from "formik";
import React from "react";
import { Checkbox } from "./Checkbox";
import { TextError } from "./TextError";
import { useEffect } from "react";
import { LabelCustom } from "./LabelCustom";

const CheckboxFormiksRewards = ({
  nolabel = false,
  labelName,
  name,
  style,
  ...props
}) => {
  return (
    <div className="formikComponentContainerPmsRewards" style={style}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Field
          {...props}
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
export { CheckboxFormiksRewards };
