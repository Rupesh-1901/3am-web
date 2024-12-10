import React from "react";
import "./Description.css";
import profileImage from "../../assets/images/profile-placeholder.png";

const Description = () => {
  const jobDetails = {
    title: "Senior UI Designer needed",
    description: "Our company Microsoft is looking for a senior UI and UX lead designer to take over March, 2020.",
    requirements: [
      "5 years Experience",
      "Team Leader",
      "Innovative and Creative eye"
    ],
    skills: ["Adobe XD", "Sketch Pro", "Adobe XD", "Sketch Pro", "Sketch Pro", "Sketch Pro"],
    location: "Muskat",
    salary: "55k-70k + Incentives"
  };

  const applicants = [
    {
      id: 1,
      name: "Rupesh Mishra",
      matchPercentage: 90,
      status: "high",
      location: "India",
      type: "Remote",
      description: "Had 5 years of working experience as design lead. Working for a reputated com..",
      skills: ["Sketch", "Indesign", "Adobe Suite"]
    },
    {
      id: 2,
      name: "Rupesh Mishra",
      matchPercentage: 64,
      status: "medium",
      location: "India",
      type: "Remote",
      description: "Had 5 years of working experience as design lead. Working for a reputated com..",
      skills: ["Sketch", "Indesign", "Adobe Suite"]
    },
    {
      id: 3,
      name: "Rupesh Mishra",
      matchPercentage: 45,
      status: "medium",
      location: "India",
      type: "Remote",
      description: "Had 5 years of working experience as design lead. Working for a reputated com..",
      skills: ["Sketch", "Indesign", "Adobe Suite"]
    },
    {
      id: 4,
      name: "Rupesh Mishra",
      matchPercentage: 95,
      status: "high",
      location: "India",
      type: "Remote",
      description: "Had 5 years of working experience as design lead. Working for a reputated com..",
      skills: ["Sketch", "Indesign", "Adobe Suite"]
    },
    {
      id: 5,
      name: "Rupesh Mishra",
      matchPercentage: 50,
      status: "medium",
      location: "India",
      type: "Remote",
      description: "Had 5 years of working experience as design lead. Working for a reputated com..",
      skills: ["Sketch", "Indesign", "Adobe Suite"]
    },
    {
      id: 6,
      name: "Rupesh Mishra",
      matchPercentage: 30,
      status: "low",
      location: "India",
      type: "Remote",
      description: "Had 5 years of working experience as design lead. Working for a reputated com..",
      skills: ["Sketch", "Indesign", "Adobe Suite"]
    }
  ];

  return (
    <div className="description-container">
      {/* Job Details Section */}
      <div className="job-details">
        <h1>{jobDetails.title}</h1>
        <p className="job-description">{jobDetails.description}</p>
        <div className="requirements">
          <strong>Requirements:</strong>
          <ul>
            {jobDetails.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        
        <div className="skillset-section">
          <h2>Skillset Required</h2>
          <div className="skills-container">
            {jobDetails.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="job-meta">
          <div className="meta-item">
            <span className="meta-label">Location</span>
            <span className="meta-value">{jobDetails.location}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Salary</span>
            <span className="meta-value">{jobDetails.salary}</span>
          </div>
        </div>
      </div>

      {/* Applicants Grid */}
      <div className="applicants-grid">
        {applicants.map((applicant) => (
          <div key={applicant.id} className="applicant-card">
            <div className="card-header">
              <div className="profile-section">
                <img src={profileImage} alt="Profile" className="profile-image" />
                <div className="profile-info">
                  <h3>{applicant.name}</h3>
                  <div className={`match-badge ${applicant.status}`}>
                    {applicant.matchPercentage}% match
                  </div>
                </div>
              </div>
              <button className="message-icon">
                <i className="fas fa-message"></i>
              </button>
            </div>

            <p className="applicant-description">
              {applicant.description} <span className="see-more">See More</span>
            </p>

            <div className="divider"></div>

            <div className="location-type">
              <div className="info-item">
                <span className="label">Location</span>
                <span className="value">{applicant.location}</span>
              </div>
              <div className="info-item">
                <span className="label">Type</span>
                <span className="value">{applicant.type}</span>
              </div>
            </div>

            <div className="skills-section">
              <h4>Skills</h4>
              <div className="skills-list">
                {applicant.skills.map((skill, index) => (
                  <span key={index} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="nav-btn prev"><i className="fas fa-chevron-left"></i></button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">3</button>
        <button className="page-btn">4</button>
        <button className="page-btn">5</button>
        <button className="nav-btn next"><i className="fas fa-chevron-right"></i></button>
      </div>
    </div>
  );
};

export default Description;