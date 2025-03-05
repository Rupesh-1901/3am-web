import { Outlet } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NoAuth = () => {
	const { isTempLogin } = useSelector((state) => state.auth);
	const { loginType } = useSelector((state) => state.auth);
	const location = useLocation();
	return (
		<>
			{!isTempLogin ? (
				<Outlet />
			) : (
				<Navigate
					state={{ from: location }}
					to={`${
						isTempLogin && (loginType === "Coordinator" ? "/coordinator/landing-page" : "/home")
					}`}
					replace
				/>
			)}
		</>
	);
};

export default NoAuth;
