import React from "react";
import { Details } from "../../Pages/HRMS/Components/DetailsComp/Details";
import { DetailsStep } from "./DetailsStep";
import "./FormComponent.css";
const WorkflowStepsComp = ({ data }) => {
  return (
    <div style={{ width: "100%" }}>
      {data.items.map((item, index) => {
        return (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="indexAc">
              <p>Action{index + 1}</p>
            </div>
            <div className="actionItem">
              <DetailsStep detailTitle={"Action Name"} Details={item.name} />
              <DetailsStep
                detailTitle={"After the workflow is triggered, then"}
                Details={item.actionType}
              />
              {item?.actionType==="Initiate an Approval"?(
                <>
                 <DetailsStep detailTitle={"Approver"} Details={item.approver} />
                 <DetailsStep detailTitle={"Viewers"} Details={item.viewers} />
                 <DetailsStep detailTitle={"If approved, then"} Details={item.ifApproved} />
                 <DetailsStep detailTitle={"If rejected, then"} Details={item.ifRejected} />
                 <DetailsStep detailTitle={"TAT (In Hrs)"} Details={item.tat} />
                </>
              ):item?.actionType==="Send an Email"?(
                <>
                <DetailsStep detailTitle={"Email Viewer"} Details={item?.emailViewers} />
                </>
              ):""}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export { WorkflowStepsComp };
