import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import NoAuth from "./layouts/NoAuth";
import AuthRequired from "./layouts/AuthRequired";

const router = new createBrowserRouter([
	{
		element: <NoAuth />,
		children: [
			{
				path: "/register",
				element: <RegisterPage />,
			},
			{
				path: "/",
				element: <LoginPage />,
			},
		],
	},
	{
		element: <AuthRequired />,
		children: [
			{
				path: "/home",
				element: <HomePage />,
			},
		],
	},
]);
export default router;
