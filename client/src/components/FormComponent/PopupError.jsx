import { IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "../../Assets/CloseIcon.svg";

export const PopupError = ({handleClose}) => {

  return (
    <div className="popup-box">
    <div className="box" style={{ minHeight: "0px" }}>

          <IconButton onClick={handleClose} style={{position:'absolute',right:'0',top:'0'}}>
            <img className="close-icon" src={CloseIcon} alt="close" />
          </IconButton>
      
    <div className="popuplogout" style={{width:'fit-content',height:'fit-content'}}>
  <p style={{fontSize:'25px',fontWeight:500,fontFamily:"Poppins",marginTop:'8px'}}>Your Cannot Create Leave As </p>
      {<p style={{fontSize:'25px',fontWeight:500,fontFamily:"Poppins",marginTop:'8px'}}>Leave balance is insufficient</p>} 


    </div>
    </div>
    </div>
  );
};
