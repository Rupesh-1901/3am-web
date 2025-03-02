import React, { useState } from "react";
import Navbar from "../../components/ui/Navbar";
import "./CoordLandingPage.css";
import RupeshBhai from "../../assets/RupeshBhai.svg";
import JobSeeker from "../../assets/coordLandingJobSeeker.svg";
import jobProvider from "../../assets/coordLandingJobProvider.svg";
import separator from "../../assets/coordLandingPageSeparator.svg";
import coordApplicants from "../../assets/coordinatorApplicants.svg";
import coordJobs from "../../assets/coordinatorJobs.svg";
import coordActive from "../../assets/coordinatorLandingActive.svg";
import { useNavigate } from "react-router-dom";

const CoordLandingPage = () => {
	const [totalApplicants] = useState(5243);
	const [totalJobs] = useState(1893);
	const [activeNow] = useState(189);
	const navigate = useNavigate();
	return (
		<div>
			{/* <Navbar /> */}

			{/* User Info Bar */}
			<div className="user-info-bar">
				<div className="user-avatar">
					<img src={RupeshBhai} alt="User Avatar" />
				</div>

				<div className="user-details">
					<p className="user-name" style={{ marginBottom: "0" }}>
						Rupesh Mishra
					</p>
					<p className="user-location">Bangalore</p>
				</div>

				<div className="dropdown-arrow">▼</div>
			</div>

			{/* Job Seeker and Provider Section */}
			<div className="centered-image">
				<div className="jobProvider">
					<img src={jobProvider} alt="Job Provider" className="jobprov" />
				</div>
				<div className="jobSeeker" onClick={() => navigate("/coordinator/applicants-page")}>
					<img src={JobSeeker} alt="Job Seeker" className="jobseek" />
				</div>
			</div>

			{/* Statistics Section */}
			<div className="stats-wrapper">
				<div className="stats-container">
					{/* Total Applicants */}
					<div className="stat-card">
						<img src={coordApplicants} alt="Applicants Icon" className="stat-icon" />
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
						<img src={coordJobs} alt="Jobs Posted Icon" className="stat-icon" />
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
						<img src={coordActive} alt="Active Users Icon" className="stat-icon" />
						<div className="stat-content">
							<p className="stat-title">Active Now</p>
							<p className="stat-number">{activeNow}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoordLandingPage;
