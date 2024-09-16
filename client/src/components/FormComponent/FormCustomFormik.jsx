import { Formik, Form } from "formik";
import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "../../Assets/CloseIcon.svg";
import { Loader } from "./Loader";
import PropTypes from "prop-types";
import { useEffect } from "react";
const FormCustomFormik = ({
  FormHeading,
  returnPage,
  propsDiv,
  ButtonLabel,
  validationSchema,
  initialvalue,
  onSubmit,
  ref,
  chooseFormValues,
  loading,
  styles,
  className,
  btnLabel,
}) => {
  return (
    <div className="createPageContainer side-navigation ">
      <div className="createProjectContainer requsitionForm" style={styles}>
        <div className="createHeader">
          <label>{FormHeading}</label>
          <IconButton
            className="closeIconHolder"
            onClick={returnPage}
            title="Close"
          >
            <img src={CloseIcon} alt="CloseIcon" />
          </IconButton>
        </div>
        <div className="horizontalLine createLine"></div>
        <div className="bodyContainer ">
          {loading ? (
            <Loader />
          ) : (
            <Formik
              innerRef={ref}
              enableReinitialize={true}
              initialValues={initialvalue}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                chooseFormValues && chooseFormValues(formik.values);
                return (
                  <Form
                    style={{
                      padding: " 15px 15px 0 15px ",
                      position: "relative",
                      height: "100%",
                      flexGrow: 1,
                    }}
                    className={className}
                  >
                    {/* {propsDiv} */}
                    {React.cloneElement(propsDiv, { formik: formik })}
                    <div className="createFootCust">
                      <div>
                        <div
                          onClick={returnPage}
                          className={`button secondaryButton ${btnLabel}`}
                        >
                          Cancel
                        </div>
                      </div>
                      <div>
                        <button className="button primaryButton" type="submit">
                          {ButtonLabel}
                        </button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
};
FormCustomFormik.propTypes = {
  FormHeading: PropTypes.string.isRequired, // Form heading, required as a string
  returnPage: PropTypes.func.isRequired, // Function to handle the return action
  propsDiv: PropTypes.element.isRequired, // React element to be cloned and used in the form
  ButtonLabel: PropTypes.string.isRequired, // Button label, required as a string
  validationSchema: PropTypes.object, // Validation schema for Formik (could be a Yup schema or similar)
  initialvalue: PropTypes.object.isRequired, // Object containing initial form values
  onSubmit: PropTypes.func.isRequired, // Function to handle form submission
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]), // Ref, can be a function or a ref object
  chooseFormValues: PropTypes.func, // Optional function to handle form values
  loading: PropTypes.bool.isRequired, // Boolean to show loading state
  styles: PropTypes.object, // Optional styles object
  className: PropTypes.string, // Optional CSS class name for the form
  btnLabel: PropTypes.string, // Optional class name for the button
};

FormCustomFormik.defaultProps = {
  validationSchema: {}, // Default to an empty object if not provided
  styles: {}, // Default empty object for styles
  className: "", // Default empty string for className
  chooseFormValues: null, // Default to null if chooseFormValues is not provided
  btnLabel: "", // Default empty string for btnLabel
};
export { FormCustomFormik };
