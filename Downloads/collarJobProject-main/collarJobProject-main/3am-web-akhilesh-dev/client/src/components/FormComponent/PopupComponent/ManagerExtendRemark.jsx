import { Form, Formik } from "formik";
import { LabelCustom } from "../LabelCustom";
import { TextAreaFormik } from "../TextAreaFormik";
import * as Yup from "yup";
import { InputCustomFormik } from "../InputCustomFormik";
import { SelectForm } from "../SelectForm";
import { useEffect } from "react";
import { isLoading, showToast } from "../../../Features";
import { getRequest } from "../../../Services/axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import dateFormat from "dateformat";
import { addMonths, parseISO } from "date-fns";
import { Loader } from "../Loader";

const salaryOptions = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];
const incrementOptions = [
  { label: "Percentage", value: "Percentage" },
  { label: "Amount", value: "Amount" },
];

export const ManagerExtendRemark = ({ data, id, type, color, handleClose, loading }) => {
  const dispatch = useDispatch();
  const [detailsform, setDetailsform] = useState(null);

  // useEffect(()=>{
  //   document.title = `PeopleSol - Manager Extend Remark`;
  //   return () => {
  //     document.title = 'PeopleSol';
  //   };
  // })

  const getFormDetails = async () => {
    try {
      dispatch(isLoading(true));
      const result = await getRequest(
        `EmploymentConfirmations/Details?ID=${id}`
      );
      setDetailsform(result.data.data[0]);
    } catch (error) {
      dispatch(
        showToast({ text: error?.response?.data ?? "Error in fetching Data", severity: "error" })
      );
    } finally {
      dispatch(isLoading(false));
    }
  };

  useEffect(() => {
    getFormDetails();
  }, [id]);


  const validationSchema = Yup.object({
    extensionReason: Yup.string().required("Required"),
  });
  const onSubmit = async (values) => {
    data(type, id, null, null, values);
  };

  if(loading) return <Loader/>
 else
  return (
    <Formik
      enableReinitialize
      initialValues={{
        id: detailsform?.item?.id ? detailsform?.item?.id : "",
        employeeName: detailsform?.item?.name
          ? detailsform?.item?.employee
          : "",
        email: detailsform?.item?.email ? detailsform?.item?.email : "",
        department: detailsform?.item?.department
          ? detailsform?.item?.department
          : "",
        doj: detailsform?.item?.doj
          ? dateFormat(detailsform?.item?.doj, "yyyy-mm-dd")
          : "",
        probationEndDate: detailsform?.item?.probationEndDate
          ? dateFormat(detailsform?.item?.probationEndDate, "yyyy-mm-dd")
          : "",
        extendedDate: detailsform?.item?.probationEndDate
          ? dateFormat(
              addMonths(parseISO(detailsform?.item?.probationEndDate), 3),
              "yyyy-mm-dd"
            )
          : "",
        extensionReason: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <LabelCustom labelName={"Employee Name"}  />
        <InputCustomFormik disabled={true} name={"employeeName"} />

        <LabelCustom labelName={"Email ID"}  />
        <InputCustomFormik disabled={true} name={"email"} />

        <LabelCustom labelName={"Department"}  />
        <InputCustomFormik disabled={true} name={"department"} />

        <LabelCustom labelName={"Date of Joining"}  />
        <InputCustomFormik disabled={true} name={"doj"} />

        <LabelCustom labelName={"Probation End Date"}  />
        <InputCustomFormik disabled={true} name={"probationEndDate"} />

        <LabelCustom
          labelName={"New Probation Extension Date"}
          
        />
        <InputCustomFormik disabled={true} name={"extendedDate"} />

        <LabelCustom
          labelName={"Probation Extension Reason "}
          mandatory={true}
        />
        <TextAreaFormik style={{ height: "80px" }} name={"extensionReason"} />

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
