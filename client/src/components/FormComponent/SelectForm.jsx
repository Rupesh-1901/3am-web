import { ErrorMessage, Field } from "formik";
import React from "react";
import { TextError } from "./TextError";
import { CustomSelectSingle } from "./CustomSelectSingle";

const SelectForm = (props) => {
  const { name, values, options, formikWidth, onChangeProp } = props;

  return (
    <div
      className="formikComponentContainer"
      style={{ fontFamily: "poppins", width: formikWidth }}
    >
      <Field
        style={{ ...props.style, minWidth: "170px" }}
        {...props}
        className="custom-select"
        name={name}
        values={values}
        options={options}
        component={CustomSelectSingle}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export { SelectForm };
