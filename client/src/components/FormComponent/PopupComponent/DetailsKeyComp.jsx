import React from 'react';
import { useEffect } from 'react';
const DetailsKeyComp = ({detailTitle, Details}) => {
    // useEffect(()=>{
    //     document.title = `PeopleSol - Details Key Comp`;
    //     return () => {
    //       document.title = 'PeopleSol';
    //     };
    //   })
    return (
    <div className="detailData">
                    <label style={{width:"50%"}}>{detailTitle??""}</label>
                    <label>:</label>
                    <label className="detailsValue">{Details??""}</label>
                    </div>
    )
}
export {DetailsKeyComp}