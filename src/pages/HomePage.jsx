import { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const HomePage = () => {
	useEffect(() => {
		document.title = `JobSeeker - Home`;
		return () => {
			document.title = "JobSeeker";
		};
	}, []);
	return (
		<div>
			<div>Welcome to Homepage</div>
		</div>
	);
};

export default HomePage;
