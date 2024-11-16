import { ErrorMessage, Field } from "formik";
import { TextError } from "./TextError";
export const InputForm = ({ name, form, ...props }) => {
  const { setFieldValue } = form || {}; // Destructure setFieldValue from form or default to an empty object

  const handleInputChange = (e) => {
    const { value } = e.target;
    if (setFieldValue) {
      setFieldValue(name, value); // Update the form field value in Formik if setFieldValue is available
    }
  };

  return (
    <div className="formikComponentContainer">
      <Field
        {...props}
        name={name}
        onChange={handleInputChange} // Handle the change event
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
