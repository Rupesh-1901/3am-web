import React from "react";
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
import copy from "../../assets/copySymbol.svg";
import rtArr from "../../assets/coordRightarr.svg";
import blueRedirect from "../../assets/redirectSymbolBlue.svg";
import RedRedirect from "../../assets/redirectSymbolRed.svg";
import separator from "../../assets/coordVerticalSeparator.svg";
import { useNavigate } from "react-router-dom";

const CoordinatorIndApplicant = () => {
	const jobDetails = {
		title: "Rupesh Mishra",
		description: "Full Stack Developer",
		requirements: ["5 years Experience", "Team Leader", "Innovative and Creative eye"],
		skills: ["Adobe XD", "Sketch Pro", "Adobe XD", "Sketch Pro", "Sketch Pro", "Sketch Pro"],
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
	const navigate = useNavigate();

	return (
		<div className="container">
			{/* <div style={{ width: "100%", position: "sticky", top: "0", zIndex: "1000" }}>
				<Navbar />
			</div> */}

			{/* Left Sidebar (Fixed) */}

			<aside className="left-sidebar" style={{ borderRadius: "8px" }}>
				<div className="sidebar-top">
					<div className="menu-item">
						<img src={dashboard} alt="Dashboard Icon" />
						<span>Dashboard</span>
					</div>
					<div className="menu-item">
						<img src={Location} alt="Location Icon" />
						<span>Location</span>
					</div>
					<div className="menu-item">
						<img src={DatePosted} alt="Date Icon" style={{ backgroundColor: "grey" }} />
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
							onClick={() => navigate("/coordinator/applicants-page")}
						>
							Back &#8594;
						</button>
						<button className="search-btn">
							Search
							<img src={searchButton} alt="Search Icon" className="search-icon" />
						</button>
					</div>
				</nav>
				<div className="job-details">
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
								<p style={{ color: "white", margin: "auto" }}>#46384ut6584947</p>
							</div>
							<div className="copy-symbol" style={{ marginTop: "1rem", cursor: "pointer" }}>
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
							<p style={{ marginBottom: "0" }}>- Team lead at cognizant for 2 years</p>
							<p style={{ marginBottom: "0" }}>- innovative and creative eye</p>
							<p style={{ marginBottom: "0" }}>- Handled multiple projects Hand in Hand </p>
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
									<a href="#" style={{ color: "blue", textDecoration: "underline" }}>
										link
									</a>
									<img src={blueRedirect} alt="Blue Redirect Icon" style={{ cursor: "pointer" }} />
								</div>

								{/* Right Section - Resume */}
								<div
									className="resume-section"
									style={{ display: "flex", alignItems: "center", gap: "6px" }}
								>
									<span>Resume</span>
									<a href="#" style={{ color: "blue", textDecoration: "underline" }}>
										link
									</a>
									<img src={RedRedirect} alt="Red Redirect Icon" style={{ cursor: "pointer" }} />
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

						<div className="job-meta">
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
							<img src={RupeshBhai} alt="" style={{ height: "35.3vh", width: "18.5vw" }} />
						</div>
					</div>
				</div>
				<div
					className="action-buttons"
					style={{
						display: "flex",

						gap: "20px",
						marginTop: "20px",
						marginLeft: "5rem",
						marginBottom: "2rem",
					}}
				>
					<button
						style={{
							backgroundColor: "green",
							color: "white",
							padding: "10px 20px",
							border: "none",
							borderRadius: "5px",
							cursor: "pointer",
							fontSize: "1.4rem",
						}}
					>
						Approve
					</button>
					<button
						style={{
							backgroundColor: "red",
							color: "white",
							padding: "10px 20px",
							border: "none",
							borderRadius: "5px",
							cursor: "pointer",
							fontSize: "1.4rem",
						}}
					>
						Reject
					</button>
				</div>
				<div
					style={{
						margin: "auto",
						display: "flex",
						justifyContent: "center",
						marginBottom: "1.8rem",
					}}
				>
					<p style={{ color: "lightgray" }}>
						---------------------------------------------------------------------------------------------------------------------
					</p>
				</div>

				{/* <div className="separator">
          <img
            src={separator}
            alt=""
            style={{ color: "grey", height: "21px", width: "8vw" }}
          />
        </div> */}
				<div className="applicants-grid">
					{applicants.map((applicant) => (
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
								<button className="message-icon">
									<img
										src={rtArr}
										alt="Message"
										style={{ height: "2rem", width: "2rem", margin: "auto" }}
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
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CoordinatorIndApplicant;
