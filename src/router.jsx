import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import AuthLayout from "./layouts/AuthLayout";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
export default router;
