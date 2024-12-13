/* eslint-disable no-unused-vars */
// src/pages/Provider/ViewApplicants.jsx

import React , { useState } from "react";
import { Link } from "react-router-dom";
import framecard from "../../assets/images/applicantscard.png";
import Premium from "./Premium";
import companyLogo from "../../assets/companyLogo.svg";

const jobCards = [
  {
    id: 1,
    title: "Product Designer",
    location: "New Delhi",
    status: "Active",
    postedDate: "2024-03-15",
    applications: 134,
  },
  {
    id: 2,
    title: "Product Designer",
    location: "New Delhi",
    status: "Active",
    postedDate: "2024-03-15",
    applications: 134,
  },
  {
    id: 3,
    title: "Product Designer",
    location: "New Delhi",
    status: "Active",
    postedDate: "2024-03-15",
    applications: 134,
  },
  {
    id: 4,
    title: "Product Designer",
    location: "New Delhi",
    status: "Active",
    postedDate: "2024-03-15",
    applications: 134,
  },
  {
    id: 5,
    title: "Product Designer",
    location: "New Delhi",
    status: "Active",
    postedDate: "2024-03-15",
    applications: 134,
  },
  {
    id: 6,
    title: "Product Designer",
    location: "New Delhi",
    status: "Active",
    postedDate: "2024-03-15",
    applications: 134,
  },
  {
    id: 7,
    title: "Product Designer",
    location: "New Delhi",
    status: "Active",
    postedDate: "2024-03-15",
    applications: 134,
  },
];

const ViewApplicants = () => {
  const [isPremiumOpen, setPremiumOpen] = useState(false);
  return (
    <>
      {/* Header Section */}
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          boxShadow: "0px -1.08px 0px 0px #E4E5E8 inset",
          padding: "10px 0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <section
          style={{
            width: "100%",
            maxWidth: "1200px", // Adjust based on your design
            padding: "0px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "50px", alignItems: "center" }}>
            {/* Company Logo */}
            <div>
              <img
                src={companyLogo}
                alt="Company Logo"
                style={{ height: "40px" }}
              />
            </div>

            {/* Search Bar */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                {/* Search Icon */}
                <span
                  style={{
                    position: "absolute",
                    left: "10px",
                    pointerEvents: "none",
                  }}
                >
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7359 21.3732C9.96323 21.3732 6.09423 17.5042 6.09423 12.7315C6.09423 7.95885 9.96323 4.08984 14.7359 4.08984C19.5086 4.08984 23.3776 7.95885 23.3776 12.7315C23.3776 17.5042 19.5086 21.3732 14.7359 21.3732Z"
                      stroke="#0066FF"
                      strokeWidth="1.62"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.93378 23.5334L8.63269 18.8345"
                      stroke="#0066FF"
                      strokeWidth="1.62"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {/* Search Input */}
                <input
                  type="text"
                  placeholder="Job title, keyword, company"
                  style={{
                    width: "100%",
                    padding: "10px 10px 10px 40px", // Padding-left to accommodate the icon
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    fontSize: "16px",
                    backgroundColor: "#fff",
                  }}
                />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#1890ff",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              View All
            </button>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#52c41a",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Post A Job
            </button>
          </div>
        </section>
      </div>

      {/* Job Applications Section */}
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1 style={{ fontSize: "24px", margin: "0" }}>Job Applications</h1>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#1890ff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
            onClick={() => setPremiumOpen(true)}
          >
            Upgrade to Premium
          </button>
        </div>

        {/* Job Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {jobCards.map((card) => (
            <Link
              to={`/provider/view-applicants/description/${card.id}`}
              key={card.id}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #e8e8e8",
                  borderRadius: "8px",
                  padding: "20px",
                  transition: "box-shadow 0.3s",
                  backgroundColor: "#fafafa",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Card Image */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "15px",
                  }}
                >
                  <img
                    src={framecard}
                    alt="Job Icon"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
                {/* Card Content */}
                <div style={{ flex: "1" }}>
                  <h2
                    style={{
                      fontSize: "20px",
                      margin: "0 0 10px 0",
                      color: "#333",
                    }}
                  >
                    {card.title}
                  </h2>
                  <p style={{ color: "#555", margin: "0 0 10px 0" }}>
                    {card.location}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor:
                          card.status === "Active" ? "green" : "red",
                        marginRight: "8px",
                      }}
                    ></span>
                    <span style={{ color: "#555", fontSize: "14px" }}>
                      {card.status}
                    </span>
                  </div>
                  <p
                    style={{
                      color: "#777",
                      fontSize: "14px",
                      marginBottom: "10px",
                    }}
                  >
                    Posted on {card.postedDate}
                  </p>
                  <div
                    style={{
                      backgroundColor: "#f0f0f0",
                      padding: "8px 12px",
                      borderRadius: "4px",
                      display: "inline-block",
                      fontSize: "14px",
                      color: "#333",
                    }}
                  >
                    {card.applications} Applications
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Premium isOpen={isPremiumOpen} onClose={() => setPremiumOpen(false)} />
      </div>
    </>
  );
};

export default ViewApplicants;
