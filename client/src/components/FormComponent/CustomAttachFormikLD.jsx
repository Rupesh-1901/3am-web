import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import clipLDimg from "../../Assets/clipLDimg.svg";
import clipLDimgDisabled from "../../Assets/clipLDimgDisabled.svg";
import { IconButton } from "@mui/material";
const CustomAttachFormikLD = ({
  values,
  field,
  form,
  multiple,
  disabled,
  setInfos,
  changeButton,
  afterDelete,
  resetAfterDelete,
  id,
}) => {
  const [attachText, setAttachText] = useState("Attach");
  const [clearable, setClearable] = useState(false);
  const hiddenFileInput = React.useRef(null);
  const [fieldType, setFieldType] = useState(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  useEffect(() => {
    if (afterDelete) {
      clearValue();
      resetAfterDelete();
    }
  }, [afterDelete, resetAfterDelete]);
  const clearValue = () => {
    form.setFieldValue(field.name, null);
    setFieldType(null);
    setAttachText("Attach");
    hiddenFileInput.current.value = "";
  };
  const handlethisChange = (event) => {
    if (multiple) {
      form.setFieldValue(field.name, event.currentTarget.files);
    } else {
      form.setFieldValue(field.name, event.currentTarget.files[0]);
    }
    var files = event.target.files[0];
    var video = document.createElement("video");
    video.preload = "metadata";

    video.onloadedmetadata = function () {
      window.URL.revokeObjectURL(video.src);
      setInfos((i) => video.duration);
    };

    // Create a Blob from the file
    var blob = new Blob([files], { type: "video/*" });
    video.src = URL.createObjectURL(blob);
  };
  useEffect(() => {
    if (field?.value) {
      // setClearable(true);
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
      setClearable(false);
      setAttachText("Attach");
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
        // onChange={onChange}
        onChange={handlethisChange}
      />
      <div
        className="input-shorttextAtt"
        style={{
          height: "30px",
          boxShadow: "none",
          minWidth: "120px",
          padding: "7px",
        }}
      >
        <label
          style={{
            overflow: "hidden",
            color: "var(--secondary-text)",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            width: "calc(100% - 68px)",
            display: "block",
            marginLeft: "34px",
          }}
        >
          {attachText}
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
        {changeButton ? (
          <IconButton disabled={true} className="clipContainerLD">
            <img
              src={clipLDimgDisabled}
              alt="ClipIcon"
              style={{ height: "40px", marginLeft: "2px" }}
            />
          </IconButton>
        ) : (
          <IconButton className="clipContainerLD" onClick={handleClick}>
            <img
              src={clipLDimg}
              alt="ClipIcon"
              style={{ height: "40px", marginLeft: "2px" }}
            />
          </IconButton>
        )}
      </div>
      <div style={{ paddingLeft: "12px" }}>
        {fieldType === "string" && field?.value !== "" && (
          <a
            href={`${process.env.REACT_APP_.BASE_URL}/Core/Uploads/${field.value}`}
            target="blank"
          >
            {attachText}
          </a>
        )}
      </div>
    </>
  );
};
export { CustomAttachFormikLD };
