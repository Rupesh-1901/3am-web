/* eslint-disable no-unused-vars */
import React from "react";

import { NavLink, Outlet } from "react-router-dom";
import "../index.css"; // Optional: For custom styles

const ProviderLayout = () => {
  return (
    <div className="provider-container">
      {/* <nav className="provider-tabs">
        <NavLink
          to="create-job-post"
          className={({ isActive }) => (isActive ? "tab active" : "tab")}
        >
          Create Job Post
        </NavLink>
        <NavLink
          to="view-applicants"
          className={({ isActive }) => (isActive ? "tab active" : "tab")}
        >
          View Applicants
        </NavLink>
        <NavLink
          to="profile"
          className={({ isActive }) => (isActive ? "tab active" : "tab")}
        >
          Profile
        </NavLink>
      </nav> */}
      <div className="provider-content">
        <Outlet />
      </div>
    </div>
  );
};

export default ProviderLayout;
