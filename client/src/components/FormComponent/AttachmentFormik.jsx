import React, { useState } from "react";
import ClipIcon from "../../Assets/ClipIcon.svg";
import { useEffect } from "react";

export const AttachmentFormik = (props) => {

  const { name, onChange, attachText, setAttachText } = props;
  const hiddenFileInput = React.useRef(null);

  const handleInputChange = (event) => {
    const fileUploaded = event.target.files[0];

     if (fileUploaded) {
      setAttachText(fileUploaded.name);
      onChange(event);
    }
  };


  const handleClick = () => {
    // Open the file input dialog
    hiddenFileInput.current.click();
  };
  return (
    <div>
    <input
      type="file"
      name={name}
      ref={hiddenFileInput}
      style={{ display: "none" }}
      onChange={handleInputChange}
    />
    <div className="input-shorttextAtt">
      <label style={{ color: "var(--secondary-text)" }}>{attachText}</label>
      <img
        onClick={handleClick}
        className="clipContainers"
        src={ClipIcon}
        alt="ClipIcon"
      />
    </div>
  </div>
  );
};