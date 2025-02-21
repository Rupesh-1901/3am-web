/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ProfilePage = () => {
  // State variables for form fields
  const [companyName, setCompanyName] = useState("Your Company Name");
  const [companyDetails, setCompanyDetails] = useState(
    "Detailed information about your company."
  );

  // Handler for form submission
  const handleSave = (e) => {
    e.preventDefault();
    // Implement save functionality here (e.g., API call)
    console.log("Saved:", { companyName, companyDetails });
    alert("Profile information saved successfully!");
  };

  // Inline styles
  const containerStyle = {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  };

  const formGroupStyle = {
    marginBottom: "15px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  const textareaStyle = {
    ...inputStyle,
    height: "100px",
    resize: "vertical",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    backgroundColor: "#218838",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Brand Profile</h2>
      <form onSubmit={handleSave}>
        <div style={formGroupStyle}>
          <label htmlFor="companyName" style={labelStyle}>
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            style={inputStyle}
            required
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="companyDetails" style={labelStyle}>
            Company Details
          </label>
          <textarea
            id="companyDetails"
            name="companyDetails"
            value={companyDetails}
            onChange={(e) => setCompanyDetails(e.target.value)}
            style={textareaStyle}
            required
          />
        </div>

        {/* Add more form fields as needed */}

        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                buttonStyle.backgroundColor)
            }
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
