/* eslint-disable react-hooks/exhaustive-deps */
import { Form, Formik } from "formik";
import { LabelCustom } from "../LabelCustom";
import { TextAreaFormik } from "../TextAreaFormik";
import CloseIcon from "../../../Assets/CloseIcon.svg";

import * as Yup from "yup";
import { InputCustomFormik } from "../InputCustomFormik";
import { SelectForm } from "../SelectForm";
import { showToast } from "../../../Features";
import {
  getRequest,
  postRequest,
  postRequestForm,
} from "../../../Services/axios";
import { useState } from "react";
import { Loader } from "../Loader";
import { DatePickerFormiks } from "../DatePickerFormiks";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import { format } from "date-fns";

const statusOptions = [
  { label: "In Progress", value: "In Progress" },
  { label: "Yet to Start", value: "Yet to Start" },
  { label: "Hold", value: "Hold" },
  { label: "Completed", value: "Completed" },
  { label: "Cancelled", value: "Cancelled" },
];
const statusOption = [
  { label: "In Progress", value: "In Progress" },
  { label: "Yet to Start", value: "Yet to Start" },
  { label: "Hold", value: "Hold" },
  { label: "Completed", value: "Completed" },
  { label: "Cancelled", value: "Cancelled" },
  { label: "Confirmed", value: "Confirmed" },
];
export const UpdateConfirmStatus = ({
  onClose,
  dispatch,
  id,
  selectedTaskOption,
  getTasksData,
}) => {
  const [loading, setLoading] = useState(null);
  const [details, setDetails] = useState(false);
  const [fromVal, setformVal] = useState(false);
  //console.log("deta", details);

  // useEffect(()=>{
  //   document.title = `PeopleSol - Update Confirm Status`;
  //   return () => {
  //     document.title = 'PeopleSol';
  //   };
  // })

  const createPageData = async (values) => {
    try {
      setLoading(true);
      await postRequest(`Tasks/Details`, values);
      dispatch(
        showToast({ text: "Successfully Created", severity: "success" })
      );
    } catch (error) {
      dispatch(showToast({ text: error?.response?.data, severity: "error" }));
    } finally {
      setLoading(false);
      if (fromVal.status === "In Progress") onSubmits();
      else getTasksData();
      onClose();
    }
  };
  const getDetails = async (id) => {
    try {
      setLoading(true);
      const result = await getRequest(`Tasks/Details/${id}`);
      setDetails(result?.data?._projecttasks);
    } catch (error) {
      dispatch(
        showToast({
          text: error?.response?.data ?? "Error in fetching Data",
          severity: "error",
        })
      );
    } finally {
      setLoading(false);
    }
  };
  const validationSchema = Yup.object({
    status: Yup.string().required("Please Enter Status"),
    remarks: Yup.string().required("Please Enter Remarks "),
  });
  const onSubmit = async (values) => {
    const create = {
      ...values,
      id: id,
      Date: values?.Date !== "" ? values?.Date : new Date(),
    };
    createPageData(create);
  };
  const onSubmits = () => {
    const formData = new FormData();
    formData.append("RequestNumber", details?.requestNumber);
    formData.append("Id", details?.id);
    formData.append("Title", details?.title);
    formData.append(
      "StartsOn",
      format(new Date(details?.startsOn), "MM/dd/yyyy")
    );
    formData.append("EndsOn", `${format(fromVal?.EndsOn, "MM/dd/yyyy")}`);
    formData.append("ProjectId", details?.projectId);
    if (typeof details.upload === "object")
      formData.append("upload", details?.upload);
    formData.append("Description", details?.description);
    formData.append("EstimatedHours", details?.estimatedHours);
    formData.append("Status", "Yet to Start");
    formData.append("Priority", details?.priority);
    formData.append("EmployeeId", details?.employeeId);

    EditPageData(formData);
  };
  const EditPageData = async (values) => {
    try {
      setLoading(true);
      const result = await postRequestForm("Tasks/Edit", values);
      // eslint-disable-next-line no-unused-vars
      if (result)
        dispatch(
          showToast({ text: "Successfully Created", severity: "success" })
        );
    } catch (error) {
      dispatch(
        showToast({
          text: error?.response?.data ?? "Error in fetching Data",
          severity: "error",
        })
      );
    } finally {
      setLoading(false);
      getTasksData();
      onClose();
    }
  };
  useEffect(() => {
    if (selectedTaskOption === "Pending Confirmation") getDetails(id);
  }, []);
  if (loading) return <Loader />;
  else
    return (
      <div style={{ background: "var(--form-background)" }}>
        <div className="createHead">
          <label>{details?.title}</label>
          <IconButton onClick={onClose} title="Close">
            <img className="close-icon" src={CloseIcon} alt="close" />
          </IconButton>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            Title: details?.title,
            RequestNumber: details?.requestNumber,
            status:
              selectedTaskOption === "Pending Confirmation" ? "Confirmed" : "",
            remarks: "",
            Percentage:
              selectedTaskOption === "Pending Confirmation" ? 100 : null,
            Date: details ? new Date(details.date) ?? "" : "",
            EndsOn: details ? details?.endsOn && new Date(details?.endsOn) : "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            setformVal(formik.values);
            return (
              <Form>
                <LabelCustom labelName={"Update Status"} mandatory={true} />
                <SelectForm
                  name={"status"}
                  placeholder={"Select any option"}
                  options={
                    selectedTaskOption === "Pending Confirmation"
                      ? statusOption
                      : statusOptions
                  }
                  style={{ marginBottom: "4rem" }}
                />
                {selectedTaskOption === "Pending Confirmation" ? (
                  formik.values?.status === "In Progress" ? (
                    <>
                      <LabelCustom labelName={"Remarks"} />
                      <TextAreaFormik
                        style={{ height: "80px" }}
                        name={"remarks"}
                        placeholder="Please Enter Remarks"
                        maxLength={500}
                      />

                      <LabelCustom labelName={"Progress (%)"} />
                      <InputCustomFormik
                        name={"Percentage"}
                        type="number"
                        step="0.01"
                        placeholder="Please Enter Progress (%)"
                      />
                      <LabelCustom labelName={"Extend Deadline"} />
                      <DatePickerFormiks
                        name={"EndsOn"}
                        type="number"
                        step="0.01"
                        placeholder="Please Enter Deadline"
                      />
                    </>
                  ) : null
                ) : (
                  formik.values?.status === "In Progress" && (
                    <>
                      <LabelCustom labelName={"Remarks"} />
                      <TextAreaFormik
                        style={{ height: "80px" }}
                        name={"remarks"}
                        placeholder="Please Enter Remarks"
                        maxLength={500}
                      />

                      <LabelCustom labelName={"Progress (%)"} />
                      <InputCustomFormik
                        name={"Percentage"}
                        type="number"
                        step="0.01"
                        placeholder="Please Enter Progress (%)"
                      />
                    </>
                  )
                )}

                {formik.values?.status === "Hold" ? (
                  <>
                    <LabelCustom labelName={"Remarks"} />
                    <TextAreaFormik
                      style={{ height: "80px" }}
                      name={"remarks"}
                      placeholder="Please Enter Remarks"
                      maxLength={500}
                    />
                  </>
                ) : null}

                {formik.values?.status === "Completed" ||
                formik.values?.status === "Confirmed" ? (
                  <>
                    <LabelCustom labelName={"Remarks"} />
                    <TextAreaFormik
                      style={{ height: "80px" }}
                      name={"remarks"}
                      placeholder="Please Enter Remarks"
                      maxLength={500}
                    />

                    <LabelCustom
                      labelName={"Actual Completion Date"}
                      mandatory={true}
                    />
                    <DatePickerFormiks name={"Date"} />
                  </>
                ) : null}

                {formik.values?.status === "Cancelled" ? (
                  <>
                    <LabelCustom labelName={"Remarks"} />
                    <TextAreaFormik
                      style={{ height: "80px" }}
                      name={"remarks"}
                      placeholder="Please Enter Remarks"
                      maxLength={500}
                    />
                  </>
                ) : null}

                <div className="createFootCust">
                  <button
                    type="button"
                    className="button secondaryButton"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button
                    className="button primaryButton"
                    type="submit"
                    style={{ background: "var(--primary)", color: "white" }}
                  >
                    Update
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    );
};
