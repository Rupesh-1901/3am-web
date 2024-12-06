import React from "react";
import "./popup.css";
const PopProfile = ({
  handleClose,
  firstClassName,
  secondClassName,
  content,
  minWidt,
  minHeigh,
  contentClassName,
  bodyClassName,
}) => {
  return (
    <div style={{height:'105%'}} className={"popup-box " + (firstClassName ?? "")}>
      <div
        className={`box ${secondClassName}`}
        style={{ minHeight: minHeigh ?? "400px", minWidth:minWidt ??  "580px" }}
      >
        {content}
      </div>
    
    </div>
  );
};

export { PopProfile };
