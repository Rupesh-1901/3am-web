import React from "react";
import { useEffect } from "react";

const LabelCustom = ({ labelName, mandatory, fontWeight, style,clas }) => {
 
  return (
    <label
      className={clas?clas:"label-custom"}
      style={{ ...style,  fontWeight: `${fontWeight}` }}
    >
      {labelName} <span style={{ color: "red" }}>{mandatory ? "*" : ""}</span>
    </label>
  );
};
export { LabelCustom };
