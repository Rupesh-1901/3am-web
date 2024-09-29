import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/AuthPages/RegisterPage";
import NoAuth from "./layouts/NoAuth";
import AuthRequired from "./layouts/AuthRequired";
import AuthPage from "./pages/AuthPages/AuthPage";
import LoginPage from "./pages/AuthPages/LoginPage";
import ForgotPassword from "./pages/AuthPages/ForgotPassword";
import ResetPassword from "./pages/AuthPages/ResetPassword";
import HomePage from "./pages/Home/HomePage";

const router = new createBrowserRouter([
	{
		element: <NoAuth />,
		children: [
			{
				path: "/auth",
				element: <AuthPage />,
				children: [
					{
						path: "login",
						element: <LoginPage />,
					},
					{
						path: "register",
						element: <RegisterPage />,
					},
					{
						path: "forgot-password",
						element: <ForgotPassword />,
					},
				],
			},
			{
				path: "/reset-password",
				element: <ResetPassword />,
			},
		],
	},

	{
		element: <AuthRequired />,
		path: "/",
		children: [
			{
				path: "home",
				element: <HomePage />,
			},
		],
	},
]);
export default router;
