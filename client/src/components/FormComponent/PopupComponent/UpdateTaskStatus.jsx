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
import { FileUploadFormikMulti } from "../FileUploadFormikMulti";

const statusOptions = [
  { label: "Yet to Start", value: "Yet to Start" },
  { label: "In Progress", value: "In Progress" },
  { label: "Hold", value: "Hold" },
  { label: "Completed", value: "Completed" },
  { label: "Cancelled", value: "Cancelled" },
];
const statusOption = [
  { label: "In Progress", value: "In Progress" },
  { label: "Hold", value: "Hold" },
  { label: "Completed", value: "Completed" },
  { label: "Cancelled", value: "Cancelled" },
  { label: "Confirmed", value: "Confirmed" },
];
export const UpdateTaskStatus = ({
  onClose,
  dispatch,
  id,
  title,
  date,
  requestNumber,
  handleClose,
  getTasksData,
}) => {
  const [loading, setLoading] = useState(null);
  const [details, setDetails] = useState(false);
  const createPageData = async (values) => {
    try {
      setLoading(true);
      await postRequestForm(`Tasks/Details`, values);
      dispatch(
        showToast({ text: "Successfully Created", severity: "success" })
      );
      onClose();
    } catch (error) {
      dispatch(showToast({ text: error?.response?.data, severity: "error" }));
    } finally {
      setLoading(false);
      getTasksData();
    }
  };

  // useEffect(()=>{
  //   document.title = `PeopleSol - Update Task Status`;
  //   return () => {
  //     document.title = 'PeopleSol';
  //   };
  // })

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
    // remarks: Yup.string().required("Please Enter Remarks "),
  });
  const onSubmit = async (values) => {
    // const create = {
    //   ...values,
    //   id: id,
    //   Date: values?.Date !== "" ? values?.Date : new Date(),
    // };
    // createPageData(create);
    const formData = new FormData();
    formData.append("id", id);
    formData.append("Title", "ABC");
    formData.append("RequestNumber", 0);
    formData.append("status", values?.status);
    formData.append(
      "Date",
      values?.Date !== ""
        ? format(new Date(values?.Date), "yyyy-MM-dd")
        : format(new Date(), "yyyy-MM-dd")
    );
    if (values?.status === "In Progress") {
      if (values?.Percentage) formData.append("Percentage", values?.Percentage);
    }
    if (
      values?.status === "In Progress" ||
      values?.status === "Cancelled" ||
      values?.status === "Confirmed" ||
      values?.status === "Completed"
    ) {
      formData.append("remarks", values?.remarks);
    }
    if (values?.status === "Completed") {
      values.upload?.forEach((element, index) => {
        formData.append(`upload`, element);
      });
    }

    createPageData(formData);
  };
  useEffect(() => {
    if (id) getDetails(id);
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
            Title: details && details?.title,
            RequestNumber: details && details?.requestNumber,
            status: details ? details?.status : "",
            remarks: "",
            Percentage: null,
            Date: new Date(),
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <LabelCustom labelName={"Update Status"} mandatory={true} />
                <SelectForm
                  name={"status"}
                  placeholder={"Select any option"}
                  options={statusOptions}
                  style={{ marginBottom: "4rem" }}
                />
                {formik.values?.status === "In Progress" && (
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
                {formik.values?.status === "Completed" && (
                  <>
                    <LabelCustom labelName={"Attachments"} />

                    <FileUploadFormikMulti
                      name={"upload"}
                      placeholder={"Choose file"}
                      isEdit={false}
                    />
                  </>
                )}
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
