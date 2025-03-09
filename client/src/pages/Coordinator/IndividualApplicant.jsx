import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CoordinatorApplicantsPage.css";
import "./CoordLandingPage.css";
import { Link } from "react-router-dom";
import framecard from "../../assets/images/applicantscard.png";

import Navbar from "../../components/ui/Navbar";
import RupeshBhai from "../../assets/RupeshBhai.svg";
import searchButton from "../../assets/coordsrch.svg";
import dashboard from "../../assets/coordDashBoard.svg";
import Location from "../../assets/coordLocation.svg";
import DatePosted from "../../assets/coordDatePosted.svg";
import oldtonew from "../../assets/coordOldtoNew.svg";
import company from "../../assets/coordCompany.svg";
import Tick from "../../assets/TickMark.svg";
import rtArr from "../../assets/coordRightarr.svg";
import copy from "../../assets/copySymbol.svg";
import help from "../../assets/coordHelp.svg";
import blueRedirect from "../../assets/redirectSymbolBlue.svg";
import RedRedirect from "../../assets/redirectSymbolRed.svg";
import menuIcon from "../../assets/menu.svg";
import separator from "../../assets/coordLandingPageSeparator.svg";
import coordApplicants from "../../assets/coordinatorApplicants.svg";
import coordJobs from "../../assets/coordinatorJobs.svg";
import coordActive from "../../assets/coordinatorLandingActive.svg";

const IndividualApplicant = () => {
  const navigate = useNavigate();
  const [totalApplicants] = useState(5243);
  const [totalJobs] = useState(1893);
  const [activeNow] = useState(189);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const jobDetails = {
    title: "Rupesh Mishra",
    description: "Full Stack Developer",
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

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="aside-cont" style={{ width: "18%" }}>
        {isSidebarOpen ? (
          <aside
            className={`left-sidebar ${isSidebarOpen ? "open" : "closed"}`}
            style={{ overflow: "auto" }}
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
        <nav className="navbar1" style={{ marginBottom: "2rem", width: "90%" }}>
          <span
            className="navbar-title"
            style={{ color: "black", fontWeight: "700", fontSize: "2rem" }}
          >
            Applicants
          </span>
          <div className="navbar-buttons">
            <button
              className="dashboard-btn"
              onClick={() => navigate("/coordinator/applicants-approval")}
            >
              Back &#8594;
            </button>
            <button className="search-btn">
              Search
              <img
                src={searchButton}
                alt="Search Icon"
                className="search-icon"
              />
            </button>
          </div>
        </nav>
        <div className="job-details" style={{ borderBottom: "1px solid #ccc" }}>
          <div className="job-detail-left">
            <h1>{jobDetails.title}</h1>
            <p
              className="job-description"
              style={{
                color: "rgba(49, 49, 214, 0.863)",
                fontSize: "1.3rem",
                fontWeight: "500",
              }}
            >
              {jobDetails.description}
            </p>
            <div
              className="skills-section"
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              {/* <div style={{ marginTop: "1rem" }}> */}
              <h4
                style={{
                  fontSize: "1.5rem",
                  color: "black",
                  marginTop: "1.3rem",
                  marginRight: "1.5rem",
                }}
              >
                Unique ID
              </h4>
              {/* </div> */}

              <div
                className="skills-list"
                style={{
                  backgroundColor: "rgba(49, 49, 214, 0.863)",
                  borderRadius: "5px",
                  width: "14vw",
                }}
              >
                <p style={{ color: "white", margin: "auto" }}>
                  #46384ut6584947
                </p>
              </div>
              <div
                className="copy-symbol"
                style={{ marginTop: "1rem", cursor: "pointer" }}
              >
                <img src={copy} alt="" />
              </div>
            </div>
            <div className="Experience" style={{ marginBottom: "1.5rem" }}>
              <p
                className="experience-header"
                style={{
                  marginBottom: "0.4rem",
                  color: "black",
                  fontSize: "1.5rem",
                }}
              >
                <strong>Experience:</strong>
              </p>

              <p style={{ marginBottom: "0" }}>- 5 years experience</p>
              <p style={{ marginBottom: "0" }}>
                - Team lead at cognizant for 2 years
              </p>
              <p style={{ marginBottom: "0" }}>- innovative and creative eye</p>
              <p style={{ marginBottom: "0" }}>
                - Handled multiple projects Hand in Hand{" "}
              </p>
            </div>

            <div className="credentials" style={{ marginBottom: "1.5rem" }}>
              <p
                style={{
                  fontSize: "1.4rem",
                  color: "black",
                }}
              >
                <strong>Credentials</strong>
              </p>
              <div
                className="credentials-container"
                style={{
                  display: "flex",
                  gap: "3.8rem",
                  alignItems: "center",
                  width: "20%",
                  marginTop: "10px",
                }}
              >
                {/* Left Section - Aadhar Link */}
                <div
                  className="aadhar-section"
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <span>Aadhar</span>
                  <a
                    href="#"
                    style={{ color: "blue", textDecoration: "underline" }}
                  >
                    link
                  </a>
                  <img
                    src={blueRedirect}
                    alt="Blue Redirect Icon"
                    style={{ cursor: "pointer" }}
                  />
                </div>

                {/* Right Section - Resume */}
                <div
                  className="resume-section"
                  style={{ display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <span>Resume</span>
                  <a
                    href="#"
                    style={{ color: "blue", textDecoration: "underline" }}
                  >
                    link
                  </a>
                  <img
                    src={RedRedirect}
                    alt="Red Redirect Icon"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <div className="skillset-section">
              <h2>Skillset Required</h2>
              <div className="skills-container">
                {jobDetails.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="job-meta" style={{ marginBottom: "2rem" }}>
              <div className="meta-item">
                <span className="meta-label" style={{ color: "black" }}>
                  Location
                </span>
                <span className="meta-value" style={{ color: "black" }}>
                  {jobDetails.location}
                </span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Salary</span>
                <span className="meta-value" style={{ color: "black" }}>
                  {jobDetails.salary}
                </span>
              </div>
            </div>
          </div>

          <div className="job-details-right">
            <div
              className="profile-store"
              style={{
                height: "35vh",
                width: "18vw",
                backgroundColor: "grey",

                borderRadius: "3rem",
              }}
            >
              <img
                src={RupeshBhai}
                alt=""
                style={{ height: "35.3vh", width: "18.5vw" }}
              />
            </div>
          </div>
        </div>
        <div
          className="second-cont"
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "flex-end",
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
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#a9a9a9")} // Dark grey on hover
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#d3d3d3")} // Reset on mouse leave
            >
              <div style={{ display: "flex", gap: "1rem" }}>
                <span style={{ display: "block" }}> Approved</span>{" "}
                <img src={Tick} />
              </div>
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
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#d3d3d3")} // Grey on hover
              onMouseLeave={(e) => (e.target.style.backgroundColor = "white")} // Reset on mouse leave
            >
              <span>Discard</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualApplicant;
