import CloseIcon from "../../../Assets/CloseIcon.svg";
import React from "react";
import "./popup.css";
import { IconButton } from "@mui/material";
import backArrowYellow from "../../../Assets/backArrowYellow.svg";
const Popup = ({
  handlePrevious,
  needPrevious = false,
  handleClose,
  firstClassName,
  secondClassName,
  content,
  contentClassName,
  bodyClassName,
  popupHeading,
  color,
  createMyHead,
}) => {
  return (
    <div className={"popup-box " + (firstClassName ?? "")}>
      <div className={"box " + (secondClassName ?? "")}>
        <div className={`${createMyHead ?? "createHead"}`}>
          <div>
            {needPrevious && (
              <IconButton
                style={{ marginRight: "3px" }}
                onClick={handlePrevious}
                title="Previous"
              >
                <img className="back-icon" src={backArrowYellow} alt="back-icon" />
              </IconButton>
            )}
            <label style={{color:color}}>{popupHeading}</label>
          </div>
          <IconButton
            onClick={() => {
              if (needPrevious) {
                handlePrevious();
                handleClose();
              } else {
                handleClose();
              }
            }}
            title="Close"
          >
            <img className="close-icon" src={CloseIcon} alt="close" />
          </IconButton>
        </div>
        <div className="horizontalLine createLine"></div>
        <div className={"bodyContainer " + (bodyClassName ?? "")}>
          <div className={"popupContentHolder " + (contentClassName ?? "")}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Popup };
