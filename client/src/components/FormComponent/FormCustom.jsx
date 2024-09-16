import React from 'react'
import '../../Pages/HRMS/Components/Create.css'
import { Tabs, Tab } from "@mui/material";
import { IconButton, Input } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import CloseIcon from "../../Assets/CloseIcon.svg";
import { useEffect } from 'react';
export const FormCustom = ({FormHeading,returnPage,propsDiv,handleChange,handleSubmit}) => {
  
  

  return (
    <div className="createPageContainer side-navigation ">
      <div className="createProjectContainer addtaskContainer requsitionForm">
        <div className="createHeader">
          <label>{FormHeading}</label>
          <IconButton className="closeIconHolder">
            <img onClick={returnPage} src={CloseIcon} alt="CloseIcon" />
          </IconButton>
        </div>
        <div className="horizontalLine createLine"></div>
          <div className="bodyContainer stepperCont">
            <form className='formCust'
              onSubmit={handleSubmit}
              onCancel={returnPage}>
                  {propsDiv}
            </form>
              <div className="createFootCust ">
                <div>
                  <button
                    onClick={returnPage}
                    className="createFooterButtonForm1"
                    type="cancel"
                  >
                    Cancel
                  </button>
                </div>
                <div>
                  <button
                    className="createFooterButtonForm2"
                    type="submit"
                  >
                    Create Project
                  </button>
                </div>
              </div>

      
        </div>
      </div>
    </div>
  )
}
