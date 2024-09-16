import { ErrorMessage, Field } from "formik";
import React from "react";
import { TextError } from "./TextError";
import StarRatingComp from "./StarRatingComp";

export const StarRatingFormik = (props) => {
  const { name } = props;

  return (
    <div className="formikComponentContainer">
      <Field {...props} name={name} component={StarRatingComp} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
