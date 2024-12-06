import CloseIcon from "../../../Assets/CloseIcon.svg";
import React from "react";
import "./popup.css";
import { IconButton } from "@mui/material";
const PopupTable = ({ handleClose, content, popupHeading }) => {
  return (
    <div className="popup-box">
      <div className="box" style={{width:'fit-content'}}>
        <div className="createHead">
          <label>{popupHeading}</label>
          <IconButton onClick={handleClose} title="Close">
            <img className="close-icon" src={CloseIcon} alt="close" />
          </IconButton>
        </div>
        <div className="horizontalLine createLine"></div>
        <div className="bodyContainer ">
          <div className="popupContentHolder">{content}</div>
        </div>
      </div>
    </div>
  );
};

export { PopupTable };
