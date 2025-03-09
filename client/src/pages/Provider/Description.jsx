// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Modal } from "antd"; // Importing Modal if needed, but we're using a separate component
import "antd/dist/reset.css";
// Import Ant Design styles
import "./Description.css";
import profileImage from "../../assets/RupeshBhai.svg";
// import profileImage from "../../assets/images/profile-placeholder.png";

import CandidateModal from "./CandidateModal"; // Ensure the path is correct

const Description = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const jobDetails = {
    title: "Senior UI Designer needed",
    description:
      "Our company Microsoft is looking for a senior UI and UX lead designer to take over March, 2020.",
    requirements: [
      "5 years Experience",
      "Team Leader",
      "Innovative and Creative eye",
    ],
    skills: [
      "Adobe XD",
      "Sketch Pro",
      "Adobe XD",
      "Sketch Pro",
      "Sketch Pro",
      "Sketch Pro",
    ],
    location: "Muskat",
    salary: "55k-70k + Incentives",
  };

  const applicants = [
    {
      id: 1,
      name: "Rupesh Mishra",
      matchPercentage: 90,
      status: "high",
      location: "India",
      type: "Remote",
      description:
        "Had 5 years of working experience as design lead. Working for a reputated com..",
      skills: ["Sketch", "Indesign", "Adobe Suite"],
    },

    {
      id: 2,
      name: "Rupesh Mishra",
      matchPercentage: 64,
      status: "medium",
      location: "India",
      type: "Remote",
      description:
        "Had 5 years of working experience as design lead. Working for a reputated com..",
      skills: ["Sketch", "Indesign", "Adobe Suite"],
    },
    {
      id: 3,
      name: "Rupesh Mishra",
      matchPercentage: 45,
      status: "medium",
      location: "India",
      type: "Remote",
      description:
        "Had 5 years of working experience as design lead. Working for a reputated com..",
      skills: ["Sketch", "Indesign", "Adobe Suite"],
    },
    {
      id: 4,
      name: "Rupesh Mishra",
      matchPercentage: 95,
      status: "high",
      location: "India",
      type: "Remote",
      description:
        "Had 5 years of working experience as design lead. Working for a reputated com..",
      skills: ["Sketch", "Indesign", "Adobe Suite"],
    },
    {
      id: 5,
      name: "Rupesh Mishra",
      matchPercentage: 50,
      status: "medium",
      location: "India",
      type: "Remote",
      description:
        "Had 5 years of working experience as design lead. Working for a reputated com..",
      skills: ["Sketch", "Indesign", "Adobe Suite"],
    },
    {
      id: 6,
      name: "Rupesh Mishra",
      matchPercentage: 30,
      status: "low",
      location: "India",
      type: "Remote",
      description:
        "Had 5 years of working experience as design lead. Working for a reputated com..",
      skills: ["Sketch", "Indesign", "Adobe Suite"],
    },
  ];

  const openModal = (applicant) => {
    setSelectedApplicant(applicant);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedApplicant(null);
    setIsModalOpen(false);
  };

  return (
    <div className="description-container" style={{ background: "white" }}>
      {/* Job Details Section */}
      <div
        className="job-details"
        style={{
          alignContent: "flex-start",
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          // maxWidth: '800px',
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>{jobDetails.title}</h1>
        <p
          className="job-description"
          style={{
            color: "black",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          {jobDetails.description}
        </p>
        <div
          className="requirements"
          style={{
            color: "black",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <strong>Requirements:</strong>
          <ul style={{ paddingLeft: "20px" }}>
            {jobDetails.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div
          className="skillset-section"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <h2>Skillset Required</h2>
          <div
            className="skills-container"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {jobDetails.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div
          className="job-meta"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <div
            className="meta-item"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "flex-start",
            }}
          >
            <span
              className="meta-label"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Location
            </span>
            <span className="meta-value" style={{ color: "black" }}>
              {jobDetails.location}
            </span>
          </div>
          <div
            className="meta-item"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "flex-start",
            }}
          >
            <span
              className="meta-label"
              style={{ color: "black", fontWeight: "bold" }}
            >
              Salary
            </span>
            <span className="meta-value" style={{ color: "black" }}>
              {jobDetails.salary}
            </span>
          </div>
        </div>
      </div>

      {/* Applicants Grid */}
      <div className="applicants-grid">
        {applicants.map((applicant) => (
          <div key={applicant.id} className="applicant-card">
            <div className="card-header">
              <div className="profile-section">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-image"
                />
                <div className="profile-info">
                  {/* Set name to black */}
                  <h3 style={{ color: "black" }}>{applicant.name}</h3>
                  <div className={`match-badge ${applicant.status}`}>
                    {applicant.matchPercentage}% match
                  </div>
                </div>
              </div>
              <button
                className="message-icon"
                onClick={() => openModal(applicant)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "44px", // Increased font size
                  color: "#1890ff", // Blue color (Note: This won't change the emoji color)
                  padding: "12px", // Larger clickable area
                  borderRadius: "50%", // Circular button
                  transition: "transform 0.2s", // Smooth hover effect
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
                aria-label={`Message ${applicant.name}`} // Accessibility enhancement
              >
                🔵
              </button>
            </div>

            <p className="applicant-description">
              {applicant.description} <span className="see-more">See More</span>
            </p>

            <div className="divider"></div>

            <div className="location-type">
              <div className="info-item">
                <span className="label">Location</span>
                {/* Set location value to black */}
                <span className="value" style={{ color: "black" }}>
                  {applicant.location}
                </span>
              </div>
              <div className="info-item">
                <span className="label">Type</span>
                {/* Set type value to black */}
                <span className="value" style={{ color: "black" }}>
                  {applicant.type}
                </span>
              </div>
            </div>

            <div className="skills-section">
              <h4>Skills</h4>
              <div className="skills-list">
                {applicant.skills.map((skill, index) => (
                  <span key={index} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="nav-btn prev">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">4</button>
        <button className="page-btn">5</button>
        <button className="nav-btn next">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Candidate Modal */}
      <CandidateModal
        isOpen={isModalOpen}
        onClose={closeModal}
        applicant={selectedApplicant}
      />
    </div>
  );
};

export default Description;
