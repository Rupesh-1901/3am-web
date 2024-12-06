import { Form, Formik } from "formik";
import { LabelCustom } from "../LabelCustom";
import { TextAreaFormik } from "../TextAreaFormik";
import * as Yup from "yup";
import { DatePickerFormiks } from "../DatePickerFormiks";
import { useEffect } from "react";

export const DateRemark = ({ data, id, type, color, handleClose }) => {
  const validationSchema = Yup.object({
    finalInductionDate: Yup.date().required("Required"),
  });
  const onSubmit = async (values) => {
    data(type, id, values.finalInductionDate);
  };

  // useEffect(()=>{
  //   document.title = `PeopleSol - Date Remark`;
  //   return () => {
  //     document.title = 'PeopleSol';
  //   };
  // })

  return (
    <Formik
      initialValues={{ finalInductionDate: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <LabelCustom labelName={"Select Final Date"} mandatory={true} />
        <DatePickerFormiks name={"finalInductionDate"} />
        <div className="createFootCust">
          <button
            type="button"
            className="button secondaryButton"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="button primaryButton"
            type="submit"
            style={{ background: color, color: "white" }}
          >
            {type}
          </button>
        </div>
      </Form>
    </Formik>
  );
};