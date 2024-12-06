import logoWhite from "../../assets/logoWhite.svg";
import navigationArrow from "../../assets/navigationArrow.svg";
import facebookIcon from "../../assets/facebookIcon.svg";
import youtubeIcon from "../../assets/youtubeIcon.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import twitterIcon from "../../assets/twitterIcon.svg";

const NavigationFooter = () => {
	return (
		<div className="navigationFooterCss">
			<footer>
				{/* Contact Section */}
				<div className="footer-section contact">
					<h3>
						<img src={logoWhite} alt="" />
					</h3>
					<p style={{ marginBottom: "10px", fontSize: "17px" }}>
						Call now:{" "}
						<strong>
							<span style={{ color: "#fff" }}>(319) 555-0115</span>
						</strong>
					</p>
					<p style={{ fontSize: "17px" }}>
						{" "}
						6391 Elgin St. Celina, Delaware 10299, New York, United States of America
					</p>
				</div>
				<div className="footerFlexDiv">
					<div>
						{/* Quick Links */}
						<div className="footer-section quick-links hoverEffectFooterSection">
							<h3>Quick Link</h3>
							<div>
								<img className="hoverImg" src={navigationArrow} alt="" />
								<div>About</div>
							</div>
							<div>
								<img className="hoverImg" src={navigationArrow} alt="" />
								<div>Contact</div>
							</div>
							<div>
								<img className="hoverImg" src={navigationArrow} alt="" />
								<div>Pricing</div>
							</div>
							<div>
								<img className="hoverImg" src={navigationArrow} alt="" />
								<div>Blog</div>
							</div>
						</div>

						{/* Candidate Section */}
						<div className="footer-section candidate hoverEffectFooterSection">
							<h3>Candidate</h3>
							<div>
								<img className="hoverImg" src={navigationArrow} alt="" />
								<div>Browse Jobs</div>
							</div>
							<div>
								<img className="hoverImg" src={navigationArrow} alt="" />
								<div>Browse Employers</div>
							</div>
							<div>
								<img className="hoverImg" src={navigationArrow} alt="" />
								<div>Candidate Dashboard</div>
							</div>
							<div>
								<img className="hoverImg" src={navigationArrow} alt="" />
								<div>Saved Jobs</div>
							</div>
						</div>
					</div>
					<div>
						{/* Employers Section */}
						<div className="footer-section employers hoverEffectFooterSection">
							<h3>Employers</h3>
							<div>
								<img className="hoverImg" src={navigationArrow} alt="" />
								<div>Post a Job</div>
							</div>
							<div>
								<img className="hoverImg" src={navigationArrow} alt="" />
								<div>Browse Candidates</div>
							</div>
							<div>
								<img className="hoverImg" src={navigationArrow} alt="" />
								<div>Employers Dashboard</div>
							</div>
							<div>
								<img className="hoverImg" src={navigationArrow} alt="" />
								<div>Applications</div>
							</div>
						</div>

						{/* Support Section */}
						<div className="footer-section support hoverEffectFooterSection">
							<h3>Support</h3>
							<div>
								<img className="hoverImg" src={navigationArrow} alt="" />
								<div>Privacy Policy</div>
							</div>
							<div>
								<img className="hoverImg" src={navigationArrow} alt="" />
								<div>FAQs</div>
							</div>
							<div>
								<img className="hoverImg" src={navigationArrow} alt="" />
								<div>Terms & Conditions</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

			{/* Footer Bottom */}
			<div
				style={{
					width: "100%",
					boxShadow: "0px 1.08px 0px 0px #2f3338 inset",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<div className="footer-bottom">
					<p>© 2021 Jobpilot - Job Portal. All rights reserved</p>
					<div className="social-icons">
						<img src={facebookIcon} alt="Facebook" />
						<img src={youtubeIcon} alt="YouTube" />
						<img src={instagramIcon} alt="Instagram" />
						<img src={twitterIcon} alt="Twitter" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavigationFooter;
