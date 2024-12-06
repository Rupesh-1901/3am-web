import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ClipIcon from "../../Assets/ClipIcon.svg";
import { IconButton } from "@mui/material";
const CustomAttachFormik = ({
  values,
  field,
  form,
  multiple,
  disabled,
  addPath = "",
}) => {
  const [attachText, setAttachText] = useState("Attach");
  const [clearable, setClearable] = useState(false);
  const hiddenFileInput = React.useRef(null);
  const [fieldType, setFieldType] = useState(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const clearValue = () => {
    form.setFieldValue(field.name, null);
    setFieldType(null);
    setAttachText("Attach");
    hiddenFileInput.current.value = "";
    setClearable(false);
  };
  const handlethisChange = (event) => {
    if (multiple) {
      form.setFieldValue(field.name, event.currentTarget.files);
    } else form.setFieldValue(field.name, event.currentTarget.files[0]);
  };
  useEffect(() => {
    if (field?.value) {
      setClearable(true);
      if (field?.value !== "") {
        let typeOfField = typeof field?.value;
        setFieldType(typeOfField);
        if (typeOfField === "string") {
          if (field?.value !== "") {
            if (field?.value?.toString().includes("/")) {
              setAttachText(
                field?.value?.substring(field?.value?.lastIndexOf("/") + 1)
              );
            } else {
              if (typeof field?.value === "string") setAttachText(field?.value);
            }
          }
        } else if (typeOfField === "object") {
          setAttachText(field?.value?.name);
        }
      } else setClearable(false);
    } else {
      if (attachText !== "Attach") {
        setClearable(true);
      } else setClearable(false);
      hiddenFileInput.current.value = "";
    }
  }, [field?.value, attachText]);

  return (
    <>
      <input
        disabled={disabled}
        multiple={multiple}
        id="file"
        type="file"
        className="input-shorttextAtt"
        name={field?.name}
        value={values}
        ref={hiddenFileInput}
        style={{ display: "none" }}
        onChange={handlethisChange}
      />
      <div
        className="input-shorttextAtt"
        style={
          disabled
            ? {
                backgroundColor: "#E6E6E6",
                minWidth: "120px",
                position: "relative",
              }
            : { minWidth: "120px" }
        }
      >
        {disabled && (
          <div
            style={{
              backgroundColor: "transparent",
              minWidth: "120px",
              position: "absolute",
              left: "0px",
              top: "0px",
              height: "100%",
              width: "100%",
              zIndex: "10",
            }}
          ></div>
        )}
        <label
          style={{
            overflow: "hidden",
            color: "var(--secondary-text)",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            width: "calc(100% - 68px)",
            display: "block",
          }}
        >
          {attachText?.slice(0, 18)}
        </label>
        {clearable && (
          <IconButton
            style={{ position: "absolute", right: "40px", top: "7px" }}
            onClick={clearValue}
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
        )}
        <IconButton className="clipContainer" onClick={handleClick}>
          <img src={ClipIcon} alt="ClipIcon" />
        </IconButton>
      </div>
      <div style={{ paddingLeft: "12px" }}>
        {fieldType === "string" && field?.value !== "" && (
          <a
            href={`${process.env.REACT_APP_.BASE_URL}/Core/Uploads/${addPath}${field.value}`}
            target="blank"
          >
            {attachText}
          </a>
        )}
      </div>
    </>
  );
};
export { CustomAttachFormik };
