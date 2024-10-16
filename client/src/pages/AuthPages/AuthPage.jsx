import { useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import login from "../../assets/login.svg";
import logo from "../../assets/logo.svg";
import { Outlet } from "react-router-dom";

const AuthPage = () => {
	const location = useLocation();
	// const navigate = useNavigate();
	const pathString = location?.pathname;
	const pathArr = location?.pathname?.split("/");
	console.log("object location?.pathname", location?.pathname);
	console.log("object pathArr", pathArr);
	console.log("object pathString", pathString);

	return (
		<>
			<section
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					gap: "50px",
					height: "100vh",
				}}
			>
				<div style={{ margin: "0px auto" }}>
					<div>
						<div style={{ margin: "37px 0px 31px", paddingLeft: "55px" }}>
							<img style={{ height: "52px" }} src={logo} alt="logo" loading="lazy" />
						</div>

						<Outlet />
					</div>
				</div>
				<div style={{ height: "100%" }}>
					<img style={{ height: "100%" }} src={login} alt="" loading="lazy" />
				</div>
			</section>
		</>
	);
};

export default AuthPage;
