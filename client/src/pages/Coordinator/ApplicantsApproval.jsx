import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CoordinatorApplicantsPage.css";
import "./CoordLandingPage.css";
import { Link } from "react-router-dom";
import framecard from "../../assets/images/applicantscard.png";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import Navbar from "../../components/ui/Navbar";
import RupeshBhai from "../../assets/RupeshBhai.svg";
import searchButton from "../../assets/coordsrch.svg";
import dashboard from "../../assets/coordDashBoard.svg";
import Location from "../../assets/coordLocation.svg";
import DatePosted from "../../assets/coordDatePosted.svg";
import oldtonew from "../../assets/coordOldtoNew.svg";
import company from "../../assets/coordCompany.svg";
import help from "../../assets/coordHelp.svg";
import rtArr from "../../assets/coordRightarr.svg";
import menuIcon from "../../assets/menu.svg";
import separator from "../../assets/coordLandingPageSeparator.svg";
import coordApplicants from "../../assets/coordinatorApplicants.svg";
import coordJobs from "../../assets/coordinatorJobs.svg";
import coordActive from "../../assets/coordinatorLandingActive.svg";
import secretKey from "../../assets/secretKey.svg";

const ApplicantsApproval = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isApproved, setIsApproved] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 9; // Maximum 9 cards per page
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

  const totalPages = Math.ceil(applicants.length / itemsPerPage);

  // Get current applicants for the selected page
  const currentApplicants = applicants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="aside-cont" style={{ width: "18%" }}>
        {isSidebarOpen ? (
          <aside
            className={`left-sidebar ${isSidebarOpen ? "open" : "closed"}`}
            style={{ overflow: "auto", backgroundColor: "#f9f9f9" }}
          >
            <button
              onClick={toggleSidebar}
              class="close-btn"
              style={{
                height: "1vw",

                zIndex: "1001",
                width: "2vw",
              }}
            >
              <img
                src={menuIcon} // Replace with your menu icon src
                alt="Menu"
                style={{ height: "2vw", width: "2vw" }}
              />
            </button>

            <div className="sidebar-top">
              <div className="menu-item" style={{ marginTop: "2rem" }}>
                <img src={dashboard} alt="Dashboard Icon" />
                <span>Dashboard</span>
              </div>
              <div className="menu-item">
                <img src={Location} alt="Location Icon" />
                <span>Location</span>
              </div>
              <div className="menu-item">
                <img src={DatePosted} alt="Date Icon" />
                <span>Date Posted</span>
              </div>
              <div className="menu-item">
                <img src={oldtonew} alt="Sort Icon" />
                <span>Oldest to Newest</span>
              </div>
              <div className="menu-item">
                <img src={company} alt="Company Icon" />
                <span>Company</span>
              </div>
              <div className="menu-item">
                <img src={help} alt="Help Icon" />
                <span>Help</span>
              </div>
            </div>
          </aside>
        ) : (
          <div
            className="mini-sidebar"
            style={{
              zIndex: 100,
              width: "3vw", // Slightly wider than just a button
              backgroundColor: "#f9f9f9", // Dark background like in the image
              height: "100vh", // Full height
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "1rem 0",
              boxShadow: "2px 0px 5px rgba(0,0,0,0.5)",
            }}
          >
            {/* Menu Button */}
            <button
              className="menu-btn"
              onClick={toggleSidebar}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <img
                src={menuIcon} // Replace with your menu icon src
                alt="Menu"
                style={{ height: "2vw", width: "2vw" }}
              />
            </button>

            {/* Additional Icons/Elements */}
            <div
              className="mini-icons"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <img
                src={dashboard} // Placeholder for a profile/user icon
                alt="Profile"
                style={{ height: "2vw", width: "2vw", borderRadius: "50%" }}
              />
              <img
                src={Location} // Placeholder for settings icon
                alt="Settings"
                style={{ height: "2vw", width: "2vw" }}
              />
              <img
                src={DatePosted} // Placeholder for settings icon
                alt="Settings"
                style={{ height: "2vw", width: "2vw" }}
              />
              <img
                src={oldtonew} // Placeholder for settings icon
                alt="Settings"
                style={{ height: "2vw", width: "2vw" }}
              />
              <img
                src={company} // Placeholder for settings icon
                alt="Settings"
                style={{ height: "2vw", width: "2vw" }}
              />
              <img
                src={help} // Placeholder for settings icon
                alt="Settings"
                style={{ height: "2vw", width: "2vw" }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="right-content" style={{ flexGrow: "1", width: "82%" }}>
        <div
          className="job-details-cont"
          style={{
            display: "flex",
            gap: "1.5rem",
            borderBottom: "1px solid #ccc",
          }}
        >
          {" "}
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
                  <span style={{ fontSize: "1.5rem" }}>
                    <li key={index}>{req}</li>
                  </span>
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
                flexDirection: "row",
                alignItems: "center",

                gap: "2rem",
              }}
            >
              <div
                className="meta-item"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "flex-start",
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
                  flexDirection: "row",
                  gap: "1rem",
                  alignItems: "center",
                  justifyContent: "flex-start",
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
            {isApproved && (
              <div
                className="search-container"
                style={{
                  width: "100%",
                  display: "flex",
                  gap: "2rem",
                  alignItems: "center",
                }}
              >
                <div
                  className="text-cont"
                  style={{
                    color: "#1E90FF",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{ display: "block", textDecorationLine: "none" }}
                  >
                    Assign Applicant by Unique ID
                  </span>
                </div>
                <div
                  className="applicant-id-container"
                  style={{ width: "70%" }}
                >
                  <input
                    type="text"
                    placeholder="Enter Applicant ID"
                    style={{
                      borderRadius: "8px",
                      padding: "8px",
                      border: "1px solid #ccc",
                      outline: "none",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <div
            className="company-image-cont"
            style={{
              marginTop: "5rem",
              marginRight: "5rem",
            }}
          >
            <img
              src={framecard}
              style={{
                height: "15rem",
                width: "18rem",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
        <div
          className="approve-btn-container"
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <div className="first-cont">
            <h4 className="applied-text" style={{ color: "black" }}>
              Applicants applied
            </h4>
          </div>
          <div
            className="second-cont"
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div className="first-btn">
              <button
                style={{
                  backgroundColor: "#d3d3d3", // Light grey
                  border: "1px solid #808080", // Border color
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#a9a9a9")
                } // Dark grey on hover
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#d3d3d3")
                } // Reset on mouse leave
              >
                <span onClick={() => setIsApproved(true)}>Approve</span>
              </button>
            </div>
            <div className="second-btn">
              <button
                style={{
                  backgroundColor: "white",
                  border: "1px solid #808080", // Border color
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#d3d3d3")
                } // Grey on hover
                onMouseLeave={(e) => (e.target.style.backgroundColor = "white")} // Reset on mouse leave
              >
                <span onClick={() => setIsApproved(false)}>Discard</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          {isApproved && (
            <div className="applicants-grid">
              {currentApplicants.map((applicant) => (
                <div key={applicant.id} className="applicant-card">
                  <div className="card-header" style={{ marginBottom: "0" }}>
                    <div className="profile-section">
                      <img
                        src={RupeshBhai}
                        alt="Profile"
                        className="profile-image"
                        style={{ width: "5rem", height: "5rem" }}
                      />
                      <div className="profile-info">
                        <h3>{applicant.name}</h3>
                        <div className={`match-badge ${applicant.status}`}>
                          {applicant.matchPercentage}% match
                        </div>
                      </div>
                    </div>
                    <button
                      className="message-icon"
                      onClick={() =>
                        navigate("/coodinator/individual-applicant")
                      }
                    >
                      <img
                        src={rtArr}
                        alt="Message"
                        style={{
                          height: "2rem",
                          width: "2rem",
                          margin: "auto",
                        }}
                      />
                    </button>
                  </div>

                  <div
                    className="skills-section"
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      justifyContent: "center",
                    }}
                  ></div>
                  <div
                    className="id-container"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    <div
                      className="text-cont"
                      style={{ fontWeight: "bold", color: "black" }}
                    >
                      Unique ID:
                    </div>
                    <div
                      className="idValue-cont"
                      style={{
                        backgroundColor: "#A0A5A8",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        color: "white",
                      }}
                    >
                      #4638489ADFCVU
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Buttons */}
          {totalPages > 1 && (
            <Stack spacing={2} alignItems="center" sx={{ marginTop: "1rem" }}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(event, page) => setCurrentPage(page)}
                color="primary"
                size="large"
                sx={{
                  "& .MuiPaginationItem-root": {
                    borderRadius: "50%", // Makes the buttons circular
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "black", // Ensures all buttons are black
                    color: "white",
                    "&:hover": {
                      backgroundColor: "gray", // Gray on hover
                    },
                  },
                  "& .MuiPaginationItem-page.Mui-selected": {
                    backgroundColor: "black !important", // Ensures the selected page stays black
                    color: "white !important",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "darkgray !important", // Dark gray when selected and hovered
                    },
                  },
                }}
              />
            </Stack>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicantsApproval;
