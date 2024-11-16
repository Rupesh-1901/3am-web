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
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];
const incrementOptions = [
  { label: "Percentage", value: "Percentage" },
  { label: "Amount", value: "Amount" },
];

export const HRConfirmRemark = ({
  data,
  id,
  type,
  color,
  handleClose,
  loading,
}) => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(null);

  const [detailsform, setDetailsform] = useState(null);

  // useEffect(()=>{
  //   document.title = `PeopleSol - HR Confirm Remark`;
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
        showToast({
          text: error?.response?.data ?? "Error in fetching Data",
          severity: "error",
        })
      );
    } finally {
      dispatch(isLoading(false));
    }
  };

  useEffect(() => {
    getFormDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const validationSchema = Yup.object({
    IsSalaryHikeRequired: Yup.string().required("Required"),
    IncrementType: Yup.string().required("Required"),
  });

  const valiSchema = Yup.object({
    IsSalaryHikeRequired: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    data(type, id, null, null, {
      ...values,
      id: id,
      IsSalaryHikeRequired:
        values.IsSalaryHikeRequired === "Yes" ? true : false,
      SalaryPercentage:
        values.IsSalaryHikeRequired === "Yes" ? values.SalaryPercentage : null,
    });
  };

  const chooseFormValues = (values) => {
    setFormValues(values);
  };

  if (loading) return <Loader />;
  else
    return (
      <Formik
        enableReinitialize
        initialValues={{
          id: detailsform?.item?.id ? detailsform?.item?.id : "",
          employeeName: detailsform?.item?.name ? detailsform?.item?.name : "",
          email: detailsform?.item?.email ? detailsform?.item?.email : "",
          department: detailsform?.item?.department
            ? detailsform?.item?.department
            : "",
          doj: detailsform?.item?.doj
            ? dateFormat(detailsform?.item?.doj, "yyyy-mm-dd")
            : null,
          probationEndDate: detailsform?.item?.probationEndDate
            ? dateFormat(detailsform?.item?.probationEndDate, "yyyy-mm-dd")
            : "",
          IsSalaryHikeRequired: "",
          IncrementType: "",
          SalaryPercentage: "",
          remarks: "",
        }}
        validationSchema={
          formValues?.IsSalaryHikeRequired === "Yes"
            ? validationSchema
            : valiSchema
        }
        onSubmit={onSubmit}
      >
        {(formik) => {
          chooseFormValues && chooseFormValues(formik.values);
          return (
            <Form>
              <div className="formcustom">
                <div>
                  <LabelCustom labelName={"Employee Name"} />
                  <InputCustomFormik disabled={true} name={"employeeName"} />
                </div>
                <div>
                  <LabelCustom labelName={"Email ID"} />
                  <InputCustomFormik disabled={true} name={"email"} />
                </div>
                <div>
                  <LabelCustom labelName={"Department"} />
                  <InputCustomFormik disabled={true} name={"department"} />
                </div>
                <div>
                  <LabelCustom labelName={"Date of Joining"} />
                  <InputCustomFormik disabled={true} name={"doj"} />
                </div>
                <div>
                  <LabelCustom labelName={"Probation End Date"} />
                  <InputCustomFormik
                    disabled={true}
                    name={"probationEndDate"}
                  />
                </div>
                <div>
                  <LabelCustom
                    labelName={"Is Salary Hike Required?"}
                    mandatory={true}
                  />
                  <SelectForm
                    name={"IsSalaryHikeRequired"}
                    placeholder={"Select any option"}
                    options={salaryOptions}
                  />
                </div>
              </div>
              {formValues?.IsSalaryHikeRequired === "Yes" ? (
                <>
                  <div className="formcustom">
                    <div>
                      <LabelCustom
                        labelName={"Increment Type"}
                        mandatory={true}
                      />
                      <SelectForm
                        name={"IncrementType"}
                        placeholder={"Select increment type"}
                        options={incrementOptions}
                      />
                    </div>
                    {formValues?.IncrementType && (
                      <div>
                        <LabelCustom
                          labelName={
                            formValues?.IncrementType === "Amount"
                              ? "Hike Amount"
                              : "Hike Percentage"
                          }
                        />
                        <InputCustomFormik name={"SalaryPercentage"} />
                      </div>
                    )}
                  </div>
                  <div>
                    <LabelCustom labelName={"Confirmation Remarks"} />
                    <TextAreaFormik
                      style={{ height: "80px" }}
                      name={"remarks"}
                      maxLength={500}
                    />
                  </div>
                </>
              ) : null}
              <div className="createFootCust">
                <button
                  type="button"
                  className="button secondaryButton"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button className="button primaryButton" type="submit">
                  {type}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    );
};
