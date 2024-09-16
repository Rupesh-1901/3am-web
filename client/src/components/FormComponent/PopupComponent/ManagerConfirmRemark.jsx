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
import { Loader } from "../Loader";

const salaryOptions = [
    {label: "Yes", value: "Yes"},
    {label: "No", value: "No"},
]
const incrementOptions = [
    {label: "Percentage", value: "Percentage"},
    {label: "Amount", value: "Amount"},
]

export const ManagerConfirmRemark = ({ data, id, type, color, handleClose, loading }) => {

  // useEffect(()=>{
  //   document.title = `PeopleSol - Manager Confirm Remark`;
  //   return () => {
  //     document.title = 'PeopleSol';
  //   };
  // })

    const dispatch = useDispatch();

    const [detailsform, setDetailsform] = useState(null)

    const getFormDetails = async () => {
      try {
        dispatch(isLoading(true));
        const result = await getRequest(
          `EmploymentConfirmations/Details?ID=${id}`
        );
        setDetailsform(result.data.data[0]);
      } catch (error) {
        dispatch(showToast({ text: error?.response?.data ?? "Error in fetching Data", severity: "error" }));
      } finally {
        dispatch(isLoading(false));
      }
    }
  
    
    useEffect(() => {
      getFormDetails()
    }, [id])
    

  const validationSchema = Yup.object({
    IsSalaryHikeRequired: Yup.string().required("Required"),
    // incrementType: Yup.string().required("Required"),
  });
  const onSubmit = async (values) => {
    data(type, id, null, null, {...values, IsSalaryHikeRequired: values.IsSalaryHikeRequired === "Yes" ? true : false});
  };

  if (loading) return <Loader/>
  else
  return (
    <Formik
    enableReinitialize
      initialValues={{ 
        id: detailsform?.item?.id ? detailsform.item.id : "",
      employeeName: detailsform?.item?.name ? detailsform?.item?.name : "", 
      email: detailsform?.item?.email ? detailsform?.item?.email : "", 
      department: detailsform?.item?.department ? detailsform?.item?.department : "", 
      doj: detailsform?.item?.doj ? dateFormat(detailsform?.item?.doj,"yyyy-mm-dd") : "", 
      probationEndDate: detailsform?.item?.probationEndDate ? dateFormat(detailsform?.item?.probationEndDate,"yyyy-mm-dd") : "",
      IsSalaryHikeRequired:"", 
      remarks: "" }}
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

        <LabelCustom labelName={"Is Salary Hike Required?"} mandatory={true} />
        <SelectForm name={"IsSalaryHikeRequired"}  placeholder={"Select any option"} options={salaryOptions} />

        <LabelCustom labelName={"Confirmation Remarks"}  />
        <TextAreaFormik style={{ height: "80px" }} name={"remarks"} maxLength={500}/>
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