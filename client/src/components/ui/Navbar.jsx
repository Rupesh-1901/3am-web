/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import searchSvg from "../../assets/searchSvg.svg";
import { useLocation, useNavigate } from "react-router-dom";
import OutsideClickHandler from "./OutsideClickHandler";

const Navbar = () => {
	const [isActive, setIsActive] = useState(0);
	const location = useLocation();
	const navigate = useNavigate();
	const [navContents, setNavContents] = useState([
		{
			id: 0,
			name: "Home",
			isActive: false,
			isDropdown: false,
			dropdown: [],
			clickAction: () => navigate("/home"),
		},
		{
			id: 1,
			name: "Find Job",
			isActive: false,
			isDropdown: false,
			dropdown: [],
			clickAction: () => navigate("/home"),
		},
		{
			id: 2,
			name: "Employers",
			isActive: false,
			isDropdown: true,
			dropdown: [
				{
					id: 0,
					name: "Post Job",
					isActive: true,
					clickAction: () => navigate("/provider/create-job-post"),
				},
				{
					id: 1,
					name: "View Applicants",
					isActive: true,
					clickAction: () => navigate("/provider/view-applicants"),
				},
				{
					id: 2,
					name: "Profile",
					isActive: true,
					clickAction: () => navigate("/provider/profile"),
				},
			],
			clickAction: () => navigate("/provider/create-job-post"),
		},
		{
			id: 3,
			name: "Customer Support",
			isActive: false,
			isDropdown: false,
			dropdown: [],
			clickAction: () => navigate("/home"),
		},
	]);
	const [tabIndex, setTabIndex] = useState(0);
	const [openSearchDropdown, setopenSearchDropdown] = useState(false);

	useEffect(() => {
		if (location?.pathname === "/landing") {
			setNavContents((prev) =>
				prev?.map((it) => {
					if (it?.name === "Customer Support") {
						return {
							...it,
							isActive: true,
						};
					} else {
						return {
							...it,
							isActive: false,
						};
					}
				})
			);
		} else {
			setNavContents((prev) =>
				prev?.map((it) => {
					return {
						...it,
						isActive: true,
					};
				})
			);
		}
	}, [location?.pathname]);

	const handleTabChange = (newTabIndex) => {
		setTabIndex(newTabIndex);
	};
	return (
		<div className="navbar">
			<div style={{ position: "relative" }}>
				<div className="tabs">
					{navContents
						?.filter((it) => it?.isActive)
						?.map((item, index) => (
							<div
								key={item?.id}
								className={
									item?.isDropdown
										? `tabHeading mainDropdownHover ${tabIndex === index ? "tabActive" : ""}`
										: `tabHeading ${tabIndex === index ? "tabActive" : ""}`
								}
								onClick={() => {
									handleTabChange(index);
									console.log("object 111111");
								}}
								style={{
									fontFamily: "Inter, sans-serif",
									fontSize: "15.12px",
									fontWeight: 400,
									lineHeight: "21.6px",
									textTransform: "none",
									cursor: "pointer",
								}}
							>
								<span>{item?.name}</span>
								<div
									className="country-dropdown dropdownHoverDiv"
									style={{
										top: "45px",
										left: " 6px",
										position: "absolute",
										width: "fit-content",
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											alignItems: "start",
											justifyContent: "center",
											gap: "2px",
											padding: "0px",
										}}
									>
										{item?.dropdown
											?.filter((item) => item?.isActive)
											?.map((it) => {
												return (
													<div
														key={it?.id}
														className="dropdownhover"
														onClick={(e) => {
															console.log("object 22222");
															it?.clickAction();
															e.stopPropagation();
														}}
														style={{ color: "#555 " }}
													>
														{it?.name}
													</div>
												);
											})}
									</div>
								</div>
							</div>
						))}
				</div>
			</div>

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
							English
						</div>
						{openSearchDropdown && (
							<OutsideClickHandler
								onOutsideClick={() => {
									setopenSearchDropdown((prev) => !prev);
								}}
								class={"searchDDHolder"}
							>
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
							</OutsideClickHandler>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
