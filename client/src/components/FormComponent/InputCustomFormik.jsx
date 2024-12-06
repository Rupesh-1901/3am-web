import { ErrorMessage, Field } from "formik";
import { TextError } from "./TextError";
import { MyInput } from "./MyInput";
import PropTypes from "prop-types";

export const InputCustomFormik = (props) => {
  const { name, style, className, disabled, formikWidth, value } = props;

  return (
    <div className="formikComponentContainer" style={{ width: formikWidth }}>
      <Field
        {...props}
        name={name}
        value={value}
        component={MyInput}
        style={{ ...style, minWidth: "120px" }}
        className={`input-shorttext ${className} ${
          disabled && "disabledInput"
        }`}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
