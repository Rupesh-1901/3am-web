// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./ViewApplicant.css";
import framecard from "../../assets/images/applicantscard.png"

const jobCards = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  title: "Product Designer",
  location: "New Delhi",
  status: "Active",
  postedDate: "11/11/2023",
  applications: 134,
}));

const ViewApplicants = () => {
  return (
    <div className="viewapplicants-container">
      <h1 className="viewapplicants-title">Job Applications</h1>
      <div className="viewapplicants-grid">
        {jobCards.map((card) => (
          <Link
            to={`/job-application-details/${card.id}`}
            key={card.id}
            className="viewapplicants-card-link"
          >
            <div className="viewapplicants-card">
              <div className="card-image">
                <img src={framecard} alt="Job Icon" className="icon"/>
              </div>
              <div className="card-content">
                <h2 className="card-title">{card.title}</h2>
                <p className="card-location">{card.location}</p>
                <div className="card-status">
                  <span className="status-dot"></span>
                  <span className="status-text">{card.status}</span>
                </div>
                <p className="card-date">posted on {card.postedDate}</p>
                <div className="applications-box">
                  <span>{card.applications} Applications</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ViewApplicants;
