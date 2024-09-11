import React from "react";
const DetailsStep = ({ detailTitle, Details,clas, ...props }) => {
  return (
    <div className={clas ?? "detailDatas"} {...props}>
       <label style={{flex:2}}>{detailTitle ?? ""}</label>
      <label style={{flex:1}}>:</label>
      <label style={{flex:2}} className="detailsValue">{Details ?? ""}</label>
    </div>
  );
};
export { DetailsStep };
