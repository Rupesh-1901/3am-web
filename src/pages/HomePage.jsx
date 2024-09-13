import { useEffect } from "react";

const HomePage = () => {
	useEffect(() => {
		document.title = `JobSeeker - Home`;
		return () => {
			document.title = "JobSeeker";
		};
	}, []);
	return (
		<div>
			<div></div>
		</div>
	);
};

export default HomePage;
