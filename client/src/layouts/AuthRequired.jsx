import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/ui/Navbar";
import NavigationFooter from "../components/ui/NavigationFooter";
import "../components/ui/UiComponent.css";

const AuthRequired = () => {
  const { isTempLogin } = useSelector((state) => state.auth);
  const location = useLocation();

  return isTempLogin ? (
    <div style={{ position: "relative", overflow: "auto", height: "100%" }}>
      {/* Fixed Navbar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <Navbar />
      </div>

      {/* Add padding to prevent overlap */}
      <div style={{ paddingTop: "60px", overflow: "auto" }}>
        <Outlet />
        <NavigationFooter />
      </div>
    </div>
  ) : (
    <Navigate state={{ from: location }} to="/landing" replace />
  );
};

export default AuthRequired;
