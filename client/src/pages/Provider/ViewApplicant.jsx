// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./ViewApplicant.css";
import "../Home/HomePage.css";
import framecard from "../../assets/images/applicantscard.png"
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
  }
];

const ViewApplicants = () => {
  return (
    <>
      {/* Header Section */}
      <div
        className="header-container"
        style={{
          width: "100%",
          boxShadow: "0px -1.08px 0px 0px #E4E5E8 inset",
          padding: "10px 0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <section className="homeSectionWidth searchSection" style={{ padding: "0px" }}>
          <div style={{ display: "flex", gap: "50px", alignItems: "center" }}>
            {/* Company Logo */}
            <div>
              <img src={companyLogo} alt="Company Logo" />
            </div>

            {/* Search Bar */}
            <div className="searchInput">
              <div className="search-bar-container">
                <span className="search-icon">
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
                <input
                  type="text"
                  className="search-input"
                  placeholder="Job title, keyword, company"
                />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <button className="featuredJobButton view-all">View All</button>
            <button className="featuredJobButton post-job">Post A Job</button>
          </div>
        </section>
      </div>

      {/* Job Applications Section */}
      <div className="viewapplicants-container">
        <div className="viewapplicants-header">
          <h1 className="viewapplicants-title">Job Applications</h1>
          <button className="update-btn">Update Changes</button>
        </div>

        {/* Job Cards Grid */}
        <div className="viewapplicants-grid">
          {jobCards.map((card) => (
            <Link
              to={`/provider/view-applicants/description/${card.id}`}
              key={card.id}
              className="viewapplicants-card-link"
            >
              <div className="viewapplicants-card">
                <div className="card-image">
                  <img src={framecard} alt="Job Icon" className="icon" />
                </div>
                <div className="card-content">
                  <h2 className="card-title">{card.title}</h2>
                  <p className="card-location">{card.location}</p>
                  <div className="card-status">
                    <span
                      className="status-dot"
                      style={{
                        backgroundColor: card.status === "Active" ? "green" : "red",
                      }}
                    ></span>
                    <span className="status-text">{card.status}</span>
                  </div>
                  <p className="card-date">Posted on {card.postedDate}</p>
                  <div className="applications-box">
                    <span>{card.applications} Applications</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewApplicants;