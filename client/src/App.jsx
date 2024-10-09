import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { Toast } from "./components/ui/Toast";

function App() {
	return (
		<>
			<RouterProvider router={router} />
			<Toast />
		</>
	);
}

export default App;
