import { ErrorMessage, Field } from "formik";
import React from "react";
import { CustomAttachFormik } from "./CustomAttachFormik";
import { TextError } from "./TextError";
import { useEffect } from "react";

const FileUploadFormik = (props) => {
  const { name } = props;

  
  return (
    <div className="formikComponentContainer" style={props.style}>
      <Field
        {...props}
        className="custom-select"

        name={name}
        component={CustomAttachFormik}
      />
      <ErrorMessage name={name} styles={props.styling} component={TextError} />
    </div>
  );
};

export { FileUploadFormik };
