import { Form, Formik } from "formik";
import { LabelCustom } from "../LabelCustom";
import * as Yup from "yup";
import { FileUploadFormik } from "../FileUploadFormik";
import { Loader } from "../Loader";
import { useEffect } from "react";

export const UploadRemark = ({
  data,
  id,
  type,
  color,
  handleClose,
  loading,
}) => {
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "application/pdf",
  ];
  const validationSchema = Yup.object({
    OfferLetterAttachmentUpload: Yup.mixed()
      .required("Please Upload Hike Letter")
      .test(
        "Fichier taille",
        "File Size must be less than 2 mb",
        (value) =>
          !value ||
          (value && value.size <= 2 * 2048 * 2048) ||
          typeof value !== "object"
      )
      .test(
        "format",
        "File Format is Incorrect",
        (value) =>
          !value ||
          (value && SUPPORTED_FORMATS.includes(value.type)) ||
          typeof value !== "object"
      ),
    ConfirmationLetterAttachmentUpload: Yup.mixed()
      .required("Please Upload Confirmation Letter")
      .test(
        "Fichier taille",
        "File Size must be less than 2 mb",
        (value) =>
          !value ||
          (value && value.size <= 2 * 2048 * 2048) ||
          typeof value !== "object"
      )
      .test(
        "format",
        "File Format is Incorrect",
        (value) =>
          !value ||
          (value && SUPPORTED_FORMATS.includes(value.type)) ||
          typeof value !== "object"
      ),
  });

  // useEffect(()=>{
  //   document.title = `PeopleSol - Upload Remark`;
  //   return () => {
  //     document.title = 'PeopleSol';
  //   };
  // })

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append("id", id ? id : 0);
    formData.append(
      "OfferLetterAttachmentUpload",
      values?.OfferLetterAttachmentUpload.name
        ? values?.OfferLetterAttachmentUpload
        : null
    );
    formData.append(
      "ConfirmationLetterAttachmentUpload",
      values?.ConfirmationLetterAttachmentUpload?.name
        ? values?.ConfirmationLetterAttachmentUpload
        : null
    );

    data(type, id, values.Remarks, formData, values);
  };

  if (loading) return <Loader />;
  else
    return (
      <Formik
        enableReinitialize
        initialValues={{
          OfferLetterAttachmentUpload: "",
          ConfirmationLetterAttachmentUpload: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <LabelCustom labelName={"Hike Letter"} mandatory={true} />
          <FileUploadFormik name={"OfferLetterAttachmentUpload"} />
          <span style={{ paddingLeft: "12px", color: "var(--secondary)" }}>
            Size: 2 MB
          </span>
          <span style={{ paddingLeft: "12px", color: "var(--secondary)" }}>
            Format: JPG, PNG, PDF
          </span>
          <LabelCustom labelName={"Confirmation Letter"} mandatory={true} />
          <FileUploadFormik name={"ConfirmationLetterAttachmentUpload"} />
          <span style={{ paddingLeft: "12px", color: "var(--secondary)" }}>
            Size: 2 MB
          </span>
          <span style={{ paddingLeft: "12px", color: "var(--secondary)" }}>
            Format: JPG, PNG, PDF
          </span>
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
      </Formik>
    );
};
