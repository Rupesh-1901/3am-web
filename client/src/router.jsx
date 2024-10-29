import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/AuthPages/RegisterPage";
import NoAuth from "./layouts/NoAuth";
import AuthRequired from "./layouts/AuthRequired";
import AuthPage from "./pages/AuthPages/AuthPage";
import LoginPage from "./pages/AuthPages/LoginPage";
import ForgotPassword from "./pages/AuthPages/ForgotPassword";
import ResetPassword from "./pages/AuthPages/ResetPassword";
import HomePage from "./pages/Home/HomePage";
import LandingPage from "./pages/AuthPages/LandingPage";
import ProviderLayout from "./layouts/ProviderLayout";
import CreateJobPost from "./pages/Provider/CreateJobPost";
import ViewApplicants from "./pages/Provider/ViewApplicant";
import ProfilePage from "./pages/Provider/ProfilePage";

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
			{
				path: "/landing",
				element: <LandingPage />,
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
			{
				path: "provider",
				element: <ProviderLayout />,
				children: [
					{
						path: "create-job-post",
						element: <CreateJobPost />,
					},
					{
						path: "view-applicants",
						element: <ViewApplicants />,
					},
					{
						path: "profile",
						element: <ProfilePage />,
					},
					{
						index: true,
						element: <CreateJobPost />,
					},
				],
			},
		],
	},
]);
export default router;
