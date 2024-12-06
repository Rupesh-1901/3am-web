import { Form, Formik } from "formik";
import { LabelCustom } from "../LabelCustom";
import { TextAreaFormik } from "../TextAreaFormik";
import * as Yup from "yup";
import { useEffect } from "react";
export const CompleteRemark = ({ data, id, type, color, handleClose, loading }) => {
  const validationSchema = Yup.object({
    Remarks: Yup.string().max(499,"Remarks cannot be more than 500 characters").required("Please Enter Remarks"),
  });
  const onSubmit = async (values) => {
    data(type, id, values.Remarks);
  };

  // useEffect(()=>{
  //   document.title = `PeopleSol - Complete Remark`;
  //   return () => {
  //     document.title = 'PeopleSol';
  //   };
  // })

  if(loading) return ""

 else return (
    <Formik
      initialValues={{ Remarks: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <LabelCustom labelName={"Remark"} mandatory={true} />
        <TextAreaFormik maxLength={500} placeholder="Please Enter Remarks" style={{ height: "80px" }} name={"Remarks"} />
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