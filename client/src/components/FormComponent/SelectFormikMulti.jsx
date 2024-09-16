import { ErrorMessage, Field } from "formik";
import React from "react";
import CustomSelect from "./CustomSelect";
import { TextError } from "./TextError";

export const SelectFormikMulti = (props) => {
  const { name, options, className, disabled } = props;

  return (
    <div className="formikComponentContainer">
      <Field
        {...props}
        className={`custom-select ${className}`}
        name={name}
        options={options}
        component={CustomSelect}
        multi={true}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
