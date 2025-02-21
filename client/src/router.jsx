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
import CoordLandingPage from "./pages/Coordinator/CoordLandingPage";
import CoordinatorApplicantsPage from "./pages/Coordinator/CoordApplicantPage";
import Description from "./pages/Provider/Description";
import CoordinatorIndApplicant from "./pages/Coordinator/CoordinatorApplicant";

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
          {
            path: "view-applicants/description/:id",
            element: <Description />,
          },
        ],
      },
    ],
  },
  {
    element: <NoAuth />,
    children: [
      {
        path: "/coordinator/landing-page",
        element: <CoordLandingPage />,
      },
      {
        path: "/coordinator/applicants-page",
        element: <CoordinatorApplicantsPage />,
      },
      {
        path: "/coordinator/applicant-page",
        element: <CoordinatorIndApplicant />,
      },
    ],
  },
]);
export default router;
