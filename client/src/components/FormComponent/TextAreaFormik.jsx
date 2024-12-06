import { ErrorMessage, Field } from "formik";
import React from "react";
import "./FormComponent.css";
import { TextError } from "./TextError";
const TextAreaFormik = (props) => {
  const { name, placeholder, formikStyle, styl } = props;
  return (
    <div className="formikComponentContainer" style={{ width: formikStyle }}>
      <Field
        as="textarea"
        style={{
          minWidth: "120px",
          height: "80px",
          minHeight: "40px",
          ...styl,
        }}
        {...props}
        className="input-longtext"
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export { TextAreaFormik };
