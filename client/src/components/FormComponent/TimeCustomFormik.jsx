import { ErrorMessage, Field } from "formik";
import React from "react";
import { TextError } from "./TextError";
import { TimeCustoms } from "./TimeCustoms";

const TimeCustomFormik = (props) => {
  const { name, disabled, ampm, minTime, style } = props;

  return (
    <div
      className="formikComponentContainer"
      style={{ margin: "12px", minWidth: "120px",background:"white", ...style }}
    >
      <Field
        className="formik-select"
        name={name}
        disabled={disabled}
        ampm={ampm === undefined ? true : false}
        component={TimeCustoms}
        minTime={minTime}
      />
      <ErrorMessage
        name={name}
        component={TextError}
        styles={{ marginTop: "12px" }}
      />
    </div>
  );
};

export { TimeCustomFormik };
