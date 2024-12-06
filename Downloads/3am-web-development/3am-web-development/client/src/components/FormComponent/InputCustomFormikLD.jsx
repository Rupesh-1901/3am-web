import { ErrorMessage, Field } from "formik";
import React from "react";
import { TextError } from "./TextError";
import { MyInput } from "./MyInput";
import { useEffect } from "react";

export const InputCustomFormikLD = (props) => {
  const { name, style, className, disabled, formikWidth } = props;

  return (
    <div className="formikComponentContainer" style={{ width: formikWidth }}>
      <Field
        {...props}
        name={name}
        component={MyInput}
        style={{ ...style, minWidth: "120px" }}
        className={`input-shorttextLD ${className} ${
          disabled && "disabledInput"
        }`}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
