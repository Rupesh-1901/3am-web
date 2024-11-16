import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { store } from "../src/app/store";
import { Provider } from "react-redux";
import App from "./App";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
