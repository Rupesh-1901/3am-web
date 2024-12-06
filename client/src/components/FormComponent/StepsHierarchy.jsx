import React from "react";
import "./stepsHierarchy.css";

const StepsHierarchy = ({ workflowData }) => {
  return (
    <div className="hierarcy-container">
      <div className="hierarcy-content">
        {/* {data.map((item,index)=> <div className='stepsH'> {item}</div>)} */}
        <div className="stepsH"> Raise a Ticket</div>
        {workflowData.items.map((it) => {
          return (
            <>
            <div className="stepsH"> {`${it.actionType==="Initiate an Approval"?"Requires an approval from":it.actionType} ${it.approver}`}</div>
            
            </>
          );
        })}
        <div className="stepsH"> Ticket Closure</div>
      </div>
    </div>
  );
};
export { StepsHierarchy };
