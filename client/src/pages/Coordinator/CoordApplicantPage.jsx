import React from "react";
import { useNavigate } from "react-router-dom";
import "./CoordinatorApplicantsPage.css";
import Navbar from "../../components/ui/Navbar";
import RupeshBhai from "../../assets/RupeshBhai.svg";
import searchButton from "../../assets/coordsrch.svg";
import dashboard from "../../assets/coordDashBoard.svg";
import Location from "../../assets/coordLocation.svg";
import DatePosted from "../../assets//coordDatePosted.svg";
import oldtonew from "../../assets/coordOldtoNew.svg";
import company from "../../assets/coordCompany.svg";
import help from "../../assets/coordHelp.svg";
import rtArr from "../../assets/coordRightarr.svg";

const CoordinatorApplicantsPage = () => {
  const navigate = useNavigate();
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
      <div
        style={{ width: "100%", position: "sticky", top: "0", zIndex: "1000" }}
      >
        <Navbar />
      </div>
      {/* Left Sidebar (Fixed) */}
      <aside className="left-sidebar" style={{ borderRadius: "8px" }}>
        <div className="sidebar-top">
          <div className="menu-item">
            <img src={dashboard} alt="Dashboard Icon" />
            <span style={{ color: "#211e1e", fontWeight: "500" }}>
              Dashboard
            </span>
          </div>
          <div className="menu-item">
            <img src={Location} alt="Location Icon" />
            <span style={{ color: "#211e1e", fontWeight: "500" }}>
              Location
            </span>
          </div>
          <div className="menu-item">
            <img
              src={DatePosted}
              alt="Date Icon"
              style={{ backgroundColor: "grey" }}
            />
            <span style={{ color: "#211e1e", fontWeight: "500" }}>
              Date Posted
            </span>
          </div>
          <div className="menu-item">
            <img src={oldtonew} alt="Sort Icon" />
            <span style={{ color: "#211e1e", fontWeight: "500" }}>
              Oldest to Newest
            </span>
          </div>
          <div className="menu-item">
            <img src={company} alt="Company Icon" />
            <span style={{ color: "#211e1e", fontWeight: "500" }}>Company</span>
          </div>
          <div className="menu-item">
            <img src={help} alt="Help Icon" />
            <span style={{ color: "#211e1e", fontWeight: "500" }}>Help</span>
          </div>
        </div>

        <div className="sidebar-bottom">
          <img src={RupeshBhai} alt="User Avatar" className="user-avatar" />
          <div className="user-details">
            <p className="user-name">Rupesh Mishra</p>
            <p className="user-location">Bangalore</p>
          </div>
          <div>&#x2193;</div>
        </div>
      </aside>

      {/* Right Content (Scrollable) */}
      <div className="right-content">
        <nav className="navbar1" style={{ marginBottom: "2rem", width: "80%" }}>
          <span className="navbar-title">For Seeker</span>
          <div className="navbar-buttons">
            <button className="search-btn">
              Search
              <img
                src={searchButton}
                alt="Search Icon"
                className="search-icon"
              />
            </button>
            <button
              className="dashboard-btn"
              onClick={() => navigate("/dashboard")}
            >
              Go to Dashboard &gt;
            </button>
          </div>
        </nav>

        <div className="applicants-grid">
          {applicants.map((applicant) => (
            <div key={applicant.id} className="applicant-card">
              <div className="card-header">
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
                  onClick={() => navigate("/coordinator/applicant-page")}
                >
                  <img
                    src={rtArr}
                    alt="Message"
                    style={{ height: "2rem", width: "2rem", margin: "auto" }}
                  />
                </button>
              </div>

              <p className="applicant-description">
                {applicant.description}{" "}
                <span className="see-more">See More</span>
              </p>

              <div className="divider"></div>

              <div className="location-type">
                <div className="info-item">
                  <span className="label" style={{ fontSize: "1.1rem" }}>
                    Location:
                  </span>
                  <span className="value" style={{ fontSize: "1.1rem" }}>
                    {applicant.location}
                  </span>
                </div>
                <div className="info-item">
                  <span className="label" style={{ fontSize: "1.1rem" }}>
                    Type:
                  </span>
                  <span className="value" style={{ fontSize: "1.1rem" }}>
                    {applicant.type}
                  </span>
                </div>
              </div>

              <div
                className="skills-section"
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  justifyContent: "center",
                }}
              >
                <div style={{ marginTop: "1.2rem" }}>
                  <h4 style={{ fontSize: "1.1rem" }}>Unique ID</h4>
                </div>
                <div
                  className="skills-list"
                  style={{
                    backgroundColor: "grey",
                    borderRadius: "5px",
                    width: "14vw",
                  }}
                >
                  <p style={{ color: "white", margin: "auto" }}>
                    #46384ut6584947
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoordinatorApplicantsPage;
