import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ClipIcon from "../../Assets/ClipIcon.svg";
import { IconButton } from "@mui/material";
const CustomAttachFormikMulti = ({
  values,
  field,
  form,
  multiple = true,
  disabled,
  isEdit,
  attachments,
}) => {
  const [attachTexts, setAttachTexts] = useState([]);
  const hiddenFileInput = React.useRef(null);
  const [fieldType, setFieldType] = useState(null);
  const [beforeSlashText, setBeforeSlashText] = useState("");

  const handleClick = () => {
    hiddenFileInput?.current?.click();
  };
  const clearValue = (indexToRemove) => {
    // debugger;
    const updatedFiles =
      typeof field?.value !== "string"
        ? field?.value?.filter((_, index) => index !== indexToRemove)
        : "";
    form?.setFieldValue(field?.name, updatedFiles);

    setAttachTexts((prev) =>
      prev?.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleFileChange = (event) => {
    const files = event?.currentTarget?.files;

    if (files.length > 0) {
      if (multiple) {
        form?.setFieldValue(field.name, event.currentTarget.files);
      } else form.setFieldValue(field.name, event.currentTarget.files[0]);
      let fileArray = [];
      let fileTexts = [];

      for (let i = 0; i < files.length; i++) {
        fileArray.push(files[i]);
        fileTexts.push(files[i].name);
      }
      form.setFieldValue(field.name, fileArray);
      // setAttachTexts([]);
      setAttachTexts(fileTexts);
    }
  };

  useEffect(() => {
    // debugger;
    if (field?.value) {
      if (field?.value !== "") {
        let typeOfField = typeof field?.value;
        setFieldType(typeOfField);
        if (typeOfField === "string") {
          if (field?.value !== "") {
            if (field?.value?.toString()?.includes("/")) {
              const lastSlashIndex = field?.value?.lastIndexOf("/");

              const beforeSlashText = field?.value?.substring(
                0,
                lastSlashIndex
              );
              setBeforeSlashText(beforeSlashText);
              setAttachTexts(
                field?.value
                  ?.substring(field?.value?.lastIndexOf("/") + 1)
                  ?.split(",")
              );
            } else {
              if (typeof field?.value === "string")
                setAttachTexts(field?.value?.split(","));
            }
          }
        }
        // else if (typeOfField === "object") {
        //   setAttachTexts([field?.value]);
        // }
      }
      // else setClearable(false);
    } else {
      // setClearable(false);
      // setAttachText("Attach");
      // hiddenFileInput.current.value = "";
    }
  }, [field.value]);

  return (
    <>
      <input
        type="file"
        className="input-shorttextAtt"
        disabled={disabled}
        multiple={multiple}
        ref={hiddenFileInput}
        name={field?.name}
        style={{ display: "none", padding: "12px 40px 12px 12px" }}
        onChange={handleFileChange}
      />
      <div
        className="input-shorttextAtt"
        style={{
          padding: "12px 40px 12px 12px",
          minWidth: "120px",
          height: "fit-content",
          minHeight: "40px",
          maxHeight: "80px",
          overflowY: "auto",
          overFlowX: "hidden",
        }}
      >
        {attachTexts?.map((text, index) => (
          <span
            style={{ position: "relative", whiteSpace: "nowrap" }}
            key={index}
          >
            {text?.slice(0, 13)}{" "}
            <IconButton
              style={{ marginLeft: "0px" }}
              onClick={() => clearValue(index)}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.17212 0.84375L1.17212 8.84375"
                  stroke="#F71D1D"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.17212 0.84375L9.17212 8.84375"
                  stroke="#F71D1D"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </IconButton>
          </span>
        ))}

        <IconButton className="clipContainer" onClick={handleClick}>
          <img src={ClipIcon} alt="ClipIcon" />
        </IconButton>
      </div>
      {fieldType === "string" && field?.value !== "" && (
        <div
          style={{
            paddingLeft: "12px",
            display: "flex",
            flexWrap: "wrap",
            maxHeight: "70px",
            overflowY: "auto",
            overFlowX: "hidden",
          }}
        >
          {attachTexts?.map((text, index) => (
            <a
              style={{ marginRight: "7px", whiteSpace: "nowrap" }}
              href={
                beforeSlashText?.length > 0
                  ? `${process.env.REACT_APP_.BASE_URL}/Core/Uploads/${beforeSlashText}/${text}`
                  : `${process.env.REACT_APP_.BASE_URL}/Core/Uploads/${text}`
              }
              target="blank"
            >
              {text?.slice(0, 13)}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export { CustomAttachFormikMulti };
