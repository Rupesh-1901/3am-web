import { ErrorMessage, Field } from "formik";
import React from "react";
import { CustomAttachFormik } from "./CustomAttachFormik";
import { TextError } from "./TextError";
import { useEffect } from "react";
import { CustomAttachFormikLD } from "./CustomAttachFormikLD";

const FileUploadFormikLD = (props) => {
  const { name, setInfos, style, changeButton, afterDelete, resetAfterDelete } =
    props;

  return (
    <div className="formikComponentContainer">
      <Field
        {...props}
        // className="custom-select"
        style={{ ...style, minWidth: "220px" }}
        name={name}
        setInfos={setInfos}
        changeButton={changeButton}
        component={CustomAttachFormikLD}
      />
      <ErrorMessage name={name} styles={props.styling} component={TextError} />
    </div>
  );
};

export { FileUploadFormikLD };
