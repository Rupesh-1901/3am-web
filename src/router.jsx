import HomePage from "./pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/AuthPages/RegisterPage";
import NoAuth from "./layouts/NoAuth";
import AuthRequired from "./layouts/AuthRequired";
import AuthPage from "./pages/AuthPages/AuthPage";
import LoginPage from "./pages/AuthPages/LoginPage";

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
						element: <RegisterPage />, // will rename component after i create it
					},
				],
			},
			{
				path: "/reset-password",
				element: <AuthPage />, // will rename component after i create it
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
