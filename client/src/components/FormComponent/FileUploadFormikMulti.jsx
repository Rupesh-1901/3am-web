import { ErrorMessage, Field } from "formik";
import React from "react";
import { TextError } from "./TextError";
import { CustomAttachFormikMulti } from "./CustomAttachFormikMulti";

const FileUploadFormikMulti = (props) => {
  const { name } = props;

  return (
    <div className="formikComponentContainer">
      <Field
        {...props}
        className="custom-select"
        style={{ minWidth: "220px" }}
        name={name}
        component={CustomAttachFormikMulti}
      />
      <ErrorMessage name={name} styles={props.styling} component={TextError} />
    </div>
  );
};

export { FileUploadFormikMulti };
