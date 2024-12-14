/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./LandingPage.css";
import announcementLanding from "../../assets/announcementLanding.png";
import liveJob from "../../assets/liveJob.svg";
import landingBullets from "../../assets/landingBullets.svg";
import companiesIcon from "../../assets/companiesIcon.svg";
import candidatesIcon from "../../assets/candidatesIcon.svg";
import landingBulletsWhite from "../../assets/landingBulletsWhite.svg";
import companyLogo from "../../assets/companyLogo.svg";
import SimpleSlider from "../../components/ui/SimpleSlider";
import Navbar from "../../components/ui/Navbar";
import NavigationFooter from "../../components/ui/NavigationFooter";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

const LandingPage = () => {
	useEffect(() => {
		document.title = `JobSeeker - Landing`;
		return () => {
			document.title = "JobSeeker";
		};
	}, []);
	const navigate = useNavigate();
	const [countrySelected, setcountrySelected] = useState("India");
	const [openSearchDropdown, setopenSearchDropdown] = useState(false);

	return (
		<>
			<Navbar />
			<div>
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
													strokeWidth="1.62031"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M3.93378 23.5334L8.63269 18.8345"
													stroke="#0066FF"
													strokeWidth="1.62031"
													strokeLinecap="round"
													strokeLinejoin="round"
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
													strokeWidth="1.62031"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
											<div
												style={{
													display: "flex",
													alignItems: "center",
													gap: "2px",
													padding: "10px",
												}}
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
										className="featuredJobButton cursor"
										style={{
											border: " 1.08px solid #CCCCCC",
											borderRadius: "10px",
											fontSize: "16px",
										}}
										onClick={() => {
											navigate("/auth/login", { state: { logInUser: "employee" } });
										}}
									>
										Find A Job
									</div>
								</div>
								<div>
									{" "}
									<div
										className="featuredJobButton cursor"
										style={{
											backgroundColor: "#0A65CC",
											color: "white",
											borderRadius: "10px",
											fontSize: "16px",
										}}
										onClick={() => {
											navigate("/auth/login", { state: { logInUser: "candidate" } });
										}}
									>
										Post A Job
									</div>
								</div>
								<div>
									{" "}
									<div
										className="featuredJobButton cursor"
										style={{
											border: " 1.08px solid #CCCCCC",
											borderRadius: "10px",
											fontSize: "16px",
										}}
										onClick={() => {
											navigate("/auth/register");
										}}
									>
										Sign Up
									</div>
								</div>
							</div>
						</section>
					</div>
					<section className="homeSectionWidth " style={{ padding: " 174px 20px" }}>
						<div>
							<div>
								<div
									className="headingTopography"
									style={{
										fontSize: "106px",
										lineHeight: "113px",
										textAlign: "center",
										fontWeight: 800,
									}}
								>
									Connecting Providers with Seekers{" "}
								</div>
								<div
									className="headingTopography2"
									style={{ fontSize: "36px", lineHeight: "64px", textAlign: "center" }}
								>
									{" "}
									Find the Perfect Job that Matches Your Interests & Skills.
								</div>
								<div
									className="headingTopography3"
									style={{ fontSize: "18px", lineHeight: "28px", textAlign: "center" }}
								>
									{" "}
									Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque
									leo, eget sollicitudin velit bestibulum.{" "}
								</div>
								{/* <img style={{ margin: "0px -25px" }} src={homePageHeroSearch} alt="" /> */}
							</div>
						</div>
					</section>
					<section
						className="homeSectionWidth "
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "450px",
						}}
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
					<section
						className="heroSection"
						style={{ marginBottom: "110px", justifyContent: "flex-start" }}
					>
						<img
							style={{
								height: "1151px",
								width: "auto",
								//  marginTop: "-151px"
							}}
							src={announcementLanding}
							alt=""
							loading="lazy"
						/>
						<div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
							<div>
								<div
									className="headingTopography"
									style={{
										fontSize: "106px",
										lineHeight: "113px",
										textAlign: "left",
										fontWeight: 800,
									}}
								>
									What do we do?{" "}
								</div>
								<div className="headingTopography2">
									{" "}
									Find the Perfect Job that Matches Your Interests & Skills.
								</div>
								<div className="headingTopography3">
									{" "}
									Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque
									leo, eget sollicitudin velit bestibulum. Aliquam vitae turpis in diam convallis
									finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit
									bestibulum.{" "}
								</div>
								<div
									className="whatWedoBox"
									style={{
										width: "563px",
										backgroundColor: "#D9D9D9",
										borderRadius: "30px",
										padding: "73px 49px",
										display: "flex",
										alignItems: "center",
										justifyContent: "flex-start",
										marginTop: "50px",
									}}
								>
									<img
										className="whatWedoBoxBullets"
										style={{ flexShrink: "0", width: "100px", height: "101px" }}
										src={landingBullets}
										alt=""
									/>
									<img
										className="whatWedoBoxBulletsWhite"
										style={{ flexShrink: "0", width: "100px", height: "101px" }}
										src={landingBulletsWhite}
										alt=""
									/>

									<div style={{ paddingLeft: "13px" }} className="whatWedoBoxContent">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid sunt
										maiores at nihil quo, dicta velit perferendis temporibus nemo?
									</div>
								</div>
								<div
									className="whatWedoBox"
									style={{
										width: "563px",
										backgroundColor: "#D9D9D9",
										borderRadius: "30px",
										padding: "73px 49px",
										display: "flex",
										alignItems: "center",
										justifyContent: "flex-start",
										marginTop: "50px",
									}}
								>
									<img
										className="whatWedoBoxBullets"
										style={{ flexShrink: "0", width: "100px", height: "101px" }}
										src={landingBullets}
										alt=""
									/>
									<img
										className="whatWedoBoxBulletsWhite"
										style={{ flexShrink: "0", width: "100px", height: "101px" }}
										src={landingBulletsWhite}
										alt=""
									/>

									<div style={{ paddingLeft: "13px" }} className="whatWedoBoxContent">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid sunt
										maiores at nihil quo, dicta velit perferendis temporibus nemo?
									</div>
								</div>
								<div
									className="whatWedoBox"
									style={{
										width: "563px",
										backgroundColor: "#D9D9D9",
										borderRadius: "30px",
										padding: "73px 49px",
										display: "flex",
										alignItems: "center",
										justifyContent: "flex-start",
										marginTop: "50px",
									}}
								>
									<img
										className="whatWedoBoxBullets"
										style={{ flexShrink: "0", width: "100px", height: "101px" }}
										src={landingBullets}
										alt=""
									/>
									<img
										className="whatWedoBoxBulletsWhite"
										style={{ flexShrink: "0", width: "100px", height: "101px" }}
										src={landingBulletsWhite}
										alt=""
									/>

									<div style={{ paddingLeft: "13px" }} className="whatWedoBoxContent">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid sunt
										maiores at nihil quo, dicta velit perferendis temporibus nemo?
									</div>
								</div>
								<div
									className="whatWedoBox"
									style={{
										width: "563px",
										backgroundColor: "#D9D9D9",
										borderRadius: "30px",
										padding: "73px 49px",
										display: "flex",
										alignItems: "center",
										justifyContent: "flex-start",
										marginTop: "50px",
									}}
								>
									<img
										className="whatWedoBoxBullets"
										style={{ flexShrink: "0", width: "100px", height: "101px" }}
										src={landingBullets}
										alt=""
									/>
									<img
										className="whatWedoBoxBulletsWhite"
										style={{ flexShrink: "0", width: "100px", height: "101px" }}
										src={landingBulletsWhite}
										alt=""
									/>

									<div style={{ paddingLeft: "13px" }} className="whatWedoBoxContent">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid sunt
										maiores at nihil quo, dicta velit perferendis temporibus nemo?
									</div>
								</div>
							</div>
						</div>
					</section>
					<section
						style={{
							backgroundColor: "#0A65CC",
							width: "100%",
							display: "flex",
							justifyContent: "center",
							minHeight: "750px",
						}}
					>
						<section
							className="homeSectionWidth"
							style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
						>
							<div style={{ width: "45%" }}>
								<div
									className="headingTopography"
									style={{
										fontSize: "106px",
										lineHeight: "113px",
										textAlign: "left",
										fontWeight: 800,
										color: "#FEFEFE",
									}}
								>
									Why us?{" "}
								</div>
								<div
									className="headingTopography2"
									style={{
										color: "#FEFEFE",
										fontSize: "36px",
										lineHeight: "64px",
									}}
								>
									{" "}
									Find the Perfect Job that Matches Your Interests & Skills.
								</div>
								<div
									className="headingTopography3"
									style={{ color: "#FEFEFE", fontSize: "18px", lineHeight: "28px" }}
								>
									{" "}
									Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque
									leo, eget sollicitudin velit bestibulum. Aliquam vitae turpis in diam convallis
									finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit
									bestibulum.{" "}
								</div>
							</div>
							<div style={{ width: "50%" }}>
								<div
									style={{
										height: "400px",
										borderRadius: "32px",
										maxWidth: "793px",
										border: "8px solid #292D32",
										padding: "6px",
										backgroundColor: "black",
									}}
								>
									<ReactPlayer
										url="https://www.youtube.com/shorts/QkIJfqQWWCk"
										playing={true} // Autoplay video
										loop={true} // Loop video
										muted={true} // Mute video
										controls={false} // Hide controls
										width="100%"
										height="100%"
									/>
								</div>
							</div>
						</section>
					</section>
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
				<NavigationFooter />
			</div>
		</>
	);
};

export default LandingPage;

















