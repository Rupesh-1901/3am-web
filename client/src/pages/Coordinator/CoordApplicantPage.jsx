import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CoordinatorApplicantsPage.css";
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

const CoordinatorApplicantsPage = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
  ];

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
        <nav className="navbar1">
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="lf-part">
              <span className="navbar-title">For Seeker</span>
            </div>
            <div className="rf-part">
              {" "}
              <div className="navbar-buttons">
                <button className="search-btn">
                  Search{" "}
                  <img
                    src={searchButton}
                    alt="Search"
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
            </div>
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
                  <img src={rtArr} alt="Message" className="message-img" />
                </button>
              </div>
              <p className="applicant-description">
                {applicant.description}{" "}
                <span className="see-more">See More</span>
              </p>
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
      </div>
    </div>
  );
};

export default CoordinatorApplicantsPage;
