// Loading.js
import React from "react";


const Loading = ({visible }) => {
    if (!visible) return null;
    return (
        <div className="loader-overlay">
          <div className="loader">
            {/* You can add your loader animation or content here */}
            Loading...
          </div>
        </div>
      );
};

export default Loading;
