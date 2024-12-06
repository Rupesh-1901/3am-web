import CloseIcon from "../../../Assets/CloseIcon.svg";
import React from "react";
import "./popup.css";
const Popup = ({ handleClose, content, popupHeading }) => {
  return (
    <div className="popup-box">
      <div className="box">
        <div className="createHead">
          <label>Are You Sure You Want To {popupHeading}</label>
          <img
            className="close-icon"
            src={CloseIcon}
            alt="close"
            onClick={handleClose}
          />
        </div>
      <div className="horizontalLine createLine"></div>
        <div className="bodyContainer ">
        <div style={{padding:"12px",fontSize:"14px"}}>{content}</div>
      </div>
        </div>
    </div>
  );
};

export { Popup };
