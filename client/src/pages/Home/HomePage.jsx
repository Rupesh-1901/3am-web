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
			<section className="homeSectionWidth heroSection">
				<img src={heroSectionImg} alt="" />
				<div>
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
