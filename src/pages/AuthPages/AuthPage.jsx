import { useState } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import login from "../../assets/login.svg";
import logo from "../../assets/logo.svg";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthPage = () => {
	const location = useLocation();
	// const navigate = useNavigate();
	const pathString = location?.pathname;
	const pathArr = location?.pathname?.split("/");
	console.log("object location?.pathname", location?.pathname);
	console.log("object pathArr", pathArr);
	console.log("object pathString", pathString);
	const { isTempLogin } = useSelector((state) => state.auth);

	return (
		<>
			{!isTempLogin ? (
				<section
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						justifyContent: "space-between",
						gap: "50px",
					}}
				>
					<div>
						<div style={{ margin: "37px 0px 31px", paddingLeft: "55px" }}>
							<img style={{ height: "52px" }} src={logo} alt="logo" />
						</div>
						<Outlet />
					</div>
					<div style={{ height: "100%" }}>
						<img style={{ height: "100%" }} src={login} alt="" />
					</div>
				</section>
			) : (
				<Navigate state={{ from: location }} to={`${isTempLogin && "/home"}`} replace />
			)}
		</>
	);
};

export default AuthPage;
