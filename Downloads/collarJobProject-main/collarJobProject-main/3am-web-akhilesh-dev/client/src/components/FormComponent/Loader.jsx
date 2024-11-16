import React from "react";
import { useEffect } from "react";
import { SpinningCircleLoader,GooeyLoader1 } from "react-loaders-kit";

function Loader() {
 
  const loaderProps = {
    loading: true,
    size: 45,
    duration: 5,
    colors: ['#1296b0', '#ffffff'],
    
  };

  return (
    <div
      className="loader"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "163px",
        height:"100%",
        flexGrow: 1,
      }}
    >
      <SpinningCircleLoader {...loaderProps} />
      <div className="progress">Please Wait</div>
    </div>
  );
}

export { Loader };

export const Load = () => {
  const loaderProps = {
    loading: true,
    size: 80,
    duration: 5,
    color: "var(--primary)",
  };

  return (
    <div
      className="loader"
      style={{ display: "flex", justifyContent: "center", marginTop: " 36%" }}
    >
      <GooeyLoader1 {...loaderProps} />
      <div className="progress">Please Wait</div>
    </div>
  );
};
