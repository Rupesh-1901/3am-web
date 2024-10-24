/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import searchSvg from "../../assets/searchSvg.svg";

const Navbar = () => {
	const [isActive, setIsActive] = useState(0);
	const [navContents, setNavContents] = useState([
		{ id: 0, name: "Home", isActive: false },
		{ id: 1, name: "Find Job", isActive: false },
		{ id: 2, name: "Employers", isActive: false },
		{ id: 3, name: "Candidates", isActive: false },
		{ id: 4, name: "Customer Support", isActive: false },
	]);
	const [tabIndex, setTabIndex] = useState(0);
	const [openSearchDropdown, setopenSearchDropdown] = useState(false);

	const handleTabChange = (event, newTabIndex) => {
		setTabIndex(newTabIndex);
	};
	return (
		<div className="navbar">
			<Tabs
				value={tabIndex}
				onChange={handleTabChange}
				// textColor="#0A65CC"
				indicatorColor="#0A65CC"
				// variant="scrollable"
				// scrollButtons="auto"
				TabIndicatorProps={{ style: { background: "#1296B0" } }}
			>
				{navContents?.map((item) => (
					<Tab
						key={item?.id}
						label={
							<span className={`tabHeading ${tabIndex === 0 && "tabActive"}`}>{item?.name}</span>
						}
						sx={{
							fontFamily: "Inter, sans-serif", // Font family
							fontSize: "15.12px", // Font size
							fontWeight: 400, // Font weight
							lineHeight: "21.6px", // Line height
							textTransform: "none", // Prevent uppercase transformation
						}}
					/>
				))}
			</Tabs>
			{/* <ul className="navbar-links">
				{navContents?.map((item) => (
					<li key={item?.id}>
						<div
							onClick={() => {
								setIsActive(item?.id);
							}}
							className={isActive === item?.id ? "navbar-activeTab" : ""}
						>
							{item?.name}
						</div>
					</li>
				))}
			</ul> */}
			<div className="navbar-actions">
				<div className="search-bar">
					<div
						className="country-selector"
						style={{ borderLeft: "none" }}
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
						<div style={{ display: "flex", alignItems: "center", gap: "2px", padding: "10px" }}>
							{" "}
							<img
								src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
								alt="India Flag"
								className="country-flag"
							/>
							English
						</div>
						{openSearchDropdown && (
							<div className="country-dropdown" style={{ left: "26px" }}>
								<div>
									<img
										src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
										alt="India Flag"
										className="country-flag"
									/>
									English
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
