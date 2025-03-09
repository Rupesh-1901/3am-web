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
import help from "../../assets/coordHelp.svg";
import rtArr from "../../assets/coordRightarr.svg";
import menuIcon from "../../assets/menu.svg";
import separator from "../../assets/coordLandingPageSeparator.svg";
import coordApplicants from "../../assets/coordinatorApplicants.svg";
import coordJobs from "../../assets/coordinatorJobs.svg";
import coordActive from "../../assets/coordinatorLandingActive.svg";

const JobsPage = () => {
  const navigate = useNavigate();
  const [totalApplicants] = useState(5243);
  const [totalJobs] = useState(1893);
  const [activeNow] = useState(189);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
        <nav className="navbar1" style={{ width: "100%" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="lf-part">
              <span className="navbar-title">For Provider</span>
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
              </div>
            </div>
          </div>
        </nav>
        <div
          className="stats-wrapper-1"
          style={{ marginLeft: "12rem", width: "80%", marginBottom: "2rem" }}
        >
          <div className="stats-container" style={{ marginTop: "0rem" }}>
            {/* Total Applicants */}
            <div className="stat-card">
              <img
                src={coordApplicants}
                alt="Applicants Icon"
                className="stat-icon"
              />
              <div className="stat-content">
                <p className="stat-title">Total Applicants</p>
                <p className="stat-number">{totalApplicants}</p>
                <p className="stat-change positive">
                  ▲ 16%{" "}
                  <span style={{ color: "gray" }}>
                    <strong>This Month</strong>
                  </span>
                </p>
              </div>
            </div>

            <img src={separator} alt="Separator" className="separator" />

            {/* Total Jobs Posted */}
            <div className="stat-card">
              <img
                src={coordJobs}
                alt="Jobs Posted Icon"
                className="stat-icon"
              />
              <div className="stat-content">
                <p className="stat-title">Total Jobs Posted</p>
                <p className="stat-number">{totalJobs}</p>
                <p className="stat-change negative">
                  ▼ 1%{" "}
                  <span style={{ color: "gray" }}>
                    <strong>This Month</strong>
                  </span>
                </p>
              </div>
            </div>

            <img src={separator} alt="Separator" className="separator" />

            {/* Active Now */}
            <div className="stat-card">
              <img
                src={coordActive}
                alt="Active Users Icon"
                className="stat-icon"
              />
              <div className="stat-content">
                <p className="stat-title">Active Now</p>
                <p className="stat-number">{activeNow}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "20px",
          }}
        >
          {jobCards.map((card) => (
            <Link
              to={`/coordinator/applicants-approval`}
              key={card.id}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "16rem",
                  border: "1px solid #e8e8e8",
                  borderRadius: "12px",
                  gap: "2.5rem",
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
                <div style={{ display: "flex", gap: "2rem" }}>
                  {" "}
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
                      style={{ height: "6rem", width: "7rem" }}
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
                  </div>
                </div>
                {/* Card Image */}
                <div
                  style={{
                    backgroundColor: "#f0f0f0",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  <span style={{ margin: "auto", alignContent: "center" }}>
                    <strong>{card.applications} Applications</strong>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
