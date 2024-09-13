import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRequired = () => {
	const { isTempLogin } = useSelector((state) => state.auth);
	const location = useLocation();
	console.log("object isTempLogin", isTempLogin);
	return isTempLogin ? (
		<Outlet />
	) : (
		<Navigate state={{ from: location }} to="/auth/login" replace />
	);
};

export default AuthRequired;
