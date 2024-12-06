import { Form, Formik } from "formik";
import { LabelCustom } from "../LabelCustom";
import { TextAreaFormik } from "../TextAreaFormik";
import * as Yup from "yup";
import { Loader } from "../Loader";
import { useEffect } from "react";
export const Remark = ({
  data,
  id,
  type,
  color,
  handleClose,
  loading,
  alistname,
  listid,
  mod = "",
}) => {
  const validationSchema = Yup.object({
    Remarks: Yup.string()
      .max(499, "Remarks cannot be more than 500 characters")
      .required("Please Enter Remarks"),
  });
  const onSubmit = (values) => {
    // debugger;
    if (mod === "reimbursementOverBudget" && type === "Over Budget") {
      data(type, id, values.Remarks, listid);
    }

    data(type, id, values.Remarks, alistname); //## alistname is crucial for company Hospitality transaction dont remove
  };

  // useEffect(()=>{
  //   document.title = `PeopleSol - Remark`;
  //   return () => {
  //     document.title = 'PeopleSol';
  //   };
  // })
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Formik
            initialValues={{ Remarks: "" }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <LabelCustom
                labelName={
                  type == "Sent For Correction"
                    ? "Enter Correction Note"
                    : "Remark"
                }
                mandatory={true}
              />
              <TextAreaFormik
                maxLength={500}
                placeholder="Please Enter Remarks"
                style={{ height: "80px" }}
                name="Remarks"
              />
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
                  {type == "RejectAll"
                    ? "Reject All"
                    : type === "Confirm Department"
                    ? "Confirm Department"
                    : type}
                </button>
              </div>
            </Form>
          </Formik>
        </>
      )}
    </>
  );
};
