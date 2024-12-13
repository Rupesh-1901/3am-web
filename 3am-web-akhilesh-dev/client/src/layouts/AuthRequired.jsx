import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/ui/Navbar";
import NavigationFooter from "../components/ui/NavigationFooter";
import "../components/ui/UiComponent.css";

const AuthRequired = () => {
	const { isTempLogin } = useSelector((state) => state.auth);
	const location = useLocation();
	console.log("object isTempLogin", isTempLogin);
	return isTempLogin ? (
		<div style={{ position: "relative", overflow: "auto", height: "100%" }}>
			<Navbar />
			<div style={{ overflow: "auto" }}>
				{/* <Sidebar /> */}
				<div>
					<Outlet />
				</div>
				<NavigationFooter />
			</div>
		</div>
	) : (
		<Navigate state={{ from: location }} to="/landing" replace />
	);
};

export default AuthRequired;
