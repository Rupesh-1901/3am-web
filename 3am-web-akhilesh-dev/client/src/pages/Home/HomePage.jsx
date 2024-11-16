import { useEffect, useState } from "react";
import "./HomePage.css";
import heroSectionImg from "../../assets/heroSectionImg.svg";
import Process from "../../assets/Process.svg";
import liveJob from "../../assets/liveJob.svg";
import becomeCandidate from "../../assets/becomeCandidate.svg";
import companiesIcon from "../../assets/companiesIcon.svg";
import candidatesIcon from "../../assets/candidatesIcon.svg";
import becomeEmployers from "../../assets/becomeEmployers.svg";
import viewAllArrow from "../../assets/viewAllArrow.svg";
import companyLogo from "../../assets/companyLogo.svg";
import GoogleLogo from "../../assets/GoogleLogo.svg";
import PopularVacancies from "./PopularVacancies";
import FeaturedJobs from "./FeaturedJobs";
import SimpleSlider from "../../components/ui/SimpleSlider";

const HomePage = () => {
	useEffect(() => {
		document.title = `JobSeeker - Home`;
		return () => {
			document.title = "JobSeeker";
		};
	}, []);
	const [arrVacancies, setArrVacancies] = useState([]);
	const [arrFeaturedJob, setArrFeaturedJob] = useState([]);
	const [countrySelected, setcountrySelected] = useState("India");
	const [openSearchDropdown, setopenSearchDropdown] = useState(false);
	useEffect(() => {
		setArrVacancies([
			{ id: 0, name: "Anesthesiologists", openPositions: "45,904 Open Positions" },
			{ id: 1, name: "Surgeons", openPositions: "50,364 Open Positions" },
			{ id: 2, name: "Obstetricians-Gynecologists", openPositions: "4,339 Open Positions" },
			{ id: 3, name: "Orthodontists", openPositions: "20,079 Open Positions" },
			{ id: 4, name: "Maxillofacial Surgeons", openPositions: "74,875 Open Positions" },
			{ id: 5, name: "Software Developer", openPositions: "43,359 Open Positions" },
			{ id: 6, name: "Psychiatrists", openPositions: "18,599 Open Positions" },
			{ id: 7, name: "Data Scientist", openPositions: "28,200 Open Positions" },
			{ id: 8, name: "Financial Manager", openPositions: "61,391 Open Positions" },
			{ id: 9, name: "Management Analysis", openPositions: "93,046 Open Positions" },
			{ id: 10, name: "IT Manager", openPositions: "50,963 Open Positions" },
			{ id: 11, name: "Operations Research Analysis", openPositions: "16,627 Open Positions" },
		]);
		setArrFeaturedJob([
			{
				id: 1,
				title: "Technical Support Specialist",
				type: "PART-TIME",
				salaryLowerLimit: "20,000",
				salaryUpperLimit: "25,000",
				companyLogo: GoogleLogo, // Assuming a path to the logo image
				companyName: "Google Inc.",
				companyLocation: "Dhaka, Bangladesh",
				isBookmarked: false,
			},
			{
				id: 2,
				title: "Senior UX Designer",
				type: "FULL-TIME",
				salaryLowerLimit: "20,000",
				salaryUpperLimit: "25,000",
				companyLogo: GoogleLogo,
				companyName: "Google Inc.",
				companyLocation: "Dhaka, Bangladesh",
				isBookmarked: false,
			},
			{
				id: 3,
				title: "Marketing Officer",
				type: "INTERNSHIP",
				salaryLowerLimit: "20,000",
				salaryUpperLimit: "25,000",
				companyLogo: GoogleLogo,
				companyName: "Google Inc.",
				companyLocation: "Dhaka, Bangladesh",
				isBookmarked: false,
			},
			{
				id: 4,
				title: "Junior Graphic Designer",
				type: "INTERNSHIP",
				salaryLowerLimit: "20,000",
				salaryUpperLimit: "25,000",
				companyLogo: GoogleLogo,
				companyName: "Google Inc.",
				companyLocation: "Dhaka, Bangladesh",
				isBookmarked: false,
			},
			{
				id: 5,
				title: "Interaction Designer",
				type: "PART-TIME",
				salaryLowerLimit: "20,000",
				salaryUpperLimit: "25,000",
				companyLogo: GoogleLogo,
				companyName: "Google Inc.",
				companyLocation: "Dhaka, Bangladesh",
				isBookmarked: false,
			},
			{
				id: 6,
				title: "Project Manager",
				type: "FULL-TIME",
				salaryLowerLimit: "20,000",
				salaryUpperLimit: "25,000",
				companyLogo: GoogleLogo,
				companyName: "Google Inc.",
				companyLocation: "Dhaka, Bangladesh",
				isBookmarked: false,
			},
			{
				id: 7,
				title: "Software Engineer",
				type: "FULL-TIME",
				salaryLowerLimit: "20,000",
				salaryUpperLimit: "25,000",
				companyLogo: GoogleLogo,
				companyName: "Google Inc.",
				companyLocation: "Dhaka, Bangladesh",
				isBookmarked: false,
			},
			{
				id: 8,
				title: "Visual Designer",
				type: "FULL-TIME",
				salaryLowerLimit: "20,000",
				salaryUpperLimit: "25,000",
				companyLogo: GoogleLogo,
				companyName: "Google Inc.",
				companyLocation: "Dhaka, Bangladesh",
				isBookmarked: false,
			},
			{
				id: 9,
				title: "Project Manager",
				type: "FULL-TIME",
				salaryLowerLimit: "20,000",
				salaryUpperLimit: "25,000",
				companyLogo: GoogleLogo,
				companyName: "Google Inc.",
				companyLocation: "Dhaka, Bangladesh",
				isBookmarked: false,
			},
			{
				id: 10,
				title: "Front End Developer",
				type: "PART-TIME",
				salaryLowerLimit: "20,000",
				salaryUpperLimit: "25,000",
				companyLogo: GoogleLogo,
				companyName: "Google Inc.",
				companyLocation: "Dhaka, Bangladesh",
				isBookmarked: false,
			},
			{
				id: 11,
				title: "Senior UX Designer",
				type: "FULL-TIME",
				salaryLowerLimit: "20,000",
				salaryUpperLimit: "25,000",
				companyLogo: GoogleLogo,
				companyName: "Google Inc.",
				companyLocation: "Dhaka, Bangladesh",
				isBookmarked: false,
			},
			{
				id: 12,
				title: "Marketing Manager",
				type: "INTERNSHIP",
				salaryLowerLimit: "20,000",
				salaryUpperLimit: "25,000",
				companyLogo: GoogleLogo,
				companyName: "Google Inc.",
				companyLocation: "Dhaka, Bangladesh",
				isBookmarked: false,
			},
		]);
	}, []);
	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
			<div
				style={{
					width: "100%",
					boxShadow: "0px -1.08px 0px 0px #E4E5E8 inset",
					padding: "10px 0px",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<section className="homeSectionWidth searchSection" style={{ padding: "0px" }}>
					<div style={{ display: "flex", gap: "50px", alignItems: "center" }}>
						<div>
							<img src={companyLogo} alt="" />
						</div>

						<div className="searchInput">
							<div className="search-bar-container">
								{/* Search Icon */}
								<span className="search-icon">
									<svg
										width="27"
										height="27"
										viewBox="0 0 27 27"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M14.7359 21.3732C9.96323 21.3732 6.09423 17.5042 6.09423 12.7315C6.09423 7.95885 9.96323 4.08984 14.7359 4.08984C19.5086 4.08984 23.3776 7.95885 23.3776 12.7315C23.3776 17.5042 19.5086 21.3732 14.7359 21.3732Z"
											stroke="#0066FF"
											stroke-width="1.62031"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M3.93378 23.5334L8.63269 18.8345"
											stroke="#0066FF"
											stroke-width="1.62031"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</span>{" "}
								{/* You can replace this with an actual icon */}
								{/* Input Field */}
								<input
									type="text"
									className="search-input"
									placeholder="Job title, keyword, company"
								/>
								{/* Country Selector */}
								<div
									className="country-selector"
									onClick={() => setopenSearchDropdown((prev) => !prev)}
								>
									<svg
										width="13"
										height="8"
										viewBox="0 0 13 8"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1.02955 1.68896L6.43059 7.09001L11.8316 1.68896"
											stroke="#9199A3"
											stroke-width="1.62031"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
									<div
										style={{ display: "flex", alignItems: "center", gap: "2px", padding: "10px" }}
									>
										{" "}
										<img
											src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
											alt="India Flag"
											className="country-flag"
										/>
										{countrySelected}
									</div>
									{openSearchDropdown && (
										<div className="country-dropdown">
											<div onClick={() => setcountrySelected("India")}>
												<img
													src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
													alt="India Flag"
													className="country-flag"
												/>
												India
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
					<div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
						<div>
							{" "}
							<div
								className="featuredJobButton"
								style={{ border: " 1.08px solid #CCCCCC", borderRadius: "10px", fontSize: "16px" }}
							>
								View All
							</div>
						</div>
						<div>
							{" "}
							<div
								className="featuredJobButton"
								style={{
									backgroundColor: "#0A65CC",
									color: "white",
									borderRadius: "10px",
									fontSize: "16px",
								}}
							>
								Post A Job
							</div>
						</div>
					</div>
				</section>
			</div>
			<section className="homeSectionWidth heroSection">
				<img src={heroSectionImg} alt="" />
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div>
						<div className="headingTopography">Connecting Providers with Seekers </div>
						<div className="headingTopography2">
							{" "}
							Find the Perfect Job that Matches Your Interests & Skills.
						</div>
						<div className="headingTopography3">
							{" "}
							Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo,
							eget sollicitudin velit bestibulum.{" "}
						</div>
						{/* <img style={{ margin: "0px -25px" }} src={homePageHeroSearch} alt="" /> */}
					</div>
					<div className="searchInput" style={{ margin: "25px 0px" }}>
						<div className="search-bar-container" style={{ width: "700px", padding: "5px 10px" }}>
							{/* Search Icon */}
							<span className="search-icon">
								<svg
									width="27"
									height="27"
									viewBox="0 0 27 27"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M14.7359 21.3732C9.96323 21.3732 6.09423 17.5042 6.09423 12.7315C6.09423 7.95885 9.96323 4.08984 14.7359 4.08984C19.5086 4.08984 23.3776 7.95885 23.3776 12.7315C23.3776 17.5042 19.5086 21.3732 14.7359 21.3732Z"
										stroke="#0066FF"
										stroke-width="1.62031"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M3.93378 23.5334L8.63269 18.8345"
										stroke="#0066FF"
										stroke-width="1.62031"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>{" "}
							{/* You can replace this with an actual icon */}
							{/* Input Field */}
							<input
								type="text"
								className="search-input"
								placeholder="Job title, keyword word"
								style={{ width: "200px" }}
							/>
							<span
								className="search-icon"
								style={{ borderLeft: "1px solid #e0e0e0", paddingLeft: "10px" }}
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
										stroke="#0066FF"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
										stroke="#0066FF"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</span>{" "}
							<input
								style={{ width: "157px" }}
								type="text"
								className="search-input"
								placeholder="Your Location"
							/>
							<div
								className="featuredJobButton"
								style={{
									backgroundColor: "#0A65CC",
									color: "white",
									borderRadius: "10px",
									fontSize: "16px",
									height: "57px",
									padding: "10px 14px",

									margin: "10px 0px",
								}}
							>
								Search Candidate Database
							</div>
						</div>
					</div>
					<div style={{ fontSize: "14px" }}>
						Suggestion: Designer, Programing,{" "}
						<span style={{ color: "#0A65CC" }}>Digital Marketing</span>,Video,Animation.
					</div>
				</div>
			</section>
			<section
				className="homeSectionWidth "
				style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "450px" }}
			>
				<div className="section2">
					<div>
						<img className="section2Img" src={liveJob} alt="" />
						<div className="section2NumberFont">1,75,324</div>
						<div className="section2Font">Live Job</div>
					</div>
					<div>
						<img className="section2Img" src={companiesIcon} alt="" />
						<div className="section2NumberFont">1,75,324</div>
						<div className="section2Font">Companies</div>
					</div>
					<div>
						<img className="section2Img" src={candidatesIcon} alt="" />
						<div className="section2NumberFont">1,75,324</div>
						<div className="section2Font">Candidates</div>
					</div>
					<div>
						<img className="section2Img" src={liveJob} alt="" />
						<div className="section2NumberFont">1,75,324</div>
						<div className="section2Font">New Jobs</div>
					</div>
				</div>
			</section>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "600px",
				}}
			>
				<section className="homeSectionWidth ">
					<div style={{ marginBottom: "30px" }}>
						<div className="section3Heading">Most Popular Vacancies</div>
						<div className="styledUnderline"></div>
					</div>
					<div>
						<PopularVacancies arrVacancies={arrVacancies} />
					</div>
				</section>
			</div>
			{/* <img className={"section4Img"} src={section4line} alt="" /> */}
			<div
				style={{
					backgroundColor: "#f1f2f4",
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "600px",
				}}
			>
				<section className="homeSectionWidth  section4">
					<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						{" "}
						<div className="section3Heading">How jobpilot work</div>
						<div className="styledUnderline"></div>
					</div>
					<div>
						<img style={{ width: "1000px" }} src={Process} alt="" />
					</div>
				</section>
			</div>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<section className="homeSectionWidth ">
					<div
						style={{
							marginBottom: "30px",
							display: "flex",
							justifyContent: "space-between",
							margin: "90px 0px 38px 0px",
						}}
					>
						<div className="section3Heading">Featured job</div>
						<div className="featuredJobButton">
							View All <img src={viewAllArrow} alt="" />
						</div>
					</div>
					<div>
						<FeaturedJobs arrFeaturedJob={arrFeaturedJob} setArrFeaturedJob={setArrFeaturedJob} />
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							margin: "90px 0px 40px 0px",
						}}
					>
						<div className="registerOption">
							<div className="registerOptionHeading">Become a Candidate</div>
							<div className="registerOptionContent">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor
								convallis efficitur.
							</div>
							<div>
								<img className="cursor" src={becomeCandidate} alt="" />
							</div>
						</div>
						<div className="registerOption" style={{ backgroundColor: "#D60000" }}>
							<div className="registerOptionHeading">Become a Employers</div>
							<div className="registerOptionContent">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor
								convallis efficitur.
							</div>
							<div>
								<img className="cursor" src={becomeEmployers} alt="" />
							</div>
						</div>
					</div>
				</section>
			</div>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#f1f2f4",
				}}
			>
				<section className="homeSectionWidth " style={{ marginBottom: "100px" }}>
					<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						<div className="section3Heading" style={{ marginBottom: "30px" }}>
							Clients Testimonial
						</div>
						<SimpleSlider />
					</div>
				</section>
			</div>
		</div>
	);
};

export default HomePage;
