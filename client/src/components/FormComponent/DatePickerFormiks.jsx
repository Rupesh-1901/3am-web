import React from "react";
import { ErrorMessage, Field } from "formik";
import { TextError } from "./TextError";
import { Date } from "./Date";

const DatePickerFormiks = ({ name, ...props }) => {
 
  return (
    <div className="formikComponentContainer">
      <Field {...props} name={name} component={Date} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export { DatePickerFormiks };
