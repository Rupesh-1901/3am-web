import CloseIcon from "../../../Assets/CloseIcon.svg";
import React from "react";
import "./popup.css";
import { Loader } from "../Loader";
import { IconButton } from "@mui/material";
import { camelToCapital } from "../../../Utilities/camelToCapital";
const ApprovePopup = ({
  handleClose,
  content,
  selectedRows,
  popupHeading,
  type,
  loading,
}) => {
  console.log('type',type)
  return (
    <div className="popup-box">
      <div className="box" style={{ minHeight: "0px" }}>
        <div className="createHead">
          <label>Confirm {type ? type === "RejectAll" ? "Reject" : "Approve" :'Unpaid Leave'}</label>
          <IconButton onClick={handleClose}>
            <img className="close-icon" src={CloseIcon} alt="close" />
          </IconButton>
        </div>
        <div className="popupBodyContainer">
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="popApproveLabel">
                {selectedRows?.length === 1 ? (
                  <>
                    <label>
                      Are you sure you want to{" "}
                      {type ? type === "RejectAll" ? "reject" : "approve": ""} this
                      request?
                    </label>
                  </>
                ) : (
                  <label>
                   {popupHeading=="Proceed with Unpaid Leave"?popupHeading:'Are you sure you want to '} 
                    {type ? type === "RejectAll" ? "reject these" : "approve these": ""} 
                    {selectedRows?.length}  {popupHeading=="Proceed with Unpaid Leave ?"?'':'requests?'}
                  </label>
                )}
              </div>
              <div className="bodyContainer">
                <div style={{ padding: "2px 8px", fontSize: "14px" }}>
                  {content}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { ApprovePopup };
